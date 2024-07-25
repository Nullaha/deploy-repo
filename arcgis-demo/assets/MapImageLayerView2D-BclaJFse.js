import{j as r,y as a,eD as g,k as m,eE as l,c as d,b as u,g as c,q as y}from"./index-DSZyN7qH.js";import"./index-DYYch56J.js";import{a as f}from"./BitmapContainer-DLkQvKOE.js";import{m as x,u as w}from"./LayerView-BwebqHvx.js";import{$ as _}from"./GraphicsView2D-BbuaEo9k.js";import{h as v}from"./HighlightGraphicContainer-CzDZHijn.js";import{v as H}from"./ExportStrategy-iqALDboI.js";import{i as I}from"./RefreshableLayerView-CLbXWWvP.js";import{U,r as V}from"./drapedUtils-ne_5QDz9.js";import"./WGLContainer-CH4IpOoI.js";import"./LabelMetric-DSa658FL.js";import"./Texture-Bqx2wzNM.js";import"./Program-DdVPCDRH.js";import"./ProgramTemplate-B21HR47A.js";import"./Container-C0UeY4Z5.js";import"./highlightReasons-yoxTPAvW.js";import"./config-MDUrh2eL.js";import"./earcut-nF7_mg1s.js";import"./UpdateTracking2D-BscP2HzM.js";import"./TurboLine-C_sxAU6s.js";import"./Rect-CUzevAry.js";import"./BindType-BmZEZMMh.js";import"./Util-BXtGPyQa.js";import"./constants-D5zmR9t2.js";import"./AttributeStore-HIum4cRi.js";import"./TimeOnly-V9OLRT9L.js";import"./timeSupport-D5x1kd1_.js";import"./json-Wa8cmqdu.js";import"./FeatureCommandQueue-D7O2ocr-.js";import"./normalizeUtilsSync-D_jkmj1o.js";import"./AGraphicContainer-DsYK9cId.js";import"./TechniqueInstance-CPiPeQs2.js";import"./TileContainer-CzOVDmSh.js";import"./vec3f32-nZdmKIgz.js";import"./Bitmap-D3N2Gnyo.js";import"./popupUtils-Cwi138ED.js";const P=t=>{let e=class extends t{initialize(){this.exportImageParameters=new l({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get floors(){var i;return((i=this.view)==null?void 0:i.floors)??null}get exportImageVersion(){var i;return(i=this.exportImageParameters)==null||i.commitProperty("version"),this.commitProperty("timeExtent"),this.commitProperty("floors"),(this._get("exportImageVersion")||0)+1}canResume(){var i;return!!super.canResume()&&!((i=this.timeExtent)!=null&&i.isEmpty)}};return r([a()],e.prototype,"exportImageParameters",void 0),r([a({readOnly:!0})],e.prototype,"floors",null),r([a({readOnly:!0})],e.prototype,"exportImageVersion",null),r([a()],e.prototype,"layer",void 0),r([a()],e.prototype,"suspended",void 0),r([a(g)],e.prototype,"timeExtent",void 0),e=r([m("esri.views.layers.MapImageLayerView")],e),e};let o=class extends P(I(x(w))){constructor(){super(...arguments),this._highlightGraphics=new d,this._updateHash=""}fetchPopupFeaturesAtLocation(t,e){return this._popupHighlightHelper.fetchPopupFeaturesAtLocation(t,e)}update(t){const e=`${this.exportImageVersion}/${t.state.id}/${t.pixelRatio}/${t.stationary}`;this._updateHash!==e&&(this._updateHash=e,this.strategy.update(t).catch(i=>{u(i)||c.getLogger(this).error(i)}),t.stationary&&this._popupHighlightHelper.updateHighlightedFeatures(t.state.resolution)),this._highlightView.processUpdate(t)}attach(){const{imageMaxWidth:t,imageMaxHeight:e,version:i}=this.layer,s=i>=10.3,n=i>=10;this._bitmapContainer=new f,this.container.addChild(this._bitmapContainer),this._highlightView=new _({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new v(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1}),this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new U({createFetchPopupFeaturesQueryGeometry:(p,h)=>V(p,h,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(p,h)=>{this._highlightView.graphicUpdateHandler({graphic:p,property:h})},layerView:this,updatingHandles:this._updatingHandles}),this.strategy=new H({container:this._bitmapContainer,fetchSource:this.fetchImageBitmap.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:t,imageMaxHeight:e,imageRotationSupported:s,imageNormalizationSupported:n,hidpi:!0}),this.addAttachHandles(y(()=>this.exportImageVersion,()=>this.requestUpdate())),this.requestUpdate()}detach(){this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren(),this._highlightView.destroy(),this._popupHighlightHelper.destroy()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}async doRefresh(){this._updateHash="",this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,e,i,s){return this.layer.fetchImage(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...s})}fetchImageBitmap(t,e,i,s){return this.layer.fetchImageBitmap(t,e,i,{timeExtent:this.timeExtent,floors:this.floors,...s})}highlight(t){return this._popupHighlightHelper.highlight(t)}};r([a()],o.prototype,"strategy",void 0),r([a()],o.prototype,"updating",void 0),o=r([m("esri.views.2d.layers.MapImageLayerView2D")],o);const mt=o;export{mt as default};
