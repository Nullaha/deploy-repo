import"./index-DYYch56J.js";import{bK as w,h4 as a,ho as z,bT as O,bO as h,bU as K,bV as g,bY as m,bX as l,h0 as E,bJ as j,bz as x,hp as v,g as U,by as W,hq as C,bL as P,hr as B,ed as D,bW as F,hs as p,bN as G,ht as R,f7 as _,h3 as H,h2 as I,hk as Q}from"./index-DSZyN7qH.js";import{s as tt}from"./ObjectStack-DNcrsVuJ.js";import{c as f,f as nt}from"./plane-B3YjWyMT.js";function et(t,e){const n=w(t,e)/(a(t)*a(e));return-z(n)}function N(t){return t?T(O(t.origin),O(t.direction)):T(h(),h())}function T(t,e){return{origin:t,direction:e}}function wt(t,e){const n=it.get();return n.origin=t,n.direction=e,n}function ot(t,e,n=N()){return K(n.origin,t),g(n.direction,e,t),n}function rt(t,e,n){const o=w(t.direction,g(n,e,t.origin));return m(n,t.origin,l(n,t.direction,o)),n}const it=new tt(()=>N()),st=A();function A(){return E()}const ct=j,ut=j;function V(t,e){return x(e,t)}function at(t,e){return v(t[0],t[1],t[2],e)}function ft(t){return t}function gt(t){t[0]=t[1]=t[2]=t[3]=0}function ht(t,e){return t[0]=t[1]=t[2]=0,t[3]=e,t}function $(t){return t[3]}function lt(t){return t}function dt(t,e,n,o){return v(t,e,n,o)}function pt(t,e,n){return t!==n&&(n[0]=t[0],n[1]=t[1],n[2]=t[2]),n[3]=t[3]+e,n}function bt(t,e,n){return U.getLogger("esri.geometry.support.sphere").error("sphere.setExtent is not yet supported"),t!==n&&V(t,n),n}function M(t,e,n){if(e==null||!X(t,e,b))return!1;let{t0:o,t1:r}=b;if((o<0||r<o&&r>0)&&(o=r),o<0)return!1;if(n){const{origin:i,direction:s}=e;n[0]=i[0]+s[0]*o,n[1]=i[1]+s[1]*o,n[2]=i[2]+s[2]*o}return!0}function mt(t,e,n){const o=ot(e,n);if(!X(t,o,b))return[];const{origin:r,direction:i}=o,{t0:s,t1:c}=b,u=d=>{const y=h();return Q(y,r,i,d),L(t,y,y)};return Math.abs(s-c)<W()?[u(s)]:[u(s),u(c)]}const b={t0:0,t1:0};function X(t,e,n){const{origin:o,direction:r}=e,i=$t;i[0]=o[0]-t[0],i[1]=o[1]-t[1],i[2]=o[2]-t[2];const s=r[0]*r[0]+r[1]*r[1]+r[2]*r[2];if(s===0)return!1;const c=2*(r[0]*i[0]+r[1]*i[1]+r[2]*i[2]),u=c*c-4*s*(i[0]*i[0]+i[1]*i[1]+i[2]*i[2]-t[3]*t[3]);if(u<0)return!1;const d=Math.sqrt(u);return n.t0=(-c-d)/(2*s),n.t1=(-c+d)/(2*s),!0}const $t=h();function Mt(t,e){return M(t,e,null)}function yt(t,e,n){if(M(t,e,n))return n;const o=Y(t,e,f.get());return m(n,e.origin,l(f.get(),e.direction,C(e.origin,o)/a(e.direction))),n}function Y(t,e,n){const o=f.get(),r=nt.get();P(o,e.origin,e.direction);const i=$(t);P(n,o,e.origin),l(n,n,1/a(n)*i);const s=Z(t,e.origin),c=et(e.origin,n);return B(r,c+s,o),D(n,n,r),n}function St(t,e,n){return M(t,e,n)?n:(rt(e,t,n),L(t,n,n))}function L(t,e,n){const o=g(f.get(),e,t),r=l(f.get(),o,t[3]/a(o));return m(n,r,t)}function xt(t,e){const n=g(f.get(),e,t),o=F(n),r=t[3]*t[3];return Math.sqrt(Math.abs(o-r))}function Z(t,e){const n=g(f.get(),e,t),o=a(n),r=$(t),i=r+Math.abs(r-o);return z(r/i)}const S=h();function k(t,e,n,o){const r=g(S,e,t);switch(n){case p.X:{const i=R(r,S)[2];return _(o,-Math.sin(i),Math.cos(i),0)}case p.Y:{const i=R(r,S),s=i[1],c=i[2],u=Math.sin(s);return _(o,-u*Math.cos(c),-u*Math.sin(c),Math.cos(s))}case p.Z:return G(o,r);default:return}}function J(t,e){const n=g(q,e,t);return a(n)-t[3]}function qt(t,e,n,o){const r=J(t,e),i=k(t,e,p.Z,q),s=l(q,i,n-r);return m(o,e,s)}function At(t,e){const n=H(t,e),o=$(t);return n<=o*o}function Lt(t,e,n=E()){const o=C(t,e),r=t[3],i=e[3];return o+i<r?(x(n,t),n):o+r<i?(x(n,e),n):(I(n,t,e,(o+i-r)/(2*o)),n[3]=(o+r+i)/2,n)}const q=h(),Ot=A();Object.freeze(Object.defineProperty({__proto__:null,NullSphere:st,altitudeAt:J,angleToSilhouette:Z,axisAt:k,clear:gt,closestPoint:St,closestPointOnSilhouette:Y,containsPoint:At,copy:V,create:A,distanceToSilhouette:xt,elevate:pt,equals:ut,exactEquals:ct,fromCenterAndRadius:at,fromRadius:ht,fromValues:dt,getCenter:lt,getRadius:$,intersectLine:mt,intersectRay:M,intersectRayClosestSilhouette:yt,intersectsRay:Mt,projectPoint:L,setAltitudeAt:qt,setExtent:bt,tmpSphere:Ot,union:Lt,wrap:ft},Symbol.toStringTag,{value:"Module"}));export{Mt as I,V as O,$ as V,lt as Z,N as d,wt as p,At as s,A as w};
