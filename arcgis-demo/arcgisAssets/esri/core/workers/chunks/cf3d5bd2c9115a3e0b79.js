"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[6368],{24832:(e,t,r)=>{r.d(t,{O:()=>i});var s=r(6220),n=(r(2600),r(20744)),o=r(66360),a=r(28176);function i(e){if(!s.default.assetsPath)throw o.c.getLogger("esri.assets").errorOnce("The API assets location needs to be set using config.assetsPath. More information: https://arcg.is/1OzLe50"),new n.c("assets:path-not-set","config.assetsPath is not set");return(0,a.kn)(s.default.assetsPath,e)}},2600:(e,t,r)=>{r.d(t,{c:()=>f});var s=r(6220),n=r(47620),o=r(20744),a=r(9456),i=r(62088),c=r(10860),l=r(28176),u=r(5604),d=r(20572),p=r(49628);async function f(e,t){e instanceof URL&&(e=e.toString()),t?.query instanceof URLSearchParams&&(t.query=(0,l.a4)(t.query.toString().replaceAll("+"," ")));const i=(0,l.o9)(e),u=(0,l.ue)(e);u||i||(e=(0,l.k7)(e));const f={url:e,requestOptions:{...t}};let w=(0,l.OO)(e);if(w){const e=await async function(e,t){if(null!=e.responseData)return e.responseData;if(e.headers&&(t.requestOptions.headers={...t.requestOptions.headers,...e.headers}),e.query&&(t.requestOptions.query={...t.requestOptions.query,...e.query}),e.before){let r,s;try{s=await e.before(t)}catch(e){r=L("request:interceptor",e,t)}if((s instanceof Error||s instanceof o.c)&&(r=L("request:interceptor",s,t)),r)throw e.error&&e.error(r),r;return s}}(w,f);if(null!=e)return{data:e,getAllHeaders:S,getHeader:S,httpStatus:200,requestOptions:f.requestOptions,url:f.url};w.after||w.error||(w=null)}if(e=f.url,"image"===(t=f.requestOptions).responseType&&((0,a.c)("host-webworker")||(0,a.c)("host-node")))throw L("request:invalid-parameters",new Error("responseType 'image' is not supported in Web Workers or Node environment"),f);if("head"===t.method){if(t.body)throw L("request:invalid-parameters",new Error("body parameter cannot be set when method is 'head'"),f);if(i||u)throw L("request:invalid-parameters",new Error("data and blob URLs are not supported for method 'head'"),f)}if(await async function(){(0,a.c)("host-webworker")&&!h&&(h=await r.e(5469).then(r.bind(r,75469)))}(),h)return h.execute(e,t);const y=new AbortController;(0,c.wD)(t,(()=>y.abort()));const b={controller:y,credential:void 0,credentialToken:void 0,fetchOptions:void 0,hasToken:!1,interceptor:w,params:f,redoRequest:!1,useIdentity:m.useIdentity,useProxy:!1,useSSL:!1,withCredentials:!1},T=await async function(e){let t,r;await async function(e){const t=e.params.url,r=e.params.requestOptions,o=e.controller.signal,a=r.body;let i=null,l=null;if(g&&"HTMLFormElement"in globalThis&&(a instanceof FormData?i=a:a instanceof HTMLFormElement&&(i=new FormData(a))),"string"==typeof a&&(l=a),e.fetchOptions={cache:r.cacheBust?"no-cache":"default",credentials:"same-origin",headers:r.headers||{},method:"head"===r.method?"HEAD":"GET",mode:"cors",priority:m.priority,redirect:"follow",signal:o},(i||l)&&(e.fetchOptions.body=i||l),"anonymous"===r.authMode&&(e.useIdentity=!1),e.hasToken=!!(/token=/i.test(t)||r.query?.token||i?.get("token")),!e.hasToken&&s.default.apiKey&&(0,d.s)(t)&&(r.query||(r.query={}),r.query.token=s.default.apiKey,e.hasToken=!0),e.useIdentity&&!e.hasToken&&!e.credentialToken&&!N(t)&&!(0,c.wv)(o)){let s;"immediate"===r.authMode?(await v(),s=await n.id.getCredential(t,{signal:o}),e.credential=s):"no-prompt"===r.authMode?(await v(),s=await n.id.getCredential(t,{prompt:!1,signal:o}).catch((()=>{})),e.credential=s):n.id&&(s=n.id.findCredential(t)),s&&(e.credentialToken=s.token,e.useSSL=!!s.ssl)}}(e);try{do{[t,r]=await O(e)}while(!await C(e,t,r))}catch(r){const s=L("request:server",r,e.params,t);throw s.details.ssl=e.useSSL,e.interceptor?.error&&e.interceptor.error(s),s}const o=e.params.url;if(r&&/\/sharing\/rest\/(accounts|portals)\/self/i.test(o)){if(!e.hasToken&&!e.credentialToken&&r.user?.username&&!(0,l.Yf)(o)){const e=(0,l.iK)(o,!0);e&&m.trustedServers.push(e)}Array.isArray(r.authorizedCrossOriginNoCorsDomains)&&(0,p.Ko)(r.authorizedCrossOriginNoCorsDomains)}const a=e.credential;if(a&&n.id){const e=n.id.findServerInfo(a.server);let t=e?.owningSystemUrl;if(t){t=t.replace(/\/?$/,"/sharing");const e=n.id.findCredential(t,a.userId);e&&-1===n.id._getIdenticalSvcIdx(t,e)&&e.resources.unshift(t)}}return{data:r,getAllHeaders:t?()=>Array.from(t.headers):S,getHeader:t?e=>t.headers.get(e):S,httpStatus:t?.status??200,requestOptions:e.params.requestOptions,ssl:e.useSSL,url:e.params.url}}(b);return w?.after?.(T),T}let h;const m=s.default.request,g="FormData"in globalThis,w=new Set([499,498,403,401]),y=new Set(["COM_0056","COM_0057","SB_0008"]),b=[/\/arcgis\/tokens/i,/\/sharing(\/rest)?\/generatetoken/i,/\/rest\/info/i],S=()=>null,T=Symbol();function q(e){const t=(0,l.iK)(e);return!t||t.endsWith(".arcgis.com")||f._corsServers.includes(t)||(0,l.Yf)(t)}function L(e,t,r,s){let n="Error";const a={url:r.url,requestOptions:r.requestOptions,getAllHeaders:S,getHeader:S,ssl:!1};if(t instanceof o.c)return t.details?(t.details=(0,i.ct)(t.details),t.details.url=r.url,t.details.requestOptions=r.requestOptions):t.details=a,t;if(t){const e=s&&(()=>Array.from(s.headers)),r=s&&(e=>s.headers.get(e)),o=s?.status,i=t.message;i&&(n=i),e&&r&&(a.getAllHeaders=e,a.getHeader=r),a.httpStatus=(null!=t.httpCode?t.httpCode:t.code)||o||0,a.subCode=t.subcode,a.messageCode=t.messageCode,"string"==typeof t.details?a.messages=[t.details]:a.messages=t.details,a.raw=T in t?t[T]:t}return(0,c.mA)(t)?(0,c.Uh)():new o.c(e,n,a)}async function v(){n.id||await Promise.all([r.e(9452),r.e(6712),r.e(7744),r.e(7144)]).then(r.bind(r,57592))}function N(e){return b.some((t=>t.test(e)))}async function O(e){let t=e.params.url;const r=e.params.requestOptions,s=e.fetchOptions??{},o=(0,l.ue)(t)||(0,l.o9)(t),i=r.responseType||"json",d=o?0:null!=r.timeout?r.timeout:m.timeout;let h=!1;if(!o){e.useSSL&&(t=(0,l.ms)(t));let o={...r.query};e.credentialToken&&(o.token=e.credentialToken);let i=(0,l.GK)(o);(0,a.c)("esri-url-encodes-apostrophe")&&(i=i.replaceAll("'","%27"));const c=t.length+1+i.length;let d;h="delete"===r.method||"post"===r.method||"put"===r.method||!!r.body||c>m.maxUrlLength;const f=r.useProxy||!!(0,l.Gq)(t);if(f){const e=(0,l.CI)(t);d=e.path,!h&&d.length+1+c>m.maxUrlLength&&(h=!0),e.query&&(o={...e.query,...o})}if("HEAD"===s.method&&(h||f)){if(h){if(c>m.maxUrlLength)throw L("request:invalid-parameters",new Error("URL exceeds maximum length"),e.params);throw L("request:invalid-parameters",new Error("cannot use POST request when method is 'head'"),e.params)}if(f)throw L("request:invalid-parameters",new Error("cannot use proxy when method is 'head'"),e.params)}if(h?(s.method="delete"===r.method?"DELETE":"put"===r.method?"PUT":"POST",r.body?t=(0,l.UP)(t,o):(s.body=(0,l.GK)(o),s.headers||(s.headers={}),s.headers["Content-Type"]="application/x-www-form-urlencoded")):t=(0,l.UP)(t,o),f&&(e.useProxy=!0,t=`${d}?${t}`),o.token&&g&&s.body instanceof FormData&&!(0,u.C)(t)&&s.body.set("token",o.token),r.hasOwnProperty("withCredentials"))e.withCredentials=r.withCredentials;else if(!(0,l.OS)(t,(0,l.k3)()))if((0,l.Yf)(t))e.withCredentials=!0;else if(n.id){const r=n.id.findServerInfo(t);r?.webTierAuth&&(e.withCredentials=!0)}e.withCredentials&&(s.credentials="include",(0,p.yK)(t)&&await(0,p.y4)(h?(0,l.UP)(t,o):t))}let w,y,b=0,S=!1;d>0&&(b=setTimeout((()=>{S=!0,e.controller.abort()}),d));try{if("native-request-init"===r.responseType)y=s,y.url=t;else if("image"!==r.responseType||"default"!==s.cache||"GET"!==s.method||h||function(e){if(e)for(const t of Object.getOwnPropertyNames(e))if(e[t])return!0;return!1}(r.headers)||!o&&!e.useProxy&&m.proxyUrl&&!q(t)){if(f._beforeFetch&&await f._beforeFetch(t,s),w=await fetch(t,s),f._afterFetch&&await f._afterFetch(w),e.useProxy||function(e){const t=(0,l.iK)(e);t&&!f._corsServers.includes(t)&&f._corsServers.push(t)}(t),"native"===r.responseType)y=w;else if("HEAD"!==s.method)if(w.ok){switch(i){case"array-buffer":y=await w.arrayBuffer();break;case"blob":case"image":y=await w.blob();break;default:y=await w.text()}if(b&&(clearTimeout(b),b=0),"json"===i||"xml"===i||"document"===i)if(y)switch(i){case"json":y=JSON.parse(y);break;case"xml":y=k(y,"application/xml");break;case"document":y=k(y,"text/html")}else y=null;if(y){if("array-buffer"===i||"blob"===i){const e=w.headers.get("Content-Type");if(e&&/application\/json|text\/plain/i.test(e)&&y["blob"===i?"size":"byteLength"]<=750)try{const e=await new Response(y).json();e.error&&(y=e)}catch{}}"image"===i&&y instanceof Blob&&(y=await U(URL.createObjectURL(y),e,!0))}}else{y=await w.text();try{y=JSON.parse(y)}catch{}}}else y=await U(t,e)}catch(s){if("AbortError"===s.name){if(S)throw(0,p.ol)();throw(0,c.Uh)("Request canceled")}if(!(!w&&s instanceof TypeError&&m.proxyUrl)||r.body||"delete"===r.method||"head"===r.method||"post"===r.method||"put"===r.method||e.useProxy||q(t))throw s;e.redoRequest=!0,(0,l.e8)({proxyUrl:m.proxyUrl,urlPrefix:(0,l.iK)(t)??""})}finally{b&&clearTimeout(b)}return[w,y]}function k(e,t){let r;try{r=(new DOMParser).parseFromString(e,t)}catch{}if(!r||r.getElementsByTagName("parsererror").length)throw new SyntaxError("XML Parse error");return r}async function C(e,t,r){if(e.redoRequest)return e.redoRequest=!1,!1;const s=e.params.requestOptions;if(!t||"native"===s.responseType||"native-request-init"===s.responseType)return!0;let o,a;if(r&&(r.error?o=r.error:"error"===r.status&&Array.isArray(r.messages)&&(o={...r},o[T]=r,o.details=r.messages)),!o&&!t.ok)throw o=new Error(`Unable to load ${t.url} status: ${t.status}`),o[T]=r,o;let i,c=null;o&&(a=Number(o.code),c=o.hasOwnProperty("subcode")?Number(o.subcode):null,i=o.messageCode,i=i?.toUpperCase());const l=s.authMode;if(403===a&&(4===c||o.message?.toLowerCase().includes("ssl")&&!o.message.toLowerCase().includes("permission"))){if(!e.useSSL)return e.useSSL=!0,!1}else if(!e.hasToken&&e.useIdentity&&("no-prompt"!==l||498===a)&&void 0!==a&&w.has(a)&&!N(e.params.url)&&(403!==a||(!i||!y.has(i))&&(null==c||2===c&&e.credentialToken))){await v();try{const t=await n.id.getCredential(e.params.url,{error:L("request:server",o,e.params),prompt:"no-prompt"!==l,signal:e.controller.signal,token:e.credentialToken});return e.credential=t,e.credentialToken=t.token,e.useSSL=e.useSSL||t.ssl,!1}catch(t){if("no-prompt"===l)return e.credential=void 0,e.credentialToken=void 0,!1;o=t}}if(o)throw o;return!0}function U(e,t,r=!1){const s=t.controller.signal,n=new Image;return t.withCredentials?n.crossOrigin="use-credentials":n.crossOrigin="anonymous",n.alt="",n.fetchPriority=m.priority,n.src=e,(0,p.wx)(n,e,r,s)}f._corsServers=["https://server.arcgisonline.com","https://services.arcgisonline.com"],f._beforeFetch=void 0,f._afterFetch=void 0},20572:(e,t,r)=>{r.d(t,{s:()=>o});var s=r(28176);const n=new Set(["elevation3d.arcgis.com","js.arcgis.com","jsdev.arcgis.com","jsqa.arcgis.com","static.arcgis.com"]);function o(e){const t=(0,s.iK)(e,!0);return!!t&&t.endsWith(".arcgis.com")&&!n.has(t)&&!e.endsWith("/sharing/rest/generateToken")}},49628:(e,t,r)=>{r.d(t,{Ko:()=>d,ol:()=>u,wx:()=>i,y4:()=>f,yK:()=>p});var s=r(6220),n=r(9456),o=r(10860),a=r(28176);function i(e,t,r=!1,s){return new Promise(((a,i)=>{if((0,o.wv)(s))return void i(c());let l=()=>{p(),i(new Error(`Unable to load ${t}`))},u=()=>{const t=e;p(),a(t)},d=()=>{if(!e)return;const t=e;p(),t.src="",i(c())};const p=()=>{(0,n.c)("esri-image-decode")||(e.removeEventListener("error",l),e.removeEventListener("load",u)),l=null,u=null,e=null,null!=s&&s.removeEventListener("abort",d),d=null,r&&URL.revokeObjectURL(t)};null!=s&&s.addEventListener("abort",d),(0,n.c)("esri-image-decode")?e.decode().then(u,l):(e.addEventListener("error",l),e.addEventListener("load",u))}))}function c(){try{return new DOMException("Aborted","AbortError")}catch{const e=new Error;return e.name="AbortError",e}}const l="Timeout exceeded";function u(){return new Error(l)}function d(e){s.default.request.crossOriginNoCorsDomains||(s.default.request.crossOriginNoCorsDomains={});const t=s.default.request.crossOriginNoCorsDomains;for(let r of e)r=r.toLowerCase(),/^https?:\/\//.test(r)?t[(0,a.iK)(r)??""]=0:(t[(0,a.iK)("http://"+r)??""]=0,t[(0,a.iK)("https://"+r)??""]=0)}function p(e){const t=s.default.request.crossOriginNoCorsDomains;if(t){let r=(0,a.iK)(e);if(r)return r=r.toLowerCase(),!(0,a.OS)(r,(0,a.k3)())&&t[r]<Date.now()-36e5}return!1}async function f(e){const t=s.default.request.crossOriginNoCorsDomains,r=(0,a.iK)(e);t&&r&&(t[r.toLowerCase()]=Date.now());const n=(0,a.as)(e);e=n.path,"json"===n.query?.f&&(e+="?f=json");try{await fetch(e,{mode:"no-cors",credentials:"include"})}catch{}}},96368:(e,t,r)=>{var s,n,o,a,i,c,l,u,d,p,f,h,m,g,w;r.r(t),r.d(t,{destroyWasm:()=>L,initialize:()=>v,process:()=>q}),function(e){e.U8="U8",e.I8="I8",e.U16="U16",e.I16="I16",e.U32="U32",e.I32="I32",e.F32="F32",e.F64="F64",e.Utf8String="Utf8String",e.NotSet="NotSet"}(s||(s={})),function(e){e.Png="Png",e.Jpeg="Jpeg",e.Dds="Dds",e.Raw="Raw",e.Dxt1="Dxt1",e.Dxt5="Dxt5",e.Etc2="Etc2",e.Astc="Astc",e.Pvrtc="Pvrtc",e.NotSet="NotSet"}(n||(n={})),function(e){e.Rgb8="Rgb8",e.Rgba8="Rgba8",e.R8="R8",e.Bgr8="Bgr8",e.Bgra8="Bgra8",e.Rg8="Rg8",e.NotSet="NotSet"}(o||(o={})),function(e){e.Position="Position",e.Normal="Normal",e.TexCoord="TexCoord",e.Color="Color",e.Tangent="Tangent",e.FeatureIndex="FeatureIndex",e.UvRegion="UvRegion",e.NotSet="NotSet"}(a||(a={})),function(e){e.Opaque="Opaque",e.Mask="Mask",e.Blend="Blend"}(i||(i={})),function(e){e.None="None",e.Mask="Mask",e.Alpha="Alpha",e.PreMultAlpha="PreMultAlpha",e.NotSet="NotSet"}(c||(c={})),function(e){e.Points="Points",e.Lines="Lines",e.LineStrip="LineStrip",e.Triangles="Triangles",e.TriangleStrip="TriangleStrip",e.NotSet="NotSet"}(l||(l={})),function(e){e.None="None",e.WrapXBit="WrapXBit",e.WrapYBit="WrapYBit",e.WrapXy="WrapXy",e.NotSet="NotSet"}(u||(u={})),function(e){e.Linear="Linear",e.Nearest="Nearest",e.NotSet="NotSet"}(d||(d={})),function(e){e.Linear="Linear",e.Nearest="Nearest",e.NearestMipmapNearest="NearestMipmapNearest",e.LinearMipmapNearest="LinearMipmapNearest",e.NearestMipmapLinear="NearestMipmapLinear",e.LinearMipmapLinear="LinearMipmapLinear",e.NotSet="NotSet"}(p||(p={})),function(e){e.FeatureId="FeatureId",e.GlobalUid="GlobalUid",e.UnspecifiedDateTime="UnspecifiedDateTime",e.EcmaIso8601DateTime="EcmaIso8601DateTime",e.EcmaIso8601DateOnly="EcmaIso8601DateOnly",e.TimeOnly="TimeOnly",e.TimeStamp="TimeStamp",e.ColorRgb="ColorRgb",e.ColorRgba="ColorRgba",e.Unrecognized="Unrecognized",e.NotSet="NotSet"}(f||(f={})),function(e){e.Texture="Texture",e.VertexAtrb="VertexAtrb",e.Implicit="Implicit",e.NotSet="NotSet"}(h||(h={})),function(e){e.Front="Front",e.Back="Back",e.None="None",e.NotSet="NotSet"}(m||(m={})),function(e){e.Pbr="Pbr",e.Unlit="Unlit"}(g||(g={})),function(e){e[e.Succeeded=0]="Succeeded",e[e.Failed=1]="Failed",e[e.MissingInputs=2]="MissingInputs"}(w||(w={}));var y=r(24832);function b(e){return(0,y.O)(`esri/libs/lyr3d/${e}`)}let S,T;async function q(e){if(await v(),e.inputs.length<1)return{result:{status:w.Failed,error:"",jobDescJson:"",data:new Uint8Array(0),missingInputUrls:[]},transferList:[]};const t={ptrs:[],sizes:[]};for(const r of e.inputs){const e=T._malloc(r.byteLength);new Uint8Array(T.HEAPU8.buffer,e,r.byteLength).set(new Uint8Array(r)),t.ptrs.push(e),t.sizes.push(r.byteLength)}const r=T.process(e.jobDescJson,t,e.isMissingResourceCase),s=r.status===w.Succeeded&&r.data,n=r.status===w.MissingInputs&&r.missingInputUrls.length>0;if(s){const e=r.data.slice();r.data=e}else n&&(r.jobDescJson=r.jobDescJson.slice(0),r.originalInputs=e.inputs);for(let e=0;e<t.ptrs.length;++e)T._free(t.ptrs[e]);const o=[];if(s)o.push(r.data.buffer);else if(n)for(const t of e.inputs)o.push(t);return{result:r,transferList:o}}function L(){T&&(T.uninitialize_lyr3d_worker_wasm(),T=null)}function v(){return T?Promise.resolve():(S||(S=new Promise((e=>r.e(9496).then(r.bind(r,29496)).then((e=>e.l)).then((({default:t})=>{const r=t({locateFile:b,onRuntimeInitialized:()=>e(r)})})))).catch((e=>{throw e})).then((e=>{T=e,T.initialize_lyr3d_worker_wasm(),S=null}))),S)}}}]);