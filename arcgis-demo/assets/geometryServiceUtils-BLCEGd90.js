import{s}from"./index-DYYch56J.js";import{s as l,af as c}from"./index-DSZyN7qH.js";import{p as m,n as f}from"./project-BqJ7-7u0.js";async function g(e=null,a){var i,r;if(s.geometryServiceUrl)return s.geometryServiceUrl;if(!e)throw new l("internal:geometry-service-url-not-configured");let t;t="portal"in e?e.portal||c.getDefault():e,await t.load({signal:a});const n=(r=(i=t.helperServices)==null?void 0:i.geometry)==null?void 0:r.url;if(!n)throw new l("internal:geometry-service-url-not-configured");return n}async function w(e,a,t=null,n){const i=await g(t,n),r=new m;r.geometries=[e],r.outSpatialReference=a;const o=await f(i,r,{signal:n});if(o&&Array.isArray(o)&&o.length===1)return o[0];throw new l("internal:geometry-service-projection-failed")}export{g as getGeometryServiceURL,w as projectGeometry};
