import{t as o}from"./lazyLayerLoader-7F4NYwDv.js";async function h(t,r){const{loadContext:a,...e}=r||{},n=a?await a.fetchServiceMetadata(t,e):await o(t,e);y(n),l(n);const s={serviceJSON:n};if((n.currentVersion??0)<10.5)return s;const c=`${t}/layers`,i=a?await a.fetchServiceMetadata(c,e):await o(c,e);return y(i),l(i),s.layersJSON={layers:i.layers,tables:i.tables},s}function f(t){return t.type==="Feature Layer"||t.type==="Oriented Imagery Layer"}function u(t){return t.type==="Table"}function l(t){var r,a;t.layers=(r=t.layers)==null?void 0:r.filter(f),t.tables=(a=t.tables)==null?void 0:a.filter(u)}function b(t){t.type||(t.type="Feature Layer")}function p(t){t.type||(t.type="Table")}function y(t){var r,a;(r=t.layers)==null||r.forEach(b),(a=t.tables)==null||a.forEach(p)}export{h as t};
