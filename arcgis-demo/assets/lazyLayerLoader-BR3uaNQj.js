const __vite__fileDeps=["assets/BingMapsLayer-y1oAq2Dg.js","assets/index-C1NKuwLF.js","assets/index-BjTlY0bk.js","assets/index-C6eXeB4g.css","assets/index-CDH0bD0d.css","assets/BuildingSceneLayer-CGGyrZ-i.js","assets/capabilities-DXWddQzh.js","assets/SceneService-CJX-BZD0.js","assets/originUtils-D69mHv66.js","assets/multiOriginJSONSupportUtils-C0wm8_Yw.js","assets/resourceUtils-j_9BYIKU.js","assets/resourceUtils-DsZ0xIj1.js","assets/saveAPIKeyUtils-C3ozKd35.js","assets/saveUtils-JEY1io2c.js","assets/I3SLayerDefinitions-z00rPhIG.js","assets/I3SUtil-DKubxOoJ.js","assets/mat4f64-CSKppSlJ.js","assets/computeTranslationToOriginAndRotation-DeXY_nVM.js","assets/sphere-7vVIwzkP.js","assets/ObjectStack-CNc0t88E.js","assets/plane-CpqttnyO.js","assets/mat3f64-q3fE-ZOt.js","assets/quatf64-Bdb9ZJJK.js","assets/I3SBinaryReader-B2VUFqn-.js","assets/VertexAttribute-BlT9lbVY.js","assets/symbolColorUtils-4X-sDlO9.js","assets/orientedBoundingBox-DzpYoWth.js","assets/quat-CUcAnZxl.js","assets/popupUtils-epfn8GkE.js","assets/associatedFeatureServiceUtils-BYGwjQYA.js","assets/elevationInfoUtils-DPdfIa_T.js","assets/CatalogLayer-v5MdFtZV.js","assets/utils-CO-9K-CO.js","assets/FeatureLayerSource-DK3M3M1y.js","assets/meshVertexSpaceUtils-Cy9y84Qn.js","assets/MeshLocalVertexSpace-DQm3qqKL.js","assets/vec3-BTR3Vinm.js","assets/External-CDdDVOIR.js","assets/editingSupport-Cv5QQDAq.js","assets/clientSideDefaults-C_URn4L3.js","assets/QueryEngineCapabilities-CTDe3LlQ.js","assets/CSVLayer-D5owOKsT.js","assets/DimensionLayer-CNnJsB4q.js","assets/Analysis-bl1FnRB6.js","assets/ElevationLayer-DbgMWXA6.js","assets/GeoJSONLayer-LUPW3yi8.js","assets/GeoRSSLayer-pMqmKh-4.js","assets/GroupLayer-DgQlkT1v.js","assets/ImageryTileLayer-D6VrfIvC.js","assets/RawBlockCache-DJKhqYC6.js","assets/rasterProjectionHelper-DcaJbaTa.js","assets/utils-DrVre4Ak.js","assets/IntegratedMeshLayer-B1REHEEL.js","assets/persistable-m_vv3fvj.js","assets/resourceExtension-CY8T4IHX.js","assets/KMLLayer-w6vo374I.js","assets/kmlUtils-C-xTir2i.js","assets/LineOfSightLayer-QTT3z-SP.js","assets/LinkChartLayer-CxJ-LpCn.js","assets/geohashUtils-BQM9aO-2.js","assets/timeSupport-CWeci6hA.js","assets/json-Wa8cmqdu.js","assets/knowledgeGraphService-BqS2QvJu.js","assets/Relationship-BZNLSCLA.js","assets/FeatureStore-bY-CDqlI.js","assets/BoundsStore-o9xZxK_R.js","assets/PooledRBush-CiMXY61O.js","assets/QueryEngine-BPt41YlO.js","assets/WhereClause-BW50nlff.js","assets/TimeOnly-CFzDADzw.js","assets/utils-CsRnBHru.js","assets/utils-B_k5HP3A.js","assets/RenderState-DaVlEYWY.js","assets/MapNotesLayer-C2jafe5e.js","assets/GraphicsLayer-Dr1lFnCj.js","assets/objectIdUtils-4dd1rf9p.js","assets/MediaLayer-C28SMc-0.js","assets/imageUtils-DsqCgqGc.js","assets/perspectiveUtils-B8lXOio1.js","assets/normalizeUtilsSync-utcS0qMZ.js","assets/OGCFeatureLayer-DUHchf0g.js","assets/ogcFeatureUtils-Bi2UkEwR.js","assets/geojson-DcylSASu.js","assets/date-M6n_RqpC.js","assets/sourceUtils-CNrsyQSj.js","assets/OpenStreetMapLayer-BQOUwUSR.js","assets/OrientedImageryLayer-CnCmvAFD.js","assets/PointCloudLayer-CA5_DDTE.js","assets/PointCloudUniqueValueRenderer-eyJo2XfA.js","assets/RouteLayer-B0iKKeCw.js","assets/Stop-CGAH7To0.js","assets/SceneLayer-BzBVSzVe.js","assets/Mesh-BOa8mnBj.js","assets/georeference-BoB0qx22.js","assets/DoubleArray-D-Nn2-_E.js","assets/BufferView-CTr3rH8Q.js","assets/earcut-Dkd1ggxQ.js","assets/Indices-B16EIPrk.js","assets/deduplicate-CSvCQ_wT.js","assets/triangle-Cal784MJ.js","assets/Util-LirdS_-H.js","assets/lineSegment-Cz5KbMZv.js","assets/basicInterfaces-GbxEOYtk.js","assets/uploadAssetErrors-B48Mw5aC.js","assets/StreamLayer-ByzUnAj7.js","assets/SubtypeGroupLayer-C2SP1THp.js","assets/IntegratedMesh3DTilesLayer-BPFbMY1I.js","assets/UnknownLayer-BpfPpUCS.js","assets/UnsupportedLayer-DNwv0U-Y.js","assets/VoxelLayer-kRSNJHv9.js","assets/WFSLayer-Da5PlkIB.js","assets/wfsUtils-wcl_1Ems.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{T as u}from"./index-C1NKuwLF.js";import{_ as a}from"./index-BjTlY0bk.js";async function d(t,_){const{data:e}=await u(t,{responseType:"json",query:{f:"json",..._==null?void 0:_.customParameters,token:_==null?void 0:_.apiKey}});return e}const n={BingMapsLayer:async()=>(await a(async()=>{const{default:t}=await import("./BingMapsLayer-y1oAq2Dg.js");return{default:t}},__vite__mapDeps([0,1,2,3,4]))).default,BuildingSceneLayer:async()=>(await a(async()=>{const{default:t}=await import("./BuildingSceneLayer-CGGyrZ-i.js");return{default:t}},__vite__mapDeps([5,1,2,3,4,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]))).default,CatalogLayer:async()=>(await a(async()=>{const{default:t}=await import("./CatalogLayer-v5MdFtZV.js");return{default:t}},__vite__mapDeps([31,1,2,3,4,32,33,34,35,36,37,38,39,40]))).default,CSVLayer:async()=>(await a(async()=>{const{default:t}=await import("./CSVLayer-D5owOKsT.js");return{default:t}},__vite__mapDeps([41,1,2,3,4,39,40]))).default,DimensionLayer:async()=>(await a(async()=>{const{default:t}=await import("./DimensionLayer-CNnJsB4q.js");return{default:t}},__vite__mapDeps([42,1,2,3,4,43]))).default,ElevationLayer:async()=>(await a(async()=>{const{default:t}=await import("./ElevationLayer-DbgMWXA6.js");return{default:t}},__vite__mapDeps([44,2,3,1,4]))).default,FeatureLayer:async()=>(await a(async()=>{const{default:t}=await import("./index-C1NKuwLF.js").then(_=>_.qi);return{default:t}},__vite__mapDeps([1,2,3,4]))).default,GeoJSONLayer:async()=>(await a(async()=>{const{default:t}=await import("./GeoJSONLayer-LUPW3yi8.js");return{default:t}},__vite__mapDeps([45,2,3,1,4,39,40]))).default,GeoRSSLayer:async()=>(await a(async()=>{const{default:t}=await import("./GeoRSSLayer-pMqmKh-4.js");return{default:t}},__vite__mapDeps([46,1,2,3,4]))).default,GroupLayer:async()=>(await a(async()=>{const{default:t}=await import("./GroupLayer-DgQlkT1v.js");return{default:t}},__vite__mapDeps([47,2,3,1,4,13]))).default,ImageryLayer:async()=>(await a(async()=>{const{default:t}=await import("./index-C1NKuwLF.js").then(_=>_.qh);return{default:t}},__vite__mapDeps([1,2,3,4]))).default,ImageryTileLayer:async()=>(await a(async()=>{const{default:t}=await import("./ImageryTileLayer-D6VrfIvC.js");return{default:t}},__vite__mapDeps([48,2,3,1,4,49,50,51]))).default,IntegratedMeshLayer:async()=>(await a(async()=>{const{default:t}=await import("./IntegratedMeshLayer-B1REHEEL.js");return{default:t}},__vite__mapDeps([52,1,2,3,4,53,9,54,7,8,10,11,12,13,14,30]))).default,KMLLayer:async()=>(await a(async()=>{const{default:t}=await import("./KMLLayer-w6vo374I.js");return{default:t}},__vite__mapDeps([55,1,2,3,4,56]))).default,LineOfSightLayer:async()=>(await a(async()=>{const{default:t}=await import("./LineOfSightLayer-QTT3z-SP.js");return{default:t}},__vite__mapDeps([57,1,2,3,4,43,53,9,54,30]))).default,LinkChartLayer:async()=>(await a(async()=>{const{default:t}=await import("./LinkChartLayer-CxJ-LpCn.js");return{default:t}},__vite__mapDeps([58,1,2,3,4,59,60,61,62,63,64,65,66,67,68,69,40,70,71,32,72,39]))).default,MapImageLayer:async()=>(await a(async()=>{const{default:t}=await import("./index-C1NKuwLF.js").then(_=>_.qf);return{default:t}},__vite__mapDeps([1,2,3,4]))).default,MapNotesLayer:async()=>(await a(async()=>{const{default:t}=await import("./MapNotesLayer-C2jafe5e.js");return{default:t}},__vite__mapDeps([73,1,2,3,4,74,75]))).default,MediaLayer:async()=>(await a(async()=>{const{default:t}=await import("./MediaLayer-C28SMc-0.js");return{default:t}},__vite__mapDeps([76,2,3,1,4,77,78,79,21,54,65,66]))).default,OGCFeatureLayer:async()=>(await a(async()=>{const{default:t}=await import("./OGCFeatureLayer-DUHchf0g.js");return{default:t}},__vite__mapDeps([80,1,2,3,4,81,82,83,39,40,84]))).default,OpenStreetMapLayer:async()=>(await a(async()=>{const{default:t}=await import("./OpenStreetMapLayer-BQOUwUSR.js");return{default:t}},__vite__mapDeps([85,1,2,3,4]))).default,OrientedImageryLayer:async()=>(await a(async()=>{const{default:t}=await import("./OrientedImageryLayer-CnCmvAFD.js");return{default:t}},__vite__mapDeps([86,1,2,3,4]))).default,PointCloudLayer:async()=>(await a(async()=>{const{default:t}=await import("./PointCloudLayer-CA5_DDTE.js");return{default:t}},__vite__mapDeps([87,1,2,3,4,7,8,9,10,11,12,13,88,30]))).default,RouteLayer:async()=>(await a(async()=>{const{default:t}=await import("./RouteLayer-B0iKKeCw.js");return{default:t}},__vite__mapDeps([89,1,2,3,4,8,9,90]))).default,SceneLayer:async()=>(await a(async()=>{const{default:t}=await import("./SceneLayer-BzBVSzVe.js");return{default:t}},__vite__mapDeps([91,2,3,1,4,92,93,21,16,17,94,27,22,34,35,36,95,77,96,97,98,20,99,100,19,101,102,24,37,103,7,8,9,10,11,12,13,6,29,14,53,54,30,15,18,23,25,26,28]))).default,StreamLayer:async()=>(await a(async()=>{const{default:t}=await import("./StreamLayer-ByzUnAj7.js");return{default:t}},__vite__mapDeps([104,2,3,1,4]))).default,SubtypeGroupLayer:async()=>(await a(async()=>{const{default:t}=await import("./SubtypeGroupLayer-C2SP1THp.js");return{default:t}},__vite__mapDeps([105,2,3,1,4]))).default,TileLayer:async()=>(await a(async()=>{const{default:t}=await import("./index-C1NKuwLF.js").then(_=>_.qg);return{default:t}},__vite__mapDeps([1,2,3,4]))).default,IntegratedMesh3DTilesLayer:async()=>(await a(async()=>{const{default:t}=await import("./IntegratedMesh3DTilesLayer-BPFbMY1I.js");return{default:t}},__vite__mapDeps([106,1,2,3,4,30]))).default,UnknownLayer:async()=>(await a(async()=>{const{default:t}=await import("./UnknownLayer-BpfPpUCS.js");return{default:t}},__vite__mapDeps([107,1,2,3,4]))).default,UnsupportedLayer:async()=>(await a(async()=>{const{default:t}=await import("./UnsupportedLayer-DNwv0U-Y.js");return{default:t}},__vite__mapDeps([108,1,2,3,4]))).default,VectorTileLayer:async()=>(await a(async()=>{const{default:t}=await import("./index-C1NKuwLF.js").then(_=>_.qd);return{default:t}},__vite__mapDeps([1,2,3,4]))).default,VoxelLayer:async()=>(await a(async()=>{const{default:t}=await import("./VoxelLayer-kRSNJHv9.js");return{default:t}},__vite__mapDeps([109,1,2,3,4,7,8,9,10,11,12,13,53,54,27,21,22]))).default,WFSLayer:async()=>(await a(async()=>{const{default:t}=await import("./WFSLayer-Da5PlkIB.js");return{default:t}},__vite__mapDeps([110,1,2,3,4,39,40,111,82,83]))).default,WMSLayer:async()=>(await a(async()=>{const{default:t}=await import("./index-C1NKuwLF.js").then(_=>_.qa);return{default:t}},__vite__mapDeps([1,2,3,4]))).default,WMTSLayer:async()=>(await a(async()=>{const{default:t}=await import("./index-C1NKuwLF.js").then(_=>_.qc);return{default:t}},__vite__mapDeps([1,2,3,4]))).default,WebTileLayer:async()=>(await a(async()=>{const{default:t}=await import("./index-C1NKuwLF.js").then(_=>_.qb);return{default:t}},__vite__mapDeps([1,2,3,4]))).default};export{n as a,d as t};
