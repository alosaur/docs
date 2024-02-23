"use strict";(self.webpackChunkalosaur_docs=self.webpackChunkalosaur_docs||[]).push([[123],{3905:function(e,r,n){n.d(r,{Zo:function(){return u},kt:function(){return d}});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),l=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},u=function(e){var r=l(e.components);return t.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return n?t.createElement(f,c(c({ref:r},u),{},{components:n})):t.createElement(f,c({ref:r},u))}));function d(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4263:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var t=n(7462),o=n(3366),a=(n(7294),n(3905)),c=["components"],i={sidebar_position:5},s="Microservice",l={unversionedId:"techniques/Microservice",id:"techniques/Microservice",isDocsHomePage:!1,title:"Microservice",description:"\u041c\u0438\u043a\u0440\u043e\u0441\u0435\u0440\u0432\u0438\u0441\u044b \u0432 Alosaur \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u044b \u043a\u0430\u043a \u0441\u0435\u0440\u0432\u0435\u0440 \u043d\u043e \u0434\u043b\u044f \u0441\u0432\u044f\u0437\u0438 \u043c\u0435\u0436\u0434\u0443 \u043a\u043b\u0438\u0435\u043d\u0442\u0430\u043c\u0438 \u0432 \u043e\u0442\u043b\u0438\u0447\u0438\u0438 \u043e\u0442 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0433\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442 \u0434\u0440\u0443\u0433\u043e\u0439 \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442, \u043d\u0435 HTTP.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/techniques/Microservice.md",sourceDirName:"techniques",slug:"/techniques/Microservice",permalink:"/ru/docs/techniques/Microservice",editUrl:"https://github.com/alosaur/alosaur.github.io/edit/main/docs/techniques/Microservice.md",version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"CORS",permalink:"/ru/docs/techniques/CORS"},next:{title:"Database",permalink:"/ru/docs/techniques/Database"}},u=[{value:"Server",id:"server",children:[]},{value:"Controller actions",id:"controller-actions",children:[]},{value:"Client",id:"client",children:[]}],p={toc:u};function m(e){var r=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"microservice"},"Microservice"),(0,a.kt)("p",null,"\u041c\u0438\u043a\u0440\u043e\u0441\u0435\u0440\u0432\u0438\u0441\u044b \u0432 Alosaur \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u044b \u043a\u0430\u043a \u0441\u0435\u0440\u0432\u0435\u0440 \u043d\u043e \u0434\u043b\u044f \u0441\u0432\u044f\u0437\u0438 \u043c\u0435\u0436\u0434\u0443 \u043a\u043b\u0438\u0435\u043d\u0442\u0430\u043c\u0438 \u0432 \u043e\u0442\u043b\u0438\u0447\u0438\u0438 \u043e\u0442 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0433\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442 \u0434\u0440\u0443\u0433\u043e\u0439 \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442, \u043d\u0435 HTTP. "),(0,a.kt)("p",null,"\u041c\u0438\u043a\u0440\u043e\u0441\u0435\u0440\u0432\u0438\u0441\u044b \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442 \u0442\u0430\u043a\u0443\u044e \u0436\u0435 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0443 \u043a\u0430\u043a \u0438 \u043e\u0431\u044b\u0447\u044b\u0439 http \u0441\u0435\u0440\u0432\u0435\u0440, \u0437\u0430 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435\u043c \u043c\u0435\u0442\u043e\u0434\u043e\u0432 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u043b\u0435\u0440\u0430."),(0,a.kt)("h3",{id:"server"},"Server"),(0,a.kt)("p",null,"\u0414\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043e\u0431\u044b\u0447\u043d\u043e\u0433\u043e \u043c\u0438\u043a\u0440\u043e\u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u044d\u0442\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0438 \u043f\u0440\u0438\u0441\u0442\u0443\u043f\u0438\u0442\u044c \u043a \u043f\u0440\u043e\u0441\u043b\u0443\u0448\u043a\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u0439."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Microservice, MicroserviceType } from "alosaur/microservice/mod.ts";\nimport { HomeArea } from "./home.area.ts";\n\nconst server = new Microservice({\n  areas: [HomeArea],\n  type: MicroserviceType.TCP,\n  config: {\n    hostname: "localhost",\n    port: 4500,\n  },\n});\n\nawait server.listen();\n')),(0,a.kt)("h3",{id:"controller-actions"},"Controller actions"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"@MPattern -")," \u044d\u0442\u043e \u0434\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440 \u043c\u0435\u0442\u043e\u0434\u0430 \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0442\u044c Object"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"@MEvent -")," \u044d\u0442\u043e \u0434\u0435\u043a\u043e\u0440\u0430\u0442\u043e\u0440 \u043c\u0435\u0442\u043e\u0434\u0430 \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0442\u044c string"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Area, Body, Controller } from "alosaur/mod.ts";\nimport { MEvent, MPattern } from "alosaur/microservice/mod.ts";\n\n@Controller()\nexport class HomeController {\n  @MPattern({ cmd: "sum" })\n  @ActionParam(0, Body())\n  async sum(body: number[]) {\n    return Array.isArray(body) ? body.reduce((acc, cur) => acc + cur, 0) : 0;\n  }\n\n  @MEvent("calculated")\n  @ActionParam(0, Body())\n  async event(body: string) {\n    return body;\n  }\n}\n\n@Area({\n  controllers: [HomeController],\n})\nexport class HomeArea {}\n')),(0,a.kt)("h3",{id:"client"},"Client"),(0,a.kt)("p",null,"\u0414\u043b\u044f \u043f\u0440\u0438\u043c\u0435\u0440\u0430 \u043c\u044b \u0431\u0443\u0434\u0435\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043e\u0431\u044b\u0447\u043d\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 Alosaur, \u0438 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043f\u0440\u0438\u043c\u0435\u0440\u0430 \u0441\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u043a\u043b\u0438\u0435\u043d\u0442 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import { App } from "alosaur/mod.ts";\nimport { CoreArea } from "./areas/core.area.ts";\nimport { MsTcpClient } from "alosaur/microservice/mod.ts";\n\nconst app = new App({\n  areas: [CoreArea],\n  providers: [\n    {\n      token: "TCP_CLIENT",\n      useFactory: () => new MsTcpClient({ hostname: "localhost", port: 4500 }),\n    },\n  ],\n  logging: false,\n});\n\napp.listen();\n')),(0,a.kt)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u0432\u043d\u0443\u0442\u0440\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Area, Controller, Get, Inject } from "alosaur/mod.ts";\nimport { MsTcpClient } from "alosaur/microservice/mod.ts";\n\n@Controller()\nexport class CoreController {\n  constructor(@Inject("TCP_CLIENT") private client: MsTcpClient) {\n  }\n\n  @Get()\n  async text() {\n    const answer = await this.client.send({ cmd: "sum" }, [1, 2, 3, 4]);\n    return "Hello world, " + answer;\n  }\n}\n\n@Area({\n  controllers: [CoreController],\n})\nexport class CoreArea {}\n')),(0,a.kt)("p",null,"\u041f\u043e\u043b\u043d\u044b\u0439 \u043f\u0440\u0438\u043c\u0435\u0440 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/alosaur/alosaur/tree/master/examples/microservice"},"https://github.com/alosaur/alosaur/tree/master/examples/microservice")))}m.isMDXComponent=!0}}]);