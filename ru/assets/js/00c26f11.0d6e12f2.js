"use strict";(self.webpackChunkalosaur_docs=self.webpackChunkalosaur_docs||[]).push([[630],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),i=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=i(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=i(t),d=a,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return t?r.createElement(f,l(l({ref:n},u),{},{components:t})):r.createElement(f,l({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var i=2;i<o;i++)l[i]=t[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7753:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return i},toc:function(){return u},default:function(){return m}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),l=["components"],s={sidebar_position:3},p="Controllers",i={unversionedId:"basics/Controllers",id:"basics/Controllers",isDocsHomePage:!1,title:"Controllers",description:"\u041a\u043e\u043d\u0442\u0440\u043e\u043b\u043b\u0435\u0440\u044b \u043e\u0442\u0432\u0435\u0447\u0430\u044e\u0442 \u0437\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u0432\u0445\u043e\u0434\u044f\u0449\u0438\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0442 \u043e\u0442\u0432\u0435\u0442\u043e\u0432 \u043a\u043b\u0438\u0435\u043d\u0442\u0443.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/basics/Controllers.md",sourceDirName:"basics",slug:"/basics/Controllers",permalink:"/ru/docs/basics/Controllers",editUrl:"https://github.com/alosaur/alosaur.github.io/edit/main/docs/basics/Controllers.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Area",permalink:"/ru/docs/basics/Area"},next:{title:"Context, Request, Response",permalink:"/ru/docs/basics/Context"}},u=[{value:"\u041c\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0446\u0438\u044f",id:"\u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0446\u0438\u044f",children:[]},{value:"<strong>Controller Actions</strong>",id:"controller-actions",children:[{value:"Action Parameters",id:"action-parameters",children:[]},{value:"Multipart form-data, upload files",id:"multipart-form-data-upload-files",children:[]}]},{value:"Action outputs: Content, View, Redirect",id:"action-outputs-content-view-redirect",children:[]}],c={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"controllers"},"Controllers"),(0,o.kt)("p",null,"\u041a\u043e\u043d\u0442\u0440\u043e\u043b\u043b\u0435\u0440\u044b \u043e\u0442\u0432\u0435\u0447\u0430\u044e\u0442 \u0437\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u0432\u0445\u043e\u0434\u044f\u0449\u0438\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0442 \u043e\u0442\u0432\u0435\u0442\u043e\u0432 \u043a\u043b\u0438\u0435\u043d\u0442\u0443."),(0,o.kt)("p",null,"\u0426\u0435\u043b\u044c \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u043b\u0435\u0440\u0430 - \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u044b\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u0434\u043b\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f. \u041c\u0435\u0445\u0430\u043d\u0438\u0437\u043c \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0446\u0438\u0438 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0443\u0435\u0442, \u043a\u0430\u043a\u043e\u0439 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u043b\u0435\u0440 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u043a\u0430\u043a\u0438\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u044b. \u0427\u0430\u0441\u0442\u043e \u0443 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u043b\u0435\u0440\u0430 \u0435\u0441\u0442\u044c \u0431\u043e\u043b\u0435\u0435 \u043e\u0434\u043d\u043e\u0433\u043e \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0430, \u0438 \u0440\u0430\u0437\u043d\u044b\u0435 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u044b \u043c\u043e\u0433\u0443\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u0440\u0430\u0437\u043d\u044b\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f. \u0414\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0431\u0430\u0437\u043e\u0432\u043e\u0433\u043e \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u043b\u0435\u0440\u0430 \u043c\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c \u043a\u043b\u0430\u0441\u0441\u044b \u0438 \u0434\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440\u044b."),(0,o.kt)("p",null,"\u0414\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u043b\u0435\u0440\u0430 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f CLI:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"deno run --allow-read --allow-write --allow-net https://deno.land/x/alosaur/cli.ts g controller \nMyController \n")),(0,o.kt)("h3",{id:"\u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0446\u0438\u044f"},"\u041c\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0446\u0438\u044f"),(0,o.kt)("p",null,"\u041c\u0430\u0440\u0448\u0443\u0442\u0438\u0437\u0430\u0446\u0438\u044f \u0432 Alosaur \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u043d\u0430 \u043c\u043e\u043c\u0435\u043d\u0442\u0435 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f. \u0414\u043b\u044f \u0442\u043e\u0433\u043e \u0447\u0442\u043e\u0431\u044b \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u044b \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438 \u043e\u0431\u044b\u0447\u043d\u043e \u0437\u0430\u043a\u043b\u0430\u0434\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u0432\u043d\u0443\u0442\u0440\u044c \u0434\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440\u043e\u0432 Controller, Get \u0438 \u0434\u0440\u0443\u0433\u0438\u0445:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { App, Area, Controller, Get } from "https://deno.land/x/alosaur/mod.ts";\n\n@Controller() // or specific path @Controller("/home")\nexport class HomeController {\n  @Get() // or specific path @Get("/hello")\n  text() {\n    return "Hello world";\n  }\n}\n\n// Declare module\n@Area({\n  controllers: [HomeController],\n})\nexport class HomeArea {}\n\n// Create alosaur application\nconst app = new App({\n  areas: [HomeArea],\n});\n\napp.listen();\n')),(0,o.kt)("p",null,"\u0412 \u0434\u0430\u043d\u043d\u043e\u043c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438 \u0432\u044b\u0437\u043e\u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 GET ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3000/"},"localhost:8000")," (8000 - \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0439 \u043f\u043e\u0440\u0442 Alosaur)"),(0,o.kt)("h2",{id:"controller-actions"},(0,o.kt)("strong",{parentName:"h2"},"Controller Actions")),(0,o.kt)("p",null,"\u041c\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0446\u0438\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0441\u0442\u0440\u043e\u0438\u0442\u0441\u044f \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u044d\u0442\u0438\u0445 \u043c\u0435\u0442\u043e\u0434\u043e\u0432 \u043f\u043e\u043c\u0435\u0447\u0435\u043d\u043d\u044b\u043c\u0438 \u0434\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440\u0430\u043c\u0438 \u043c\u0430\u0440\u0448\u0440\u0443\u0442\u0430:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Get")," "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Post")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Put")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Patch")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Delete")),(0,o.kt)("p",null,"\u041c\u0430\u0440\u0448\u0440\u0443\u0442 \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0442\u044c \u043d\u0430 \u0432\u0445\u043e\u0434 string \u043b\u0438\u0431\u043e \u043e\u0441\u0442\u0430\u0432\u0430\u0442\u044c\u0441\u044f \u043f\u0443\u0441\u0442\u044b\u043c, \u0442\u043e\u0433\u0434\u0430 \u044d\u0442\u043e\u0442 \u043c\u0435\u0442\u043e\u0434 \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u0434\u0430\u0432\u0430\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0443 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u043b\u0435\u0440\u0430. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'@Get()\ndefaultReturnTextAction() {\n        return "Hello world!";\n}\n\n@Get("/hi")\nsayHiTextAction() {\n        return "Hi!";\n}\n')),(0,o.kt)("h3",{id:"action-parameters"},"Action Parameters"),(0,o.kt)("p",null,"\u041a\u0430\u0436\u0434\u044b\u0439 \u043c\u0430\u0440\u0448\u0440\u0443\u0442 \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0442\u044c \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0438 \u0438\u0445 \u0442\u0430\u043a \u0436\u0435 \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u043c\u0435\u0442\u0438\u0442\u044c \u0434\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440\u0430\u043c\u0438."),(0,o.kt)("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'@Post("/")\n@ActionParam(0, Body())\nCreate(product: Product) {\n  // @Body - action parameter \n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"@Cookie")),(0,o.kt)("p",null,"\u0412\u043d\u0435\u0434\u0440\u044f\u0435\u0442 Cookie \u0432 \u0437\u0430\u043f\u0440\u043e\u0441 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430, \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0439 \u0438\u0437 getCookies ",(0,o.kt)("a",{parentName:"p",href:"https://deno.land/std@0.103.0/http"},"https://deno.land/std@0.103.0/http")," "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"@Ctx")),(0,o.kt)("p",null,"\u0412\u043d\u0435\u0434\u0440\u044f\u0435\u0442 \u0432 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430 (HttpContext, AuthContext)"),(0,o.kt)("p",null,"\u041c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0432 \u0441\u0435\u0431\u0435 request, response, state \u0438 \u043c\u043d\u043e\u0433\u043e\u0435 \u0434\u0440\u0443\u0433\u043e\u0435 \u0447\u0442\u043e \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0441\u044f \u043d\u0435\u043f\u043e\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u043a \u0442\u0435\u043a\u0443\u0449\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u043f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043f\u0440\u043e \u043d\u0435\u0433\u043e \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u0442\u044c \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 Context")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"@Req")),(0,o.kt)("p",null,"\u0412\u043d\u0435\u0434\u0440\u044f\u0435\u0442 \u0432 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 \u043e\u0431\u044a\u0435\u043a\u0442 Request"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"@Res")),(0,o.kt)("p",null,"\u0412\u043d\u0435\u0434\u0440\u044f\u0435\u0442 \u0432 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 \u043e\u0431\u044a\u0435\u043a\u0442 Response"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"@Param")),(0,o.kt)("p",null,"\u0412\u044b\u0442\u0430\u0441\u043a\u0438\u0432\u0430\u0435\u0442 \u0438\u0437 url \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 \u043f\u043e \u043a\u043b\u044e\u0447\u0443 \u0438 \u0432\u043d\u0435\u0434\u0440\u044f\u0435\u0442 \u0435\u0433\u043e \u0432 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 \u043c\u0435\u0442\u043e\u0434\u0430 "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'// Example request\n// /controller/123\n\n@Get("/:id")\nGetById(@Param("id") id: number) {\n   // id = 123\n}\n\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"@QueryParam")),(0,o.kt)("p",null,"\u0412\u044b\u0442\u0430\u0441\u043a\u0438\u0432\u0430\u0435\u0442 \u0438\u0437 url query \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 \u043f\u043e \u043a\u043b\u044e\u0447\u0443 \u0438 \u0432\u043d\u0435\u0434\u0440\u044f\u0435\u0442 \u0435\u0433\u043e \u0432 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 \u043c\u0435\u0442\u043e\u0434\u0430 "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'Request to "/test?name=john&city=London"\n\n@Get("/test")\n  query(\n    @QueryParam("name") name: string,\n    @QueryParam("city") city: string) {\n  // name = john \n  // city = London\n\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"@QueryParams")),(0,o.kt)("p",null,"\u0412\u044b\u0442\u0430\u0441\u043a\u0438\u0432\u0430\u0435\u0442 \u0438\u0437 url query \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 \u0438 \u0432\u043d\u0435\u0434\u0440\u044f\u0435\u0442 \u0435\u0433\u043e \u0432 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 \u043c\u0435\u0442\u043e\u0434\u0430 "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'Request to "/test?name=john&city=London"\n\n@Get("/test")\n  query(@QueryParams() query: any) {\n  // query.name = john \n  // query.city = London\n\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"@Body")),(0,o.kt)("p",null,"\u0412\u044b\u0442\u0430\u0441\u043a\u0438\u0432\u0430\u0435\u0442 \u0438\u0437 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0435\u0433\u043e \u0442\u0435\u043b\u043e \u0438 \u0432\u043d\u0435\u0434\u0440\u044f\u0435\u0442 \u0432 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 \u043c\u0435\u0442\u043e\u0434\u0430"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'curl --header "Content-Type: application/json" \\\n  --request POST \\\n  --data \'{"type":"tea","name":"Ceilon"}\' \\\n  http://localhost:8000/api/product\n\ninterface Product {\n    type: string;\n  name: string;\n}\n\n@Post("/")\n@ActionParam(0, Body())\nCreate(product: Product) {\n  \n}\n')),(0,o.kt)("p",null,"Body \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0442\u044c \u0432 \u0441\u0435\u0431\u044f \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u0442\u0440\u0430\u043d\u0441\u0444\u043e\u0440\u043c\u0435\u0440\u044b, \u0434\u043b\u044f \u0442\u043e\u0433\u043e \u0447\u0442\u043e\u0431\u044b \u044d\u0442\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u043c\u043e\u0436\u043d\u043e \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0434\u0435\u0444\u043e\u043b\u0442\u043d\u044b\u0439 \u0441\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u0430\u0442\u043e\u0440."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'const { plainToClass } = "[https://jspm.dev/class-transformer@0.2.3](https://jspm.dev/class-transformer@0.2.3)";\n\n// add transform function\napp.useTransform({\n  type: "body", // parse body params\n  getTransform: (transform: any, body: any) => {\n    return plainToClass(transform, body);\n  },\n});\n')),(0,o.kt)("p",null,"\u042d\u0442\u043e \u0445\u043e\u0440\u043e\u0448\u043e \u043c\u043e\u0436\u043d\u043e \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u0441 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u043c\u0438 \u0432\u0430\u043b\u0438\u0434\u0430\u0442\u043e\u0440\u0430\u043c\u0438, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u0442\u0430\u043a\u0438\u043c\u0438 \u043a\u0430\u043a class-validator:"),(0,o.kt)("p",null,"post.model.ts"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import validator from "https://jspm.dev/class-validator@0.8.5";\n\nconst { Length, Contains, IsInt, Min, Max, IsEmail, IsFQDN, IsDate } =\n  validator;\n\nexport class PostModel {\n  @Length(10, 20)\n  title?: string;\n\n  @Contains("hello")\n  text?: string;\n\n  @IsInt()\n  @Min(0)\n  @Max(10)\n  rating?: number;\n\n  @IsEmail()\n  email?: string;\n}\n')),(0,o.kt)("p",null,"app.ts"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import validator from "https://jspm.dev/class-validator@0.8.5";\nimport transformer from "https://jspm.dev/class-transformer@0.2.3";\nimport {\n  App,\n  Area,\n  Body,\n  Controller,\n  Post,\n} from "https://deno.land/x/alosaur/mod.ts";\nimport { PostModel } from "./post.model.ts";\n\nconst { validate } = validator;\nconst { plainToClass } = transformer;\n\n// Create controller\n@Controller()\nexport class HomeController {\n  @Post("/")\n  @ActionParam(0, Body(PostModel))\n  async post(data: PostModel) {\n    return {\n      data,\n      errors: await validate(data),\n    };\n  }\n}\n\n// Declare controller in area\n@Area({\n  controllers: [HomeController],\n})\nexport class HomeArea {}\n\n// Create app\nconst app = new App({\n  areas: [HomeArea],\n});\n\n// add transform function\napp.useTransform({\n  type: "body", // parse body params\n  getTransform: (transform: any, body: any) => {\n    return plainToClass(transform, body);\n  },\n});\n\n// serve application\napp.listen();\n')),(0,o.kt)("p",null,"\u0412\u044b \u0442\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0439 \u043f\u0430\u0440\u0441\u0435\u0440 \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e \u0432 Body:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"function parser(body): ParsedObject {\n    // your code\n    return body;\n}\n\n...\n@Post('/')\n@ActionParam(0, Body(parser))\npost(data: ParsedObject) {\n\n}\n")),(0,o.kt)("h3",{id:"multipart-form-data-upload-files"},"Multipart form-data, upload files"),(0,o.kt)("p",null,"\u0414\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440 Body \u0442\u0430\u043a \u0436\u0435 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0438\u0437\u0432\u043b\u0435\u043a\u0430\u0442\u044c \u0438\u0437 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0444\u0430\u0439\u043b\u044b."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { FormFile } from "https://deno.land/std@0.102.0/mime/multipart.ts";\nimport { move } from "https://deno.land/std@0.102.0/fs/move.ts";\n\n...\n\n@Post()\n@ActionParam(0, Body())\nasync formData(body: { [key: string]: FormFile | string }) {\n  const file: FormFile = body.file as FormFile;\n\n  if (file) {\n    const fileDest = "./examples/form-data/files/" + file.filename;\n\n    // write file if file has content in memory\n    if (file.content) {\n      await Deno.writeFile(fileDest, file.content!, { append: true });\n    } else if (file.tempfile) {\n      // move file if file has tempfile\n      move(file.tempfile, fileDest);\n    }\n\n    return "Uploaded";\n  }\n\n  return "File not exist";\n}\n')),(0,o.kt)("p",null,"\u0422\u0430\u043a \u0436\u0435 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043e\u043f\u0446\u0438\u0438 \u0434\u043b\u044f \u043f\u0430\u0440\u0441\u0438\u043d\u0433\u0430 \u0444\u0430\u0439\u043b\u043e\u0432"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Body(NoopTransform, CustomBodyParser)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const CustomBodyParser: RequestBodyParseOptions = {\n  formData: {\n    maxMemory: 100, // in mb by default 10mb for default parser\n    parser: func, // function of custom parser; (request: ServerRequest, contentType: string) => Promise<any>;\n  },\n};\n")),(0,o.kt)("h2",{id:"action-outputs-content-view-redirect"},"Action outputs: Content, View, Redirect"),(0,o.kt)("p",null,"\u0415\u0441\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u043e\u0432 \u0434\u043b\u044f \u0442\u043e\u0433\u043e \u0447\u0442\u043e\u0431\u044b \u0432\u0435\u0440\u043d\u0443\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0437\u0430\u043f\u0440\u043e\u0441\u0430:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Content -")," \u043f\u043e\u0445\u043e\u0436 \u043d\u0430 ",(0,o.kt)("inlineCode",{parentName:"li"},"return {};")," \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0432\u0435\u0440\u043d\u0435\u0442 Status 200 OK"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"View")," - \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u043d\u043e \u0441 Template Engine \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u043c \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043f\u0440\u043e template \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u0442\u044c \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 Render pages."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Redirect")," \u0438 ",(0,o.kt)("strong",{parentName:"li"},"RedirectPermanent")," \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442  status ",(0,o.kt)("inlineCode",{parentName:"li"},"301"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"302")," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f return ",(0,o.kt)("inlineCode",{parentName:"li"},"Redirect('/to/page')")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Response")," - \u041e\u0431\u044a\u043a\u0435\u0442 \u0442\u0438\u043f\u0430 ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Response"},"Response"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'return {}; // return 200 status\n\n// return 404 status\nreturn Content("Text", 404);\n\n// return 404 status\nreturn Content({ "Object": true }, 404); \n\n// return 404 status\nreturn View("page", 404);\n\n// return 404 status with headers\nreturn new Response("not found", {\n  status: 404,\n  headers: new Headers([["x-alosaur-header","not found"]]);\n})\n')))}m.isMDXComponent=!0}}]);