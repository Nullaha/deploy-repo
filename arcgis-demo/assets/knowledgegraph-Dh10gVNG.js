const __vite__fileDeps=["assets/knowledgeGraphService-DKasxt_-.js","assets/index-DSZyN7qH.js","assets/index-DYYch56J.js","assets/index-DBlYAhtB.css","assets/index-CDH0bD0d.css","assets/Relationship-D5Ae8t_d.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as G,s as V}from"./index-DYYch56J.js";import{af as b,aV as J,aW as Q,aX as K,b3 as I,ae as M,er as P,et as U,eu as j}from"./index-DSZyN7qH.js";import{a as T,b as f,r as p,x as B,d as W,G as y,a9 as C,v as L,N as E,U as _,q as O,E as q,X as k,k as X,t as Y,aa as z,ab as A,ac as H}from"./arcadeUtils-CIqWElA3.js";import{l as Z}from"./portalUtils-We9q4GHJ.js";import{p as $,n as nn}from"./project-BqJ7-7u0.js";import{a as tn,m as en,t as an,p as rn,c as on}from"./Relationship-D5Ae8t_d.js";import"./TimeOnly-V9OLRT9L.js";import"./ImmutableArray-BlMso3qf.js";import"./number-BIHvJcF0.js";let c=null;async function sn(n){const t=V.geometryServiceUrl??"";if(!t){J()||await Q();for(const e of n)e.container[e.indexer]=K(e.container[e.indexer],I.WGS84);return}const a=n.map(e=>e.container[e.indexer]),i=new $({geometries:a,outSpatialReference:I.WGS84}),s=await nn(t,i);for(let e=0;e<s.length;e++){const r=n[e];r.container[r.indexer]=s[e]}}async function D(n,t){const a=new M({portal:n,id:t});return await a.load(),c===null&&(c=await G(()=>import("./knowledgeGraphService-DKasxt_-.js").then(i=>i.k),__vite__mapDeps([0,1,2,3,4,5]))),await c.fetchKnowledgeGraph(a.url)}function v(n,t,a,i,s){if(n===null)return null;if(y(n)||q(n))return n;if(k(n)||k(n))return n.toJSDate();if(X(n))return n.toStorageFormat();if(Y(n))return n.toStorageString();if(z(n)){const e={};for(const r of n.keys())e[r]=v(n.field(r),t,a,i,s),e[r]instanceof P&&s.push({container:e,indexer:r});return e}if(_(n)){const e=n.map(r=>v(r,t,a,i,s));for(let r=0;r<e.length;r++)e[r]instanceof P&&s.push({container:e,indexer:r});return e}if(A(n))return n.spatialReference.isWGS84?n:n.spatialReference.isWebMercator&&t?U(n):n}function ln(n,t){if(!n)return n;if(n.spatialReference.isWGS84&&t.spatialReference.isWebMercator)return j(n);if(n.spatialReference.equals(t.spatialReference))return n;throw new f(t,p.WrongSpatialReference,null)}function S(n,t){if(!n)return null;const a={};for(const i in n)a[i]=g(n[i],t);return a}function g(n,t){return n===null?null:_(n)?n.map(a=>g(a,t)):n instanceof en?{graphTypeName:n.typeName,id:n.id,graphType:"entity",properties:S(n.properties,t)}:n instanceof an?{graphType:"object",properties:S(n.properties,t)}:n instanceof rn?{graphTypeName:n.typeName,id:n.id,graphType:"relationship",originId:n.originId??null,destinationId:n.destinationId??null,properties:S(n.properties,t)}:n instanceof on?{graphType:"path",path:n.path?n.path.map(a=>g(a,t)):null}:A(n)?ln(n,t):y(n)||q(n)||H(n)?n:null}function yn(n){n.mode==="async"&&(n.functions.knowledgegraphbyportalitem=function(t,a){return n.standardFunctionAsync(t,a,(i,s,e)=>{var d,m;if(T(e,2,2,t,a),e[0]===null)throw new f(t,p.PortalRequired,a);if(e[0]instanceof B){const u=W(e[1]);let h=null;return h=(d=t.services)!=null&&d.portal?t.services.portal:b.getDefault(),D(Z(e[0],h),u)}if(y(e[0])===!1)throw new f(t,p.InvalidParameter,a);const r=W(e[0]);return D(((m=t.services)==null?void 0:m.portal)??b.getDefault(),r)})},n.signatures.push({name:"knowledgegraphbyportalitem",min:2,max:2}),n.functions.querygraph=function(t,a){return n.standardFunctionAsync(t,a,async(i,s,e)=>{var x;T(e,2,4,t,a);const r=e[0];if(!C(r))throw new f(t,p.InvalidParameter,a);const d=e[1];if(!y(d))throw new f(t,p.InvalidParameter,a);c===null&&(c=await G(()=>import("./knowledgeGraphService-DKasxt_-.js").then(o=>o.k),__vite__mapDeps([0,1,2,3,4,5])));let m=null;const u=L(e[2],null);if(!(u instanceof E||u===null))throw new f(t,p.InvalidParameter,a);if(u){let o=[];m=v(u,!0,!1,t,o),o=o.filter(l=>!l.container[l.indexer].spatialReference.isWGS84),o.length>0&&await sn(o)}const h=new tn({openCypherQuery:d,bindParameters:m});(((x=r==null?void 0:r.serviceDefinition)==null?void 0:x.currentVersion)??11.3)>11.2&&(h.outputSpatialReference=t.spatialReference);const F=(await c.executeQueryStreaming(r,h)).resultRowsStream.getReader(),R=[];try{for(;;){const{done:o,value:l}=await F.read();if(o)break;if(_(l))for(const w of l)R.push(g(w,t));else{const w=[];for(const N of l)w.push(g(l[N],t));R.push(w)}}}catch(o){throw o}return E.convertJsonToArcade(R,O(t),!1,!0)})},n.signatures.push({name:"querygraph",min:2,max:4}))}export{yn as registerFunctions};
