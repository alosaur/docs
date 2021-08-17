"use strict";(self.webpackChunkalosaur_docs=self.webpackChunkalosaur_docs||[]).push([[147],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8783:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:5},l="Middleware",c={unversionedId:"basics/Middleware",id:"basics/Middleware",isDocsHomePage:!1,title:"Middleware",description:"Middleware is a function that is called before and after controller's action is executed. Note, unlike Hook, Middleware has limited DI support because it is registered at the top level in place of the application itself.",source:"@site/docs/basics/Middleware.md",sourceDirName:"basics",slug:"/basics/Middleware",permalink:"/docs/basics/Middleware",editUrl:"https://github.com/alosaur/alosaur.github.io/edit/master/docs/basics/Middleware.md",version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Context, Request, Response",permalink:"/docs/basics/Context"},next:{title:"Dependency injection",permalink:"/docs/basics/DI"}},d=[],p={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"middleware"},"Middleware"),(0,o.kt)("p",null,"Middleware is a function that is called before and after controller's action is executed. Note, unlike Hook, Middleware has limited DI support because it is registered at the top level in place of the application itself."),(0,o.kt)("p",null,"In Alosaur, Middlware has the following interface:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export type IMiddleware<TState = unknown> =\n  | PreRequestMiddleware<TState>\n  | PostRequestMiddleware<TState>\n  | MiddlewareTarget<TState>;\n\nexport interface PreRequestMiddleware<TState = unknown> {\n  onPreRequest(context: HttpContext<TState>): void;\n}\n\nexport interface PostRequestMiddleware<TState = unknown> {\n  onPreRequest(context: HttpContext<TState>): void;\n}\n\nexport interface MiddlewareTarget<TState = unknown> {\n  onPreRequest(context: HttpContext<TState>): void;\n  onPostRequest(context: HttpContext<TState>): void;\n}\n")),(0,o.kt)("p",null,"In order to register your Middlware you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"@Middleware")," decorator to pass in the Regexp router on which you would like your Middleware to run."),(0,o.kt)("p",null,"An example of a simple Middlware:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'@Middleware(new RegExp("/"))\nexport class Log implements MiddlewareTarget<TState> {\n  date: Date = new Date();\n\n  onPreRequest(context: Context<TState>) {\n    return new Promise<void>((resolve, reject) => {\n      this.date = new Date();\n      resolve();\n    });\n  }\n\n  onPostRequest(context: Context<TState>) {\n    return new Promise<void>((resolve, reject) => {\n      console.log(new Date().getTime() - this.date.getTime());\n      resolve();\n    });\n  }\n}\n')),(0,o.kt)("p",null,"Then you can register it at the AppSettings level or after initialization:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const settings: AppSettings = {\n  areas: [HomeArea, InfoArea],\n  middlewares: [Log], // The order in this array corresponds to the order of the run middleware\n};\n\n// or in app use:\n\nconst app = new App(settings);\napp.use(/\\//, new Log());\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can also check out more advanced Middleware under WebSocket or SSE."))))}u.isMDXComponent=!0}}]);