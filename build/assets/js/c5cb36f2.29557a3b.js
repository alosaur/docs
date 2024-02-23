"use strict";(self.webpackChunkalosaur_docs=self.webpackChunkalosaur_docs||[]).push([[885],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,c(c({ref:t},l),{},{components:n})):r.createElement(f,c({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var u=2;u<a;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9508:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),c=["components"],s={sidebar_position:7},i="Custom decorators",u={unversionedId:"techniques/Custom decorators",id:"techniques/Custom decorators",isDocsHomePage:!1,title:"Custom decorators",description:"You can add any decorator and put it in the DI system.",source:"@site/docs/techniques/Custom decorators.md",sourceDirName:"techniques",slug:"/techniques/Custom decorators",permalink:"/docs/techniques/Custom decorators",editUrl:"https://github.com/alosaur/alosaur.github.io/edit/main/docs/techniques/Custom decorators.md",version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Database",permalink:"/docs/techniques/Database"},next:{title:"OpenAPI",permalink:"/docs/techniques/OpenAPI"}},l=[],p={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"custom-decorators"},"Custom decorators"),(0,a.kt)("p",null,"You can add any decorator and put it in the DI system."),(0,a.kt)("p",null,"Example with hooks:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import {\n  BusinessType,\n  container,\n  Content,\n  Context,\n  getMetadataArgsStorage,\n  HookTarget,\n} from "https://deno.land/x/alosaur/mod.ts";\n\ntype AuthorizeRoleType = string | undefined;\n\n/**\n * Authorize decorator with role\n */\nexport function CustomAuthorize(\n    scheme: AuthenticationScheme,\n    payload?: AuthPayload,\n): Function {\n    return function (object: any, context: { kind: "method" | "class"; name: string }) {\n        const controllerId = getOrSetControllerId(context as ClassMethodDecoratorContext);\n\n        // add hook to global metadata\n        getMetadataArgsStorage().hooks.push({\n            type: context.kind === "method" ? BusinessType.Action : BusinessType.Controller,\n            object,\n            target: object.constructor,\n            method: context.name,\n            instance: SLContainer.create(AutorizeHook),\n            payload: { scheme, payload },\n            controllerId,\n        });\n    };\n}\n\nexport class AutorizeHook implements HookTarget<unknown, AuthorizeRoleType> {\n  onPreAction(context: Context<unknown>, role: AuthorizeRoleType) {\n    const queryParams = getQueryParams(context.request.url);\n\n    if (queryParams == undefined || queryParams.get("role") !== role) {\n      context.response.result = Content({ error: { token: false } }, 403);\n      context.response.setImmediately();\n    }\n  }\n}\n')),(0,a.kt)("p",null,"Then you can add wherever you like. For example a controller method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'// ..controller\n\n  // action\n  @CustomAuthorize("admin")\n  @Get("/protected")\n  getAdminPage() {\n    return "Hi! this protected info";\n  }\n')))}d.isMDXComponent=!0}}]);