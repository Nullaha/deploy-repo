import{C,U as A,D as _,E as T,F as s,H as O,I as d}from"./index-DSZyN7qH.js";import{e as h,m as E}from"./Texture-Bqx2wzNM.js";function b(e,a,t="nearest",i=!1){var c;const n=!(i&&a.pixelType==="u8"),o=n?A.FLOAT:A.UNSIGNED_BYTE,u=a.pixels==null||a.pixels.length===0?null:n?a.getAsRGBAFloat():a.getAsRGBA(),f=(c=e.capabilities.textureFloat)==null?void 0:c.textureFloatLinear,r=new h;return r.width=a.width,r.height=a.height,r.internalFormat=n?C.RGBA32F:d.RGBA,r.samplingMode=!f||t!=="bilinear"&&t!=="cubic"?_.NEAREST:_.LINEAR,r.dataType=o,r.wrapMode=T.CLAMP_TO_EDGE,new E(e,r,u)}function w(e,a){const{spacing:t,offsets:i,coefficients:n,size:[o,u]}=a,f=t[0]>1,r=new h;r.width=f?4*o:o,r.height=u,r.internalFormat=C.RGBA32F,r.dataType=A.FLOAT,r.samplingMode=_.NEAREST,r.wrapMode=T.CLAMP_TO_EDGE;const c=new Float32Array(f?o*u*16:2*i.length);if(f&&n!=null)for(let m=0,l=0;m<n.length;m++)c[l++]=n[m],m%3==2&&(c[l++]=1);else for(let m=0;m<u;m++)for(let l=0;l<o;l++){const g=4*(m*o+l),p=2*(l*u+m);c[g]=i[p],c[g+1]=i[p+1],c[g+3]=i[p]===-1?0:1}return new E(e,r,c)}function M(e,a){const t=new h;return t.internalFormat=d.RGBA,t.width=a.length/4,t.height=1,t.samplingMode=_.NEAREST,t.wrapMode=T.CLAMP_TO_EDGE,new E(e,t,a)}function x(e,a,t,i=1,n=!0){return{u_flipY:n,u_applyTransform:!!e,u_opacity:i,u_transformSpacing:e?e.spacing:O,u_transformGridSize:e?e.size:O,u_targetImageSize:a,u_srcImageSize:t}}function G(e,a){return{u_colormapOffset:a||0,u_colormapMaxIndex:e?e.length/4-1:0}}function V(e,a){return{u_scale:e,u_offset:a}}function k(e){return{u_bandCount:e.bandCount,u_minOutput:e.outMin,u_maxOutput:e.outMax,u_minCutOff:e.minCutOff,u_maxCutOff:e.maxCutOff,u_factor:e.factor,u_useGamma:e.useGamma,u_gamma:e.gamma,u_gammaCorrection:e.gammaCorrection}}function I(e){return{u_hillshadeType:e.hillshadeType,u_sinZcosAs:e.sinZcosAs,u_sinZsinAs:e.sinZsinAs,u_cosZs:e.cosZs,u_weights:e.weights,u_factor:e.factor,u_minValue:e.minValue,u_maxValue:e.maxValue}}function N(e,a){const t=e.gl,i=a.glName,n=new Map;if(i==null)return n;const o=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);let u;for(let f=0;f<o;f++)u=t.getActiveUniform(i,f),u&&n.set(u.name,{location:t.getUniformLocation(i,u.name),info:u});return n}function v(e,a,t){Object.keys(t).forEach(i=>{const n=a.get(i)||a.get(i+"[0]");n&&F(e,i,t[i],n)})}function B(e,a,t,i){t.length===i.length&&(i.some(n=>n==null)||t.some(n=>n==null)||t.forEach((n,o)=>{a.setUniform1i(n,o),e.bindTexture(i[o],o)}))}function F(e,a,t,i){if(i===null||t==null)return!1;const{info:n}=i;switch(n.type){case s.FLOAT:n.size>1?e.setUniform1fv(a,t):e.setUniform1f(a,t);break;case s.FLOAT_VEC2:e.setUniform2fv(a,t);break;case s.FLOAT_VEC3:e.setUniform3fv(a,t);break;case s.FLOAT_VEC4:e.setUniform4fv(a,t);break;case s.FLOAT_MAT3:e.setUniformMatrix3fv(a,t);break;case s.FLOAT_MAT4:e.setUniformMatrix4fv(a,t);break;case s.INT:n.size>1?e.setUniform1iv(a,t):e.setUniform1i(a,t);break;case s.BOOL:e.setUniform1i(a,t?1:0);break;case s.INT_VEC2:case s.BOOL_VEC2:e.setUniform2iv(a,t);break;case s.INT_VEC3:case s.BOOL_VEC3:e.setUniform3iv(a,t);break;case s.INT_VEC4:case s.BOOL_VEC4:e.setUniform4iv(a,t);break;default:return!1}return!0}export{I as A,B as O,N as T,G as _,w as c,b as f,V as g,v as h,x as l,M as m,k as p};
