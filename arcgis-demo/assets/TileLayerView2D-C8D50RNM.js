import{c as w,h as y,m as I,r as V,e as v,G as H,b as o,d as m,g as T,j as n,y as g,k as q}from"./index-DSZyN7qH.js";import"./index-DYYch56J.js";import"./UpdateTracking2D-BscP2HzM.js";import"./floatRGBA-BLP3oShN.js";import"./Container-C0UeY4Z5.js";import"./WGLContainer-CH4IpOoI.js";import"./Texture-Bqx2wzNM.js";import"./Program-DdVPCDRH.js";import"./LabelMetric-DSa658FL.js";import"./MagnifierPrograms-CSY7-a3Q.js";import"./FeatureCommandQueue-D7O2ocr-.js";import"./OrderIndependentTransparency-kKykURw3.js";import"./testSVGPremultipliedAlpha-B8LduPOi.js";import{$ as U}from"./GraphicsView2D-BbuaEo9k.js";import"./earcut-nF7_mg1s.js";import"./vec3f32-nZdmKIgz.js";import{r as b,o as f,n as d}from"./imageUtils-CmlgQk0A.js";import{m as S,u as C}from"./LayerView-BwebqHvx.js";import{h as Q}from"./HighlightGraphicContainer-CzDZHijn.js";import{i as $}from"./RefreshableLayerView-CLbXWWvP.js";import{S as k,U as L,r as P}from"./drapedUtils-ne_5QDz9.js";import"./TurboLine-C_sxAU6s.js";import"./Rect-CUzevAry.js";import"./BindType-BmZEZMMh.js";import"./Util-BXtGPyQa.js";import"./highlightReasons-yoxTPAvW.js";import"./constants-D5zmR9t2.js";import"./ProgramTemplate-B21HR47A.js";import"./config-MDUrh2eL.js";import"./CircularArray-DfLrgW_-.js";import"./AttributeStore-HIum4cRi.js";import"./TimeOnly-V9OLRT9L.js";import"./timeSupport-D5x1kd1_.js";import"./json-Wa8cmqdu.js";import"./basicInterfaces-GbxEOYtk.js";import"./normalizeUtilsSync-D_jkmj1o.js";import"./Bitmap-D3N2Gnyo.js";import"./TileContainer-CzOVDmSh.js";import"./AGraphicContainer-DsYK9cId.js";import"./TechniqueInstance-CPiPeQs2.js";import"./popupUtils-Cwi138ED.js";const F=[0,0];let a=class extends $(b(S(C))){constructor(){super(...arguments),this._fetchQueue=null,this._highlightGraphics=new w,this._highlightView=null,this._popupHighlightHelper=null,this._tileStrategy=null,this.layer=null}get resampling(){return!("resampling"in this.layer)||this.layer.resampling!==!1}get tilemapCache(){return"tilemapCache"in this.layer?this.layer.tilemapCache:null}update(e){var t;this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),(t=this._highlightView)==null||t.processUpdate(e)}attach(){const e="tileServers"in this.layer?this.layer.tileServers:null,t=this.tilemapCache;if(this._tileInfoView=new y(this.layer.tileInfo,this.layer.fullExtent,t==null?void 0:t.effectiveMinLOD,t==null?void 0:t.effectiveMaxLOD),this._fetchQueue=new I({tileInfoView:this._tileInfoView,concurrency:e&&10*e.length||10,process:(i,h)=>this.fetchTile(i,h)}),this._tileStrategy=new V({cachePolicy:"keep",resampling:this.resampling,acquireTile:i=>this.acquireTile(i),releaseTile:i=>this.releaseTile(i),tileInfoView:this._tileInfoView}),k(this,this.layer)){const i=this._highlightView=new U({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new Q(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1});this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new L({createFetchPopupFeaturesQueryGeometry:(h,s)=>P(h,s,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(h,s)=>{i.graphicUpdateHandler({graphic:h,property:s})},layerView:this,updatingHandles:this._updatingHandles})}this.requestUpdate(),this.addAttachHandles(this._updatingHandles.add(()=>this.resampling,()=>{this.doRefresh()})),super.attach()}detach(){var e,t;super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),(e=this._popupHighlightHelper)==null||e.destroy(),(t=this._highlightView)==null||t.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=this._popupHighlightHelper=null}async fetchPopupFeaturesAtLocation(e,t){return this._popupHighlightHelper?this._popupHighlightHelper.fetchPopupFeaturesAtLocation(e,t):[]}highlight(e){return this._popupHighlightHelper?this._popupHighlightHelper.highlight(e):v()}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(e){var t;return H((t=this.layer.tileInfo)==null?void 0:t.spatialReference,e)}async doRefresh(){if(this.attached){if(this.suspended)return this._tileStrategy.clear(),void this.requestUpdate();this._fetchQueue.reset(),this._tileStrategy.refresh(e=>this._updatingHandles.addPromise(this._enqueueTileFetch(e)))}}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(F,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._updatingHandles.addPromise(this._enqueueTileFetch(t)),this._bitmapView.addChild(t),this.requestUpdate(),t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",()=>e.destroy()),this.requestUpdate()}async fetchTile(e,t={}){const i=this.tilemapCache,{signal:h,resamplingLevel:s=0}=t;if(!i)try{return await this._fetchImage(e,h)}catch(r){if(!o(r)&&!this.resampling)return f(this._tileInfoView.tileInfo.size);if(s<3){const c=this._tileInfoView.getTileParentId(e.id);if(c){const u=new m(c),_=await this.fetchTile(u,{...t,resamplingLevel:s+1});return d(this._tileInfoView,_,u,e)}}throw r}const l=new m(0,0,0,0);let p;try{if(await i.fetchAvailabilityUpsample(e.level,e.row,e.col,l,{signal:h}),l.level!==e.level&&!this.resampling)return f(this._tileInfoView.tileInfo.size);p=await this._fetchImage(l,h)}catch(r){if(o(r))throw r;p=await this._fetchImage(e,h)}return this.resampling?d(this._tileInfoView,p,l,e):p}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",()=>this.requestUpdate())}catch(t){o(t)||T.getLogger(this).error(t)}this.requestUpdate()}}async _fetchImage(e,t){return this.layer.fetchImageBitmapTile(e.level,e.row,e.col,{signal:t})}};n([g()],a.prototype,"resampling",null),n([g()],a.prototype,"tilemapCache",null),a=n([q("esri.views.2d.layers.TileLayerView2D")],a);const He=a;export{He as default};
