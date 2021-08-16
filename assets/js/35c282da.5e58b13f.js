"use strict";(self.webpackChunkalosaur_docs=self.webpackChunkalosaur_docs||[]).push([[41],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=i,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||r;return n?o.createElement(m,a(a({ref:t},l),{},{components:n})):o.createElement(m,a({ref:t},l))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<r;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3969:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var o=n(7462),i=n(3366),r=(n(7294),n(3905)),a=["components"],s={sidebar_position:9},c="Security",u={unversionedId:"basics/Security",id:"basics/Security",isDocsHomePage:!1,title:"Security",description:"In Alosaur, this module includes several sub-modules. You also need to substitute HttpContext with SecurityContext in order to substitute it. You can see it below in the examples.",source:"@site/docs/basics/Security.md",sourceDirName:"basics",slug:"/basics/Security",permalink:"/docs/basics/Security",editUrl:"https://github.com/alosaur/docs/edit/master/docs/basics/Security.md",version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Render pages",permalink:"/docs/basics/Render pages"},next:{title:"Standart Hooks",permalink:"/docs/basics/Standart Hooks"}},l=[{value:"Session",id:"session",children:[]},{value:"Authorization &amp; Authentication",id:"authorization--authentication",children:[{value:"AuthMiddleware",id:"authmiddleware",children:[]},{value:"AuthenticationScheme",id:"authenticationscheme",children:[]}]},{value:"SecurityContext",id:"securitycontext",children:[]},{value:"Authorize Decorators",id:"authorize-decorators",children:[]}],p={toc:l};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"security"},"Security"),(0,r.kt)("p",null,"In Alosaur, this module includes several sub-modules. You also need to substitute HttpContext with SecurityContext in order to substitute it. You can see it below in the examples."),(0,r.kt)("h2",{id:"session"},"Session"),(0,r.kt)("p",null,"Sessions in Alosaur are cookie-based. By enabling this functionality, you can take advantage of other features such as Authorization. "),(0,r.kt)("p",null,"Sessions add a user to the cookie with a so called sessionId which also includes a signature part, so a unique secret key must be specified. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'...\n\n// Create store for sessions\nconst store = new MemoryStore();\nawait store.init();\n\n// App settings\nnew App({\n    ...\n    providers: [{ // need for create security context\n        token: Context,\n        useClass: SecurityContext, \n    }],\n    ...\n});\n\n// Key for sign session id\napp.use(/\\//,  new SessionMiddleware(store, {secret: "6b911fd37cdf5c81d4c0adb1ab7fa822ed253ab0ad9aa18d77257c88b29b718e"}));\n\n// then you can use Context in action:\n// action\n@Get(\'counter\')\npublic action(@Ctx() context: SecurityContext) {\n    context.security.session.set("testValue", 1);\n    context.security.session.get("testValue", 1);\n    \n    const sid = context.security.session.sessionId;\n    \n    console.log(sid);\n    \n    // and use your store\n    await context.security.session.store.exist(sid);\n}\n')),(0,r.kt)("p",null,"SessionMiddleware takes 2 values: SessionStore and SessionOptions. Session store is needed to store the sessionId information and the information written in session."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Alosaur provides by default a ",(0,r.kt)("strong",{parentName:"p"},"MemoryStore")," that stores information in runtime application memory. You can also implement your Store using the ",(0,r.kt)("strong",{parentName:"p"},"SessionStore")," interface: ",(0,r.kt)("strong",{parentName:"p"},"SessionStore"),". Learn more: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/alosaur/alosaur/tree/master/src/security/session"},"https://github.com/alosaur/alosaur/tree/master/src/security/session")))),(0,r.kt)("p",null,"The SessionOptions interface looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export interface SessionOptions {\n  /** Security key for sign hash **/\n  secret: Uint8Array | bigint | number | string;\n  /** Key for save in cookie default 'sid' **/\n  name?: string;\n  /** Expiration date of the cookie. */\n  expires?: Date;\n  /** Max-Age of the session Cookie. Must be integer superior to 0. */\n  maxAge?: number;\n  /** Specifies those hosts to which the cookie will be sent. */\n  domain?: string;\n  /** Indicates a URL path that must exist in the request. */\n  path?: string;\n  /** Indicates if the cookie is made using SSL & HTTPS. */\n  secure?: boolean;\n  /** Indicates that cookie is not accessible via JavaScript. **/\n  httpOnly?: boolean;\n  /** Allows servers to assert that a cookie ought not to\n   * be sent along with cross-site requests. */\n  sameSite?: SameSite;\n}\n")),(0,r.kt)("h2",{id:"authorization--authentication"},"Authorization & Authentication"),(0,r.kt)("p",null,"Example authorization application: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/alosaur/alosaur/tree/master/examples/auth"},"https://github.com/alosaur/alosaur/tree/master/examples/auth")),(0,r.kt)("h3",{id:"authmiddleware"},"AuthMiddleware"),(0,r.kt)("p",null,"For authorization to work, you must enable AuthMiddleware support by passing the appropriate AuthenticationScheme to it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const app = new App({\n  providers: [{ // need for create security context\n    token: Context,\n    useClass: SecurityContext,\n  }],\n});\n\n// create session store\nconst sessionStore = new MemoryStore();\nawait sessionStore.init();\n\n// create middleware with options\nconst sessionMiddleware = new SessionMiddleware(sessionStore, {\n  secret: 123456789n,\n  maxAge: DAYS_30,\n  path: "/",\n});\n\n// create auth middleware with schemes\nconst authMiddleware = new AuthMiddleware([\n  CookiesAuthentication.DefaultScheme,\n]);\n\napp.use(new RegExp("/"), sessionMiddleware);\napp.use(new RegExp("/"), authMiddleware);\n')),(0,r.kt)("h3",{id:"authenticationscheme"},"AuthenticationScheme"),(0,r.kt)("p",null,"Required to use SecurityContext, Authenticate, verify, signin, signout."),(0,r.kt)("p",null,"There are 2 types of schemes in Alosaur: ",(0,r.kt)("inlineCode",{parentName:"p"},"CookiesAuthentication.DefaultScheme")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"JwtBearerScheme"),"."),(0,r.kt)("p",null,"Having a common interface AuthenticationScheme:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export interface AuthenticationScheme {\n  /**\n   * This function assign to context identity info, uses in Authorization middleware\n   */\n  authenticate(context: SecurityContext): Promise<void>;\n\n  /**\n   * Create sign identity and assign to context identity info\n   */\n  signInAsync<I, R = any>(\n    context: SecurityContext,\n    identity: Identity<I>,\n  ): Promise<R>;\n\n  /**\n   * Clear sign in info and destroy identity context\n   */\n  signOutAsync<T, R>(context: SecurityContext): Promise<R>;\n\n  /**\n   * Uses in Authorize decorators for handle if AuthPayload result failure\n   */\n  onFailureResult(context: SecurityContext): void;\n\n  /**\n   * Uses in Authorize decorators for handle if AuthPayload result success\n   */\n  onSuccessResult(context: SecurityContext): void;\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"CookiesScheme")),(0,r.kt)("p",null,"Includes support for Cookies for authorization. You can use the default scheme and override its behavior"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'export namespace CookiesAuthentication {\n  export const DefaultScheme = new CookiesScheme(\n    "/account/login",\n  );\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"JwtBearerScheme")),(0,r.kt)("p",null,"Includes JSON Web Tokens support for authorization. Read more about it: ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/JSON_Web_Token"},"https://en.wikipedia.org/wiki/JSON_Web_Token")),(0,r.kt)("p",null,"For login and authentication you need to create instance of this scheme:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'export const JWTscheme = new JwtBearerScheme(\n  "HS512",\n  "secret_key",\n  30 * 24 * 60 * 60 * 1000,\n);\n//     private readonly algorithm: Algorithm,\n//     private readonly secret: string,\n//     private readonly expires: number = DAYS_30,\n\n// and use JWTscheme in other cases, when need scheme\n\nconst app = new App({\n  providers: [{ // need for create security context\n    token: Context,\n    useClass: SecurityContext,\n  }],\n});\n\n// create auth middlware with schemes\nconst authMiddleware = new AuthMiddleware([JWTscheme]);\n\napp.use(new RegExp("/"), authMiddleware);\n')),(0,r.kt)("h2",{id:"securitycontext"},"SecurityContext"),(0,r.kt)("p",null,"SecurityContext can be used everywhere just like regular HttpContext. To use it, you must redefine it at the application level:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const app = new App({\n  providers: [{ // need for create security context\n    token: Context,\n    useClass: SecurityContext,\n  }],\n});\n")),(0,r.kt)("p",null,"An example of working with SecurityContext and a possible implementation of authorization:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'@Controller("/account")\nexport class AccountController {\n  name: string | undefined = undefined;\n\n  constructor(private service: AuthService) {}\n\n  @Get("/login")\n  getLogin(@Ctx() context: SecurityContext) {\n    if (context.security.auth.identity()) {\n      return Redirect("/home/protected");\n    }\n\n    return `<form method="post">\n                login: admin <br>\n                password: admin <br>\n              <input type="text" name="login" placeholder="login" value="admin"><br>\n              <input type="password" name="password" placeholder="password" value="admin"><br>\n              <input type="submit">\n            </form>`;\n  }\n\n  @Post("/login")\n  async postLogin(\n    @Ctx() context: SecurityContext,\n    @Body() account: LoginModel,\n  ) {\n    const user = this.service.validate(account.login, account.password);\n\n    if (user) {\n      await context.security.auth.signInAsync<UserModel>(scheme, user);\n      return Redirect("/home/protected");\n    }\n\n    return Redirect("/account/login");\n  }\n\n  @Get("/logout")\n  async logOut(@Ctx() context: SecurityContext) {\n    await context.security.auth.signOutAsync(scheme);\n    return Redirect("/account/login");\n  }\n}\n\n// validation user service\nexport class AuthService {\n  validate(login: string, password: string): UserModel | undefined {\n    if (login === "admin" && password === "admin") {\n      return { id: "1", login: "admin" };\n    }\n    return undefined;\n  }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"auth.signInAsync")," "),(0,r.kt)("p",null,"Accepts AuthenticationScheme and Identity object"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"auth.signOutAsync")),(0,r.kt)("p",null,"Accepts AuthenticationScheme"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Identity")),(0,r.kt)("p",null,"The object that will be available later in the SecurityContext, roles can be used in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Authorize")," decorator"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'  export interface Identity<T> {\n  id: string | number;\n  data?: T;\n  readonly roles?: string[];\n}\n\n// example of use\n\nawait context.security.auth.signInAsync(\n   CookieScheme,\n   { id: 1, roles: ["admin"] }\n);\n')),(0,r.kt)("h2",{id:"authorize-decorators"},"Authorize Decorators"),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"@Authorize")," decorator out of the box for ease of use."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@Authorize(scheme, payload)")," is a special decorator hook that can be used at different levels: actions, controllers, areas."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'@Authorize(CookiesAuthentication.DefaultScheme)\n@Get("/protected")\ngetProtectedData() {\n    return "Hi! this protected info. <br>  <a href=\'/account/logout\'>logout</a>";\n  }\n')),(0,r.kt)("p",null,"Authorize with roles:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'@Authorize(CookieScheme, {roles: ["admin"]})\n')),(0,r.kt)("p",null,"Authorize with custom policy function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"\nconst CostomAuthPolicy = (context: SecurityContext) => {\n    result = false ;// validate with context\n    return result;\n}\n\n@Authorize(CookieScheme, { policy: CostomAuthPolicy })\n")))}d.isMDXComponent=!0}}]);