import{V as n,j as r,y as a,k as o}from"./index-DSZyN7qH.js";import"./index-DYYch56J.js";import{m as s,u as l}from"./LayerView-BwebqHvx.js";import"./Container-C0UeY4Z5.js";import"./highlightReasons-yoxTPAvW.js";import"./Texture-Bqx2wzNM.js";let i=class extends s(l){constructor(){super(...arguments),this.layerViews=new n}get dynamicGroupLayerView(){return this.layerViews.find(e=>{var t;return e.layer===((t=this.layer)==null?void 0:t.dynamicGroupLayer)})}get footprintLayerView(){return this.layerViews.find(e=>{var t;return e.layer===((t=this.layer)==null?void 0:t.footprintLayer)})}update(e){}moveStart(){}viewChange(){}moveEnd(){}attach(){this.addAttachHandles([this._updatingHandles.addOnCollectionChange(()=>this.layerViews,()=>this._updateStageChildren(),{initial:!0})])}detach(){this.container.removeAllChildren()}isUpdating(){return this.layerViews.some(e=>e.updating)}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((e,t)=>this.container.addChildAt(e.container,t))}};r([a()],i.prototype,"dynamicGroupLayerView",null),r([a()],i.prototype,"footprintLayerView",null),r([a()],i.prototype,"layerViews",void 0),i=r([o("esri.views.2d.layers.CatalogLayerView2D")],i);const c=i;export{c as default};
