import{j as i,k as s}from"./index-DSZyN7qH.js";import"./index-DYYch56J.js";import{E as a,a as h,R as o}from"./Container-C0UeY4Z5.js";import{i as n}from"./AGraphicContainer-DsYK9cId.js";let t=class extends n{get hasHighlight(){return this.children.some(e=>e.hasData)}renderChildren(e){this.attributeView.update(),e.drawPhase===a.HIGHLIGHT&&this.children.some(r=>r.hasData)&&(super.renderChildren(e),e.context.setColorMask(!0,!0,!0,!0),h(e,!0,r=>{this._renderChildren(r,o.All)}))}};t=i([s("esri.views.2d.layers.support.HighlightGraphicContainer")],t);const c=t;export{c as h};
