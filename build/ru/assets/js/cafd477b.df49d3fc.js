"use strict";(self.webpackChunkalosaur_docs=self.webpackChunkalosaur_docs||[]).push([[277],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,s(s({ref:t},l),{},{components:n})):r.createElement(m,s({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2226:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),s=["components"],i={sidebar_position:10},c="Standard Hooks",u={unversionedId:"basics/Standard Hooks",id:"basics/Standard Hooks",isDocsHomePage:!1,title:"Standard Hooks",description:"Alosaur supports several standard hooks, some of which are shown below:",source:"@site/docs/basics/Standard Hooks.md",sourceDirName:"basics",slug:"/basics/Standard Hooks",permalink:"/ru/docs/basics/Standard Hooks",editUrl:"https://github.com/alosaur/alosaur.github.io/edit/main/docs/basics/Standard Hooks.md",version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Security",permalink:"/ru/docs/basics/Security"},next:{title:"WebSocket",permalink:"/ru/docs/techniques/WebSocket"}},l=[{value:"Response cache Hook",id:"response-cache-hook",children:[]}],p={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"standard-hooks"},"Standard Hooks"),(0,a.kt)("p",null,"Alosaur supports several standard hooks, some of which are shown below:"),(0,a.kt)("h2",{id:"response-cache-hook"},"Response cache Hook"),(0,a.kt)("p",null,"This hook is used to save the response for the first time and give it away immediately in subsequent requests."),(0,a.kt)("p",null,"In order to use this hook it is necessary to request CasheStore:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const app = new App({\n  areas: [CoreArea],\n  providers: [{\n    token: ResponseCacheStoreToken,\n    useClass: MemoryResponseCacheStore, // by default implemented in Alosaur\n  }],\n});\n")),(0,a.kt)("p",null,"And then use the ",(0,a.kt)("inlineCode",{parentName:"p"},"@ResponseCache")," decorator on the controller action:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'@Get()\n  @ResponseCache({ duration: 2000 })\n  async text() {\n    // long task\n    await delay(200);\n    return "Hello world";\n  }\n')),(0,a.kt)("p",null,"@ResponseCache takes ResponseCachePayload interface which includes parameters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"duration: number; - The time to save the query result in ms."),(0,a.kt)("li",{parentName:"ul"},"getHash?: (context: Context) => string; - Function to get request hash from context, by default it is serverRequest.url")))}d.isMDXComponent=!0}}]);