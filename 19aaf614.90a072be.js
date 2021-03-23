(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{106:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),c=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=c(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=c(n),p=a,d=b["".concat(o,".").concat(p)]||b[p]||m[p]||i;return n?r.a.createElement(d,l(l({ref:t},u),{},{components:n})):r.a.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},69:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return c}));var a=n(3),r=n(7),i=(n(0),n(106)),o={id:"genrule-layer",title:"image.genrule_layer"},l={unversionedId:"genrule-layer",id:"genrule-layer",isDocsHomePage:!1,title:"image.genrule_layer",description:"Why you should not use image.genrule_layer",source:"@site/docs/genrule-layer.md",slug:"/genrule-layer",permalink:"/antlir/docs/genrule-layer",editUrl:"https://github.com/facebookincubator/antlir/edit/master/website/docs/genrule-layer.md",version:"current",sidebar:"docs",previous:{title:"Image",permalink:"/antlir/docs/api/image"},next:{title:"image.*_unittest",permalink:"/antlir/docs/runtime/nspawn-runtime/image-unittest"}},s=[{value:"Why you should <em>not</em> use <code>image.genrule_layer</code>",id:"why-you-should-not-use-imagegenrule_layer",children:[]},{value:"When <code>image.genrule_layer</code> <em>may</em> be appropriate",id:"when-imagegenrule_layer-may-be-appropriate",children:[]},{value:"Rules of <code>image.genrule_layer</code> usage:",id:"rules-of-imagegenrule_layer-usage",children:[]},{value:"Deliberate limitations of the <code>image.genrule_layer</code> implementation",id:"deliberate-limitations-of-the-imagegenrule_layer-implementation",children:[]},{value:"Ok, I will be very careful \u2014 where are the API docs?",id:"ok-i-will-be-very-careful--where-are-the-api-docs",children:[]}],u={toc:s};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"why-you-should-not-use-imagegenrule_layer"},"Why you should ",Object(i.b)("em",{parentName:"h2"},"not")," use ",Object(i.b)("inlineCode",{parentName:"h2"},"image.genrule_layer")),Object(i.b)("p",null,"The core ",Object(i.b)("inlineCode",{parentName:"p"},"image.layer")," abstraction deliberately prevents the execution of\narbitrary commands as part of the image build.  There are many reasons:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Arbitrary commands, even with no network, can easily be\nnon-deterministic (e.g. code that uses time / RNGs, or code that\ndepends on the inherent entropy of the process execution model).\nEventually, it would be nice to integrate something like\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/dettrace/dettrace"}),"DetTrace"),", but this is out of\nscope for now.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"We value ",Object(i.b)("inlineCode",{parentName:"p"},"image.feature"),"s, which permit order-independent composition of\nindependent parts of the filesystem.  For this declarative style of\nprogramming to work, the compiler needs to fully understand the side\neffects of evaluating a feature.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"When executing an arbitrary command, the modified filesystem can\narbitrarily depend on the pre-existing filesystem.  So, in order to be\ndeterministic, arbitrary commands must be explicitly ordered by the\nprogrammer.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Arbitrary commands typically use shell syntax, which is both fragile, and\nis not adequately covered by ",Object(i.b)("inlineCode",{parentName:"p"},".bzl")," linters. Adding more powerful linters\nis possible (e.g. ShellCheck for shell fields), but does not make shell\nscripts as obvious to the reader as intention-oriented ",Object(i.b)("inlineCode",{parentName:"p"},".bzl")," programs."))),Object(i.b)("h2",{id:"when-imagegenrule_layer-may-be-appropriate"},"When ",Object(i.b)("inlineCode",{parentName:"h2"},"image.genrule_layer")," ",Object(i.b)("em",{parentName:"h2"},"may")," be appropriate"),Object(i.b)("p",null,"We neither can, nor should, support every possible filesystem operation as\npart of ",Object(i.b)("inlineCode",{parentName:"p"},"antlir/compiler"),' core.  This is where the "genrule layer"\nabstraction comes in.'),Object(i.b)("p",null,"A genrule layer runs a command inside the snapshot of a parent image, and\ncaptures the resulting filesystem as its output.  It is the ",Object(i.b)("inlineCode",{parentName:"p"},"antlir")," analog\nof a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://buck.build/rule/genrule.html"}),"Buck ",Object(i.b)("inlineCode",{parentName:"a"},"genrule")),".  To encourage\ndeterminism, the command has no network access.  You can make other build\nartifacts available to your build as follows:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"image.layer(\n    name = '_setup_foo',\n    parent_layer = '...',\n    features = [\n        # `genrule_layer` runs as `nobody` by default\n        image.ensure_subdirs_exist('/', 'output', user='nobody'),\n        image.install(':foo', '/output/_temp_foo'),\n    ],\n)\n\nimage.genrule_layer(\n    name = '_translate_foo',\n    parent_layer = ':setup',\n    cmd = ['/bin/sh', '-c', 'tr a-z a-Z < /output/_temp_foo > /output/FOO'],\n)\n\nimage.layer(\n    name = 'foo',\n    parent_layer = ':_translate_foo',\n    # Clean up temporary state\n    features = [image.remove_path('/output/_temp_foo')],\n)\n")),Object(i.b)("p",null,"Customers should not use ",Object(i.b)("inlineCode",{parentName:"p"},"image.genrule_layer")," directly, both because using\narbitrary commands in builds is error-prone, and because the goal is that\nimage build declarations be as intent-oriented as possible."),Object(i.b)("p",null,"Instead, we request that library authors create self-contained, robust,\ndeterministic, intent-oriented abstractions on top of ",Object(i.b)("inlineCode",{parentName:"p"},"image.genrule_layer"),".\nWhen the resulting rule is either a natural part of Antlir, or generically\nuseful, you can place it in a subdirectory of ",Object(i.b)("inlineCode",{parentName:"p"},"bzl/genrule/"),".  For anything\nproject-specific, please keep it with your project.  For a reasonable\nexample, take a look at ",Object(i.b)("inlineCode",{parentName:"p"},"bzl/genrule/rpmbuild"),"."),Object(i.b)("p",null,"The general idea should be to create a layer per logical image build step,\nthough the macro may also create intermediate layers that are not visible to\nthe end user."),Object(i.b)("p",null,"Layering explicitly sequences the steps, and also avails us of Buck's\ncaching of build outputs, so that iterating on child layers does not cost a\nre-build of the parent.  To make the most of caching, try to put the steps\nthat change most frequently later in the sequence (this parallels the best\npractice for developing ",Object(i.b)("inlineCode",{parentName:"p"},"Dockerfile"),"s)."),Object(i.b)("p",null,"In some cases, you are not interested in the entirety of the genrule layer,\nbut only in a few artifacts that were built inside of it.  The example of\n",Object(i.b)("inlineCode",{parentName:"p"},"rpmbuild")," works this way.  Follow that same pattern to get your files:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Have ",Object(i.b)("inlineCode",{parentName:"li"},"image.genrule_layer")," leave the desired output(s) at a known path\nin the image."),Object(i.b)("li",{parentName:"ul"},"To use the output(s) in another image, just use regular image actions\ntogether with ",Object(i.b)("inlineCode",{parentName:"li"},"image.source(layer=':genrule-layer', path='/out')"),"."),Object(i.b)("li",{parentName:"ul"},"The moment you need to use such outputs as inputs to a regular Buck\nmacro, ping ",Object(i.b)("inlineCode",{parentName:"li"},"antlir")," devs, and we'll provide an ",Object(i.b)("inlineCode",{parentName:"li"},"image.source"),"\nanalog that copies files out of the image via ",Object(i.b)("inlineCode",{parentName:"li"},"find_built_subvol"),".")),Object(i.b)("h2",{id:"rules-of-imagegenrule_layer-usage"},"Rules of ",Object(i.b)("inlineCode",{parentName:"h2"},"image.genrule_layer")," usage:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Always get a code / design review from an ",Object(i.b)("inlineCode",{parentName:"li"},"antlir")," maintainer."),Object(i.b)("li",{parentName:"ul"},"Do not use in ",Object(i.b)("inlineCode",{parentName:"li"},"TARGETS")," / ",Object(i.b)("inlineCode",{parentName:"li"},"BUCK")," files directly.  Instead, define a\n",Object(i.b)("inlineCode",{parentName:"li"},".bzl")," macro named ",Object(i.b)("inlineCode",{parentName:"li"},"image_<intended_action>_layer"),"."),Object(i.b)("li",{parentName:"ul"},"If the macro is truly general-purpose, please put it in\n",Object(i.b)("inlineCode",{parentName:"li"},"antlir/bzl/genrule/<intended_action>"),"."),Object(i.b)("li",{parentName:"ul"},"Do not change any core ",Object(i.b)("inlineCode",{parentName:"li"},"antlir")," code when adding a genrule layer.  If\nyour genrule layer requires changes outside of ",Object(i.b)("inlineCode",{parentName:"li"},"antlir/bzl/genrule"),",\ndiscuss them with ",Object(i.b)("inlineCode",{parentName:"li"},"antlir")," maintainers first."),Object(i.b)("li",{parentName:"ul"},"Tests are mandatory, see ",Object(i.b)("inlineCode",{parentName:"li"},"antlir/bzl/genrule/rpmbuild")," for a good\nexample."),Object(i.b)("li",{parentName:"ul"},"Keep your macro deterministic.  The Buck linters and runtime try to\ncatch the very shallow issues, but here are some other things to think\nabout:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Review our ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"contributing/coding-conventions/bzl-and-targets"}),Object(i.b)("inlineCode",{parentName:"a"},".bzl")," coding\nconventions"),"."),Object(i.b)("li",{parentName:"ul"},"Avoid reading clocks or timestamps from the filesystem, or local\nuser / group IDs, or other things that can be different between your\ndev host, and another host.")))),Object(i.b)("h2",{id:"deliberate-limitations-of-the-imagegenrule_layer-implementation"},"Deliberate limitations of the ",Object(i.b)("inlineCode",{parentName:"h2"},"image.genrule_layer")," implementation"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},'No network access. Network builds are a gateway to non-deterministic hell.\nIf you\'re sure your use-case is "safe", talk to ',Object(i.b)("inlineCode",{parentName:"p"},"antlir")," maintainers\nfor how to implement it correctly (repo-committed checksums, etc).")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"We will not add ",Object(i.b)("inlineCode",{parentName:"p"},"--bindmount-{ro,rw}")," to the container invocation.\nNormal ",Object(i.b)("inlineCode",{parentName:"p"},"image.layer_mount"),"s in the parent will, of course, work as\nintended, but these are not meant to let you bind-mount arbitrary host\npaths, and so ought not to lead to non-determinism. As in the example\nabove, ",Object(i.b)("inlineCode",{parentName:"p"},"image.install")," is another good way to get data into your image."),Object(i.b)("p",{parentName:"li"},"Details on the rationale: The only paths that are safe to bind-mount\ninto a container are ",Object(i.b)("inlineCode",{parentName:"p"},"buck-out")," build artifacts. Previously mentioned\n",Object(i.b)("inlineCode",{parentName:"p"},"image.{install,layer_mount}")," should adequately address this. Doing\nruntime mounts would be less deterministic because:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"the tree being bind-mounted will have nondeterministic ",Object(i.b)("inlineCode",{parentName:"li"},"stat")," metadata."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"nspawn")," bind-mounts leave behind in the image an implicitly created\nset of dirs and files for the mountpoint, and the ",Object(i.b)("inlineCode",{parentName:"li"},"stat")," metadata\nfor these won't be deterministic either.")))),Object(i.b)("h2",{id:"ok-i-will-be-very-careful--where-are-the-api-docs"},"Ok, I will be very careful ","\u2014"," where are the API docs?"),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"api/image#genrule_layer"}),"regular API docs")," describe the function arguments."))}c.isMDXComponent=!0}}]);