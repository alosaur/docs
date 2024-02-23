"use strict";(self.webpackChunkalosaur_docs=self.webpackChunkalosaur_docs||[]).push([[367],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},198:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:4},s="Alosaur Lite",c={unversionedId:"alosaur-lite",id:"alosaur-lite",isDocsHomePage:!1,title:"Alosaur Lite",description:"Intro",source:"@site/docs/alosaur-lite.md",sourceDirName:".",slug:"/alosaur-lite",permalink:"/docs/alosaur-lite",editUrl:"https://github.com/alosaur/alosaur.github.io/edit/main/docs/alosaur-lite.md",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"OpenAPI",permalink:"/docs/techniques/OpenAPI"},next:{title:"Sponsors \u2764\ufe0f",permalink:"/docs/sponsors"}},p=[{value:"Intro",id:"intro",children:[]},{value:"Features",id:"features",children:[]},{value:"Example",id:"example",children:[{value:"Basic",id:"basic",children:[]},{value:"Serve static files",id:"serve-static-files",children:[]},{value:"Render pages",id:"render-pages",children:[]},{value:"Render markdown files",id:"render-markdown-files",children:[]}]}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"alosaur-lite"},"Alosaur Lite"),(0,i.kt)("h2",{id:"intro"},"Intro"),(0,i.kt)("p",null,"Lightweight version of Alosaur (2.4kb, gzip, one file) without dependencies. Specially designed to work with deno deploy."),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," "," Controllers"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," "," Actions methods (GET, POST, etc)"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," "," Serve static files"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," "," Render pages (React jsx, markdown files)")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("h3",{id:"basic"},"Basic"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import {App, Content, Controller, Get, Param, QueryParam} from "https://deno.land/x/alosaur_lite/dist/mod.js";\n\n@Controller()\nexport class MainController {\n  @Get()\n  indexPage() {\n    return "index page";\n  }\n\n  @Get("/home")\n  homePage() {\n    return "home page";\n  }\n\n  @Get("/json")\n  jsonPage() {\n    return {data: "test"};\n  }\n\n  @Get("/not")\n  notPage() {\n    return Content("Not authorized", 401);\n  }\n\n  @Get("/page/:id")\n  paramPage(@Param("id") id: string, @QueryParam(\'filter\') filter: string) {\n    return `Id: ${id} Filter: ${filter}`;\n  }\n}\n\nconst app = new App({\n  controllers: [MainController],\n});\n\naddEventListener("fetch", (event: FetchEvent) => {\n  event.respondWith(app.handleRequest(event.request));\n});\n')),(0,i.kt)("h3",{id:"serve-static-files"},"Serve static files"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'app.useStatic({\n      root: import.meta.url,\n      index: "index.html",\n      baseRoute: "/www/",\n    } // or undefined for default route /\n);\n')),(0,i.kt)("h3",{id:"render-pages"},"Render pages"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'app.useViewRender({\n  type: "react",\n  basePath: `/views/`,\n  getBody: async (path: string, model: Object, config: any) =>\n      await getPage(path, model),\n});\n')),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"example")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Example with react:  ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/alosaur/alosaur-lite/tree/master/examples/react"},"https://github.com/alosaur/alosaur-lite/tree/master/examples/react")))),(0,i.kt)("h3",{id:"render-markdown-files"},"Render markdown files"),(0,i.kt)("p",null,"Example: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/alosaur/alosaur-lite/tree/master/examples/markdown"},"https://github.com/alosaur/alosaur-lite/tree/master/examples/markdown")),(0,i.kt)("p",null,"Demo: ",(0,i.kt)("a",{parentName:"p",href:"https://alosaur-lite-markdown.deno.dev/"},"https://alosaur-lite-markdown.deno.dev/")))}d.isMDXComponent=!0}}]);