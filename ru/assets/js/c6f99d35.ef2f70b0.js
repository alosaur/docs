"use strict";(self.webpackChunkalosaur_docs=self.webpackChunkalosaur_docs||[]).push([[248],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(g,s(s({ref:n},l),{},{components:t})):r.createElement(g,s({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9869:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),s=["components"],i={sidebar_position:8},p="OpenAPI",c={unversionedId:"techniques/OpenAPI",id:"techniques/OpenAPI",isDocsHomePage:!1,title:"OpenAPI",description:"OpenAPI is a formalized specification and a complete framework for describing, creating, using, and visualizing REST Web services. The goal is to allow client systems and documentation to synchronize their updates with changes on the server. This is achieved by integrating methods, parameters, models, and other elements through OpenAPI with the server software and keeping them in sync all the time",source:"@site/docs/techniques/OpenAPI.md",sourceDirName:"techniques",slug:"/techniques/OpenAPI",permalink:"/ru/docs/techniques/OpenAPI",editUrl:"https://github.com/alosaur/docs/edit/master/docs/techniques/OpenAPI.md",version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Custom decorators",permalink:"/ru/docs/techniques/Custom decorators"},next:{title:"Alosaur Lite",permalink:"/ru/docs/alosaur-lite"}},l=[{value:"Type reference",id:"type-reference",children:[]}],u={toc:l};function d(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"openapi"},"OpenAPI"),(0,o.kt)("p",null,"OpenAPI is a formalized specification and a complete framework for describing, creating, using, and visualizing REST Web services. The goal is to allow client systems and documentation to synchronize their updates with changes on the server. This is achieved by integrating methods, parameters, models, and other elements through OpenAPI with the server software and keeping them in sync all the time"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"example")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/alosaur/alosaur/tree/master/examples/basic"},"Simple example")),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/alosaur/alosaur/tree/master/openapi/e2e/"},"Example with parse type reference")))),(0,o.kt)("p",null,"In order to generate an OpenApi file, you need to prepare the application settings for it, for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"export const settings: AppSettings = {\n  areas: [HomeArea, InfoArea, HealthArea, RootArea],\n  middlewares: [Log],\n  logging: false,\n};\n")),(0,o.kt)("p",null,"Then make basic OpenApi settings with AlosaurOpenApiBuilder:"),(0,o.kt)("p",null,"openapi.ts"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'AlosaurOpenApiBuilder.create(settings)\n  .registerControllers()\n  .addTitle("Basic Application")\n  .addVersion("1.0.0")\n  .addDescription("Example Alosaur OpenApi generate")\n  .addServer({\n    url: "http://localhost:8000",\n    description: "Local server",\n  })\n  .saveToFile("./examples/basic/api.json");\n')),(0,o.kt)("p",null,"Then run the command to generate the api.json file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"deno run -A --config ./src/tsconfig.lib.json examples/basic/openapi.ts\n")),(0,o.kt)("h3",{id:"type-reference"},"Type reference"),(0,o.kt)("p",null,"For support type references you can use JSDoc with Deno doc parse like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'// Parse controllers. Input path to your application\nconst docs = await AlosaurOpenApiBuilder.parseDenoDoc("./openapi/e2e/app.ts");\n\n// create builder and add docs, then register controllers and add scheme components\nconst builder = AlosaurOpenApiBuilder.create(settings)\n      .addDenoDocs(docs)\n      .registerControllers()\n      .addSchemeComponents()\n')),(0,o.kt)("p",null,"How to teaching how to correctly assemble controllers?"),(0,o.kt)("p",null,"You must put in the JsDoc decorator as\xa0",(0,o.kt)("strong",{parentName:"p"},"@decorator")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"ECMAScript decorators are sometimes an important part of an API contract. However, today the TypeScript compiler does not represent decorators in the .d.ts output files used by API consumers. The @decorator tag provides a workaround, enabling a decorator expression to be quoted in a doc comment. ",(0,o.kt)("a",{parentName:"p",href:"https://tsdoc.org/pages/tags/decorator/"},"https://tsdoc.org/pages/tags/decorator/"))),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'@Controller()\n/**\n * Product controller\n * @decorator Controller\n */\nexport class ProductController {\n  /**\n   * Gets product by id\n   * @summary action test\n   * @remarks Awesomeness!\n   * @param {id} The product id\n   * @decorator Get\n   */\n  @Get("/:id")\n  GetById(@Param("id") id: string) {\n    return new Product();\n  }\n}\n')),(0,o.kt)("p",null,"You can also add what media types can be expected in the body. Use RequestBody param in JsDoc"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'/**\n   * Create product\n   * @param product\n   * @decorator Post\n   * @RequestBody application/xml\n   * @RequestBody application/json\n   */\n  @Post("/")\n  Create(@Body() product: Product) {\n  }\n')),(0,o.kt)("p",null,"You can also add what types can be returned from a controller method. Use decorator ProducesResponse"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'/**\n * Gets product by id\n * @summary action test\n * @remarks Awesomeness!\n * @param {id} The product id\n * @decorator Get\n */\n@Get("/:id")\n@ProducesResponse({ code: 200, type: Product, description: "Product found" })\n@ProducesResponse({ code: 404, type: NotFoundResult, description: "Product has missing/invalid values" })\n@ProducesResponse({ code: 500, description: "Oops! Can\'t create your product right now" })\nGetById(@Param("id") id: string) {\n  return new Product();\n}\n')),(0,o.kt)("p",null,"To declare more information in types and models you can add other JsDoc parameters"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"/**\n * Entity of product\n */\nexport class Product {\n  /**\n   * @summary Identifer of code\n   * @example 1\n   */\n  id?: number;\n\n  /**\n   * @summary Array of test case\n   * @example [1,2,3]\n   */\n  arr?: number[];\n\n  /**\n   * @summary Type of product\n   * @example {id:1}\n   */\n  type?: ProductType;\n\n  /**\n   * @maximum 100\n   */\n  count?: number;\n}\n")),(0,o.kt)("p",null,"Alosaur openapi parser currently supports the following types and expressions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"interface PropertyJsDocObject {\n  title?: string;\n  pattern?: string;\n  multipleOf?: number;\n  maximum?: number;\n  minimum?: number;\n  exclusiveMaximum?: boolean;\n  exclusiveMinimum?: boolean;\n  maxLength?: number;\n  minLength?: number;\n  maxItems?: number;\n  minItems?: number;\n  uniqueItems?: boolean;\n  maxProperties?: number;\n  minProperties?: number;\n  required?: boolean;\n}\n")),(0,o.kt)("p",null,"Keywords:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"export interface JsDocObject {\n  example?: string;\n  decorator?: string;\n  default?: string;\n  description?: string;\n  deprecated?: boolean;\n  required?: boolean;\n  remarks?: string;\n  summary?: string;\n  format?: string;\n  params?: string[];\n\n  /**\n   * Request body media type uses in controllers\n   * application/json, application/xml, text/plain, etc\n   * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#requestBodyObject\n   */\n  RequestBody?: string[];\n}\n")),(0,o.kt)("p",null,"Ts types, ",(0,o.kt)("inlineCode",{parentName:"p"},"Object Date Symbol Map JSON RegExp String ArrayBuffer DataView Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array")))}d.isMDXComponent=!0}}]);