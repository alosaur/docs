"use strict";(self.webpackChunkalosaur_docs=self.webpackChunkalosaur_docs||[]).push([[953],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9121:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),s=["components"],i={sidebar_position:4},l="Context, Request, Response",c={unversionedId:"basics/Context",id:"basics/Context",isDocsHomePage:!1,title:"Context, Request, Response",description:"Some of the data used in an application can be attributed to its state. This can be either some global data or data that is directly related to the request and the user. And depending on the type of data, there are different ways to store it.",source:"@site/docs/basics/Context.md",sourceDirName:"basics",slug:"/basics/Context",permalink:"/docs/basics/Context",editUrl:"https://github.com/alosaur/alosaur.github.io/edit/main/docs/basics/Context.md",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Controllers",permalink:"/docs/basics/Controllers"},next:{title:"Middleware",permalink:"/docs/basics/Middleware"}},u=[{value:"HttpContext",id:"httpcontext",children:[]},{value:"Request",id:"request",children:[]},{value:"Response",id:"response",children:[]},{value:"Extends HttpContext, custom Context",id:"extends-httpcontext-custom-context",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"context-request-response"},"Context, Request, Response"),(0,a.kt)("p",null,"Some of the data used in an application can be attributed to its state. This can be either some global data or data that is directly related to the request and the user. And depending on the type of data, there are different ways to store it."),(0,a.kt)("p",null,"In the Context object, a state is defined for such data that is directly related to the current request. When the request is complete, all data from the state is removed. The state can be typed as desired and have one type for the entire application through ",(0,a.kt)("inlineCode",{parentName:"p"},"App<TState>"),"."),(0,a.kt)("h2",{id:"httpcontext"},"HttpContext"),(0,a.kt)("p",null,"In a basic application you can work with HttpContext object, which contains request, response, state"),(0,a.kt)("p",null,"HttpContext can be available in different places of your application, e.g:"),(0,a.kt)("p",null,"Controller:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"@Controller()\nclass HomeController {\n  @Get()\n  @ActionParam(0, Ctx())\n  getText(context: HttpContext) {\n       // something\n  }\n}\n")),(0,a.kt)("p",null,"Middleware by default:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export interface MiddlewareTarget<TState = unknown> {\n  onPreRequest(context: HttpContext<TState>): void;\n  onPostRequest(context: HttpContext<TState>): void;\n}\n")),(0,a.kt)("p",null," Hooks by default:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export interface HookTarget<TState, TPayload> {\n  onPreAction?(context: HttpContext<TState>, payload: TPayload): void;\n  onPostAction?(context: HttpContext<TState>, payload: TPayload): void;\n  onCatchAction?(context: HttpContext<TState>, payload: TPayload): void;\n}\n")),(0,a.kt)("h2",{id:"request"},"Request"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"AlosaurRequest")),(0,a.kt)("p",null,"This object includes request parameters:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"public readonly url: string;\npublic readonly headers: Headers;\npublic readonly method: string;\npublic readonly serverRequest: ServerRequest // Request object from Deno serve\npublic async body(): unknown // Parse body with RequestBodyParseOptions\n")),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"AlosaurResponse")),(0,a.kt)("p",null,"This object includes server response parameters and is created at the moment of the request and can form different states in itself."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type ResponseBody = Uint8Array | Deno.Reader | string | any;\n\nclass AlosaurResponse {\n    public status?: number;\n    public body?: ResponseBody;\n    public result?: ActionResult | any;\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"context.response.setImmediately();")),(0,a.kt)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0442\u043e\u0433\u043e \u0447\u0442\u043e\u0431\u044b \u043e\u0442\u0432\u0435\u0442 \u0431\u044b\u043b \u043d\u0435\u043c\u0435\u0434\u043b\u0435\u043d\u043d\u044b\u043c \u043f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u043a\u043e\u0434\u0430, \u0431\u0435\u0437 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0434\u0440\u0443\u0433\u0438\u0445 Hook, Middleware. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"context.response.setNotRespond();")),(0,a.kt)("p",null,"Used to ensure that the response is immediate after the execution of the current code, without executing other Hook, Middleware."),(0,a.kt)("h2",{id:"extends-httpcontext-custom-context"},"Extends HttpContext, custom Context"),(0,a.kt)("p",null,"If you want to extend the use of global context, you can use this technique:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"@Injectable()\nexport class MySecurityContext<T = any> extends HttpContext<T> {\n  constructor(@Inject(SERVER_REQUEST) serverRequest: ServerRequest) {\n    super(serverRequest);\n  }\n\n  //... your code here\n}\n")),(0,a.kt)("p",null,"You can then use the DI technique to override the creation of the HttpContext:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const app = new App({\n  // ...\n\n  providers: [{\n    token: HttpContext,\n    useClass: MySecurityContext,\n  }],\n});\n")))}d.isMDXComponent=!0}}]);