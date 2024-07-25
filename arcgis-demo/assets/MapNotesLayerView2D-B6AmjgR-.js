import{B as m,V as f,e as c,q as a,P as o,M as w,j as y,k as _}from"./index-DSZyN7qH.js";import{q as V}from"./index-DYYch56J.js";import{t as v}from"./highlightReasons-yoxTPAvW.js";import{m as C,u as H}from"./LayerView-BwebqHvx.js";import{t as g}from"./GraphicContainer-MZgSZroS.js";import{$ as d}from"./GraphicsView2D-BbuaEo9k.js";import"./Container-C0UeY4Z5.js";import"./Texture-Bqx2wzNM.js";import"./AGraphicContainer-DsYK9cId.js";import"./TechniqueInstance-CPiPeQs2.js";import"./UpdateTracking2D-BscP2HzM.js";import"./TurboLine-C_sxAU6s.js";import"./earcut-nF7_mg1s.js";import"./Rect-CUzevAry.js";import"./LabelMetric-DSa658FL.js";import"./Program-DdVPCDRH.js";import"./BindType-BmZEZMMh.js";import"./Util-BXtGPyQa.js";import"./constants-D5zmR9t2.js";import"./TileContainer-CzOVDmSh.js";import"./WGLContainer-CH4IpOoI.js";import"./ProgramTemplate-B21HR47A.js";import"./config-MDUrh2eL.js";import"./FeatureCommandQueue-D7O2ocr-.js";import"./vec3f32-nZdmKIgz.js";import"./AttributeStore-HIum4cRi.js";import"./TimeOnly-V9OLRT9L.js";import"./timeSupport-D5x1kd1_.js";import"./json-Wa8cmqdu.js";import"./normalizeUtilsSync-D_jkmj1o.js";const u="sublayers",l="layerView";let n=class extends C(H){constructor(){super(...arguments),this._highlightIds=new Map}*graphicsViews(){this._graphicsViewsFeatureCollectionMap==null?this._graphicsViews==null?yield*[]:yield*this._graphicsViews:yield*this._graphicsViewsFeatureCollectionMap.keys()}async hitTest(i,t){return Array.from(this.graphicsViews(),e=>{const s=e.hitTest(i);if(this._graphicsViewsFeatureCollectionMap!=null){const h=this._graphicsViewsFeatureCollectionMap.get(e);for(const r of s)!r.popupTemplate&&h.popupTemplate&&(r.popupTemplate=h.popupTemplate),r.sourceLayer=r.layer=this.layer}return s}).flat().map(e=>({type:"graphic",graphic:e,layer:this.layer,mapPoint:i}))}highlight(i){let t;typeof i=="number"?t=[i]:i instanceof m?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(s=>s&&s.uid):f.isCollection(i)&&(t=i.map(s=>s&&s.uid).toArray());const e=t==null?void 0:t.filter(V);return e!=null&&e.length?(this._addHighlight(e),c(()=>this._removeHighlight(e))):c()}update(i){for(const t of this.graphicsViews())t.processUpdate(i)}attach(){const i=this.view,t=()=>this.requestUpdate(),e=this.layer.featureCollections;if(e!=null&&e.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const s of e){const h=new g(this.view.featuresTilingScheme),r=new d({view:i,graphics:s.source,renderer:s.renderer,requestUpdateCallback:t,container:h});this._graphicsViewsFeatureCollectionMap.set(r,s),this.container.addChild(r.container),this.addHandles([a(()=>s.visible,p=>r.container.visible=p,o),a(()=>r.updating,()=>this.notifyChange("updating"),o)],l)}this._updateHighlight()}else this.layer.sublayers!=null&&this.addHandles(w(()=>this.layer.sublayers,"change",()=>this._createGraphicsViews(),{onListenerAdd:()=>this._createGraphicsViews(),onListenerRemove:()=>this._destroyGraphicsViews()}),u)}detach(){this._destroyGraphicsViews(),this.removeHandles(u)}moveStart(){}moveEnd(){}viewChange(){for(const i of this.graphicsViews())i.viewChange()}isUpdating(){for(const i of this.graphicsViews())if(i.updating)return!0;return!1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.removeHandles(l);for(const i of this.graphicsViews())i.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}_createGraphicsViews(){if(this._destroyGraphicsViews(),this.layer.sublayers==null)return;const i=[],t=this.view,e=()=>this.requestUpdate();for(const s of this.layer.sublayers){const h=new g(this.view.featuresTilingScheme);h.fadeTransitionEnabled=!0;const r=new d({view:t,graphics:s.graphics,requestUpdateCallback:e,container:h});this.addHandles([s.on("graphic-update",r.graphicUpdateHandler),a(()=>s.visible,p=>r.container.visible=p,o),a(()=>r.updating,()=>this.notifyChange("updating"),o)],l),this.container.addChild(r.container),i.push(r)}this._graphicsViews=i,this._updateHighlight()}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;e===0?this._highlightIds.delete(t):this._highlightIds.set(t,e)}this._updateHighlight()}_updateHighlight(){const i=Array.from(this._highlightIds.keys()),t=v("highlight");for(const e of this.graphicsViews())e.setHighlight(i.map(s=>({objectId:s,highlightFlags:t})))}};n=y([_("esri.views.2d.layers.MapNotesLayerView2D")],n);const ii=n;export{ii as default};
