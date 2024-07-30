
// 默认地图配置
const defaultConfig = [
  {
    id:'tianditu_vec_group',
    name:'天地图矢量',
    defaultShow: true,
    layers: [
      {
        id: 'tianditu_vec',
        name: '天地图矢量',
        type: 'wmts',
        // urlTemplate: "https://fxpc.mem.gov.cn/data_preparation/a12eadf6-1a57-43fe-9054-2e22277bd553/16a714c2-6a98-4ee1-9f25-213bcf49465e/wmts?service=wmts&request=gettile&version=1.0.0&layer=vec&style=default&tilematrixset=c&format=tiles&tilematrix={level}&tilerow={row}&tilecol={col}&geokey=2CA54B6D242305ABF3822EC38D121CD9",
        urlTemplate: "http://t0.tianditu.gov.cn/vec_c/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=c&FORMAT=tiles&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}&tk=1e0b6187f784ef55b86d8b0b9e95a354",
        subDomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"],
        tileInfoType: "tileInfoTDT",
        metaData: {
          loadNum: 0
      },
      }
    ]
  },
  {
    id: "tianditu_cva_group",
    name: "天地图矢量注记",
    layers: [
        {
            id: "tianditu_cva",
            name: "天地图矢量注记",
            type: "wmts",
            // urlTemplate: "https://fxpc.mem.gov.cn/data_preparation/a12eadf6-1a57-43fe-9054-2e22277bd553/0c2525f7-34ac-4f49-8d31-2788e99316f4/wmts?service=wmts&request=gettile&version=1.0.0&layer=cva&style=default&tilematrixset=c&format=tiles&tilematrix={level}&tilerow={row}&tilecol={col}&geokey=2CA54B6D242305ABF3822EC38D121CD9",
            urlTemplate: "http://t0.tianditu.gov.cn/cva_c/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=c&FORMAT=tiles&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}&tk=1e0b6187f784ef55b86d8b0b9e95a354",
            subDomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"],
            tileInfoType: "tileInfoTDT",
            metaData: {
                loadNum: 1
            },
        },
    ],
  },
  {
    id: "tianditu_img_group",
    name: "天地图影像",
    layers: [
        {
            id: "tianditu_img",
            name: "天地图影像",
            type: "wmts",
            // urlTemplate: "https://fxpc.mem.gov.cn/data_preparation/a12eadf6-1a57-43fe-9054-2e22277bd553/4eb4b664-5633-4ab3-b0fd-345829dd3a87/wmts?service=wmts&request=gettile&version=1.0.0&layer=img&style=default&tilematrixset=c&format=tiles&tilematrix={level}&tilerow={row}&tilecol={col}&geokey=2CA54B6D242305ABF3822EC38D121CD9",
            urlTemplate: "http://t0.tianditu.gov.cn/img_c/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=c&FORMAT=tiles&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}&tk=1e0b6187f784ef55b86d8b0b9e95a354",
            subDomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"],
            tileInfoType: "tileInfoTDT",
            metaData: {
                loadNum: 2
            },
        },
    ],
},
{
  id: "tianditu_cia_group",
  name: "天地图影像注记",
  layers: [
      {
          id: "tianditu_cia",
          name: "天地图影像注记",
          type: "wmts",
          // urlTemplate: "https://fxpc.mem.gov.cn/data_preparation/a12eadf6-1a57-43fe-9054-2e22277bd553/83e5b643-edc3-4118-ba04-2a9186606b42/wmts?service=wmts&request=gettile&version=1.0.0&layer=cia&style=default&tilematrixset=c&format=tiles&tilematrix={level}&tilerow={row}&tilecol={col}&geokey=2CA54B6D242305ABF3822EC38D121CD9",
          urlTemplate: "http://t0.tianditu.gov.cn/cia_c/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=c&FORMAT=tiles&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}&tk=1e0b6187f784ef55b86d8b0b9e95a354",
          subDomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"],
          tileInfoType: "tileInfoTDT",
          metaData: {
              loadNum: 3
          },
      },
  ],
}
]





window.baseLayerConfig = {
  baseLayers: defaultConfig,
}