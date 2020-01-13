import { request } from "./request";

export function getHomeMultiData() {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type, page) {
  // return request({
  //   url: '/home/data',
  //   params: {
  //     type,
  //     page
  //   }
  // })

  return {
    "skulist": {
      "518669": {
        "name": "蓝月亮深层洁净洗衣液 自然清香(瓶装 3kg)",
        "price1": {
          "value": "￥49.00",
          "key": "零售价"
        },
        "price2": {
          "value": "￥49.00",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥49.00",
          "key": "零售价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/362419/206121/206128/206160/518669/518669_1_phone580_4880.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/362419/206121/206128/206160/518669/518669_1_phone640_4880.jpg",
        "product_id": "518669",
        "number": "0",
        "product_type": "1",
        "product_fresh": false,
        "sellable": false,
        "promotion_tag": [],
        "category_dsp": ["蓝月亮", "蓝月亮深层洁净洗衣液 自然清香(瓶装 3kg)"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "10318249": {
        "name": "时怡 中粮优选泰国芒果干（100g）*3 【新旧包装随机发货】",
        "price1": {
          "value": "￥65.70",
          "key": "零售价"
        },
        "price2": {
          "value": "￥65.70",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥65.70",
          "key": "零售价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/210640/210642/210644/10318249/10318249_2_phone580_8921.jpg",
        "largePic": "http://pic.womai.com/upload/601/604/439208/10318249/10318249_1_phone640_9389.jpg",
        "product_id": "10318249",
        "number": "0",
        "product_type": "1",
        "product_fresh": false,
        "sellable": false,
        "promotion_tag": [],
        "category_dsp": ["臻品尊享", "北京", "休闲健康"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "546876": {
        "name": "【2019年新榨】中粮初萃 非转基因古法小榨浓香菜籽油5L ",
        "price1": {
          "value": "￥69.90",
          "key": "团购价"
        },
        "price2": {
          "value": "￥96.00",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥69.90",
          "key": "团购价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/606/6200/6201/6209/546876/546876_1_phone580_6285.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/606/6200/6201/6209/546876/546876_1_phone640_6285.jpg",
        "product_id": "546876",
        "number": "188",
        "product_type": "3",
        "product_fresh": false,
        "sellable": true,
        "promotion_tag": ["赠"],
        "category_dsp": ["食品", "粮油", "食用油"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "13",
        "hasVideo": false,
        "label": ""
      },
      "597846": {
        "name": "科尔沁原味风干豪情牛肉干400g",
        "price1": {
          "value": "￥99.00",
          "key": "零售价"
        },
        "price2": {
          "value": "￥99.00",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥99.00",
          "key": "零售价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/606/6060/6061/6072/597846/597846_1_phone580_483.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/606/6060/6061/6072/597846/597846_1_phone640_483.jpg",
        "product_id": "597846",
        "number": "0",
        "product_type": "1",
        "product_fresh": false,
        "sellable": false,
        "promotion_tag": [],
        "category_dsp": ["食品", "休闲食品", "休闲零食"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "502074": {
        "name": "富昌无根肉厚黑木耳228g",
        "price1": {
          "value": "￥29.90",
          "key": "团购价"
        },
        "price2": {
          "value": "￥49.00",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥29.90",
          "key": "团购价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/606/7300/502074/502074_1_phone580_6829.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/606/7300/502074/502074_1_phone640_6829.jpg",
        "product_id": "502074",
        "number": "215",
        "product_type": "3",
        "product_fresh": false,
        "sellable": true,
        "promotion_tag": [],
        "category_dsp": ["食品", "干货"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "578325": {
        "name": "红星二锅头蓝瓶八年陈酿43度 500ml（新老包装随机发货）",
        "price1": {
          "value": "￥26.00",
          "key": "抢购价"
        },
        "price2": {
          "value": "￥28.00",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥26.00",
          "key": "抢购价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/606/6800/6801/578325/578325_0_phone580_6064.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/606/6800/6801/578325/578325_0_phone640_6064.jpg",
        "product_id": "578325",
        "number": "22",
        "product_type": "2",
        "product_fresh": false,
        "sellable": true,
        "promotion_tag": [],
        "category_dsp": ["食品", "酒类（废弃）", "白酒（废弃）"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "611085": {
        "name": "【中粮海外直采】big bang嗨棒含气瓜拉纳复合果味饮料250ml",
        "price1": {
          "value": "￥6.90",
          "key": "零售价"
        },
        "price2": {
          "value": "￥6.90",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥6.90",
          "key": "零售价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/606/6700/6704/611085/611085_1_phone580_5856.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/606/6700/6704/611085/611085_1_phone640_5856.jpg",
        "product_id": "611085",
        "number": "0",
        "product_type": "1",
        "product_fresh": false,
        "sellable": false,
        "promotion_tag": [],
        "category_dsp": ["食品", "果汁饮料", "功能饮料"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "586795": {
        "name": "【正品保税】德国BRITA碧然德滤水壶蓝色3.5L",
        "price1": {
          "value": "￥168.00",
          "key": "零售价"
        },
        "price2": {
          "value": "￥168.00",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥168.00",
          "key": "零售价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/606/6590/218063/248245/586795/586795_1_phone580_3593.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/606/6590/218063/248245/586795/586795_1_phone640_3593.jpg",
        "product_id": "586795",
        "number": "55",
        "product_type": "1",
        "product_fresh": false,
        "sellable": false,
        "promotion_tag": [],
        "category_dsp": ["食品", "孕婴童", "喂养用品"],
        "sellerId": 992359,
        "sellerType": 4,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "519264": {
        "name": "燕京啤酒330ml*24（新老包装随机发货）",
        "price1": {
          "value": "￥63.00",
          "key": "团购价"
        },
        "price2": {
          "value": "￥75.00",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥63.00",
          "key": "团购价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/90900/212080/229040/231900/519264/519264_0_phone580_7250.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/90900/212080/229040/231900/519264/519264_0_phone640_7250.jpg",
        "product_id": "519264",
        "number": "358",
        "product_type": "3",
        "product_fresh": false,
        "sellable": true,
        "promotion_tag": [],
        "category_dsp": ["便利店", "酒水饮料", "啤酒"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "13",
        "hasVideo": false,
        "label": ""
      },
      "579045": {
        "name": "万年豚有机土猪猪肉肥肉馅 500g 袋装  饲养1年（肥7瘦3）",
        "price1": {
          "value": "￥42.80",
          "key": "零售价"
        },
        "price2": {
          "value": "￥42.80",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥42.80",
          "key": "零售价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/606/64306/280375/82402/219341/579045/579045_0_phone314_6017.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/606/64306/280375/82402/219341/579045/579045_0_phone640_6017.jpg",
        "product_id": "579045",
        "number": "0",
        "product_type": "1",
        "product_fresh": true,
        "sellable": false,
        "promotion_tag": [],
        "category_dsp": [],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "80471": {
        "name": "BAILEYS百利甜酒原味 750ml",
        "price1": {
          "value": "￥109.00",
          "key": "零售价"
        },
        "price2": {
          "value": "￥109.00",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥109.00",
          "key": "零售价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/606/6800/6804/78900/80471/80471_1_phone314_8900.JPG",
        "largePic": "http://pic.womai.com/upload/601/603/606/6800/6804/78900/80471/80471_1_phone640_8900.JPG",
        "product_id": "80471",
        "number": "0",
        "product_type": "2",
        "product_fresh": false,
        "sellable": false,
        "promotion_tag": [],
        "category_dsp": ["食品", "全球美食", "欧洲"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "565206": {
        "name": "【2019年新榨】中粮初萃 压榨一级浓香花生油5L",
        "price1": {
          "value": "￥99.90",
          "key": "团购价"
        },
        "price2": {
          "value": "￥156.00",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥99.90",
          "key": "团购价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/606/6200/6201/6206/565206/565206_0_phone580_6231.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/606/6200/6201/6206/565206/565206_0_phone640_6231.jpg",
        "product_id": "565206",
        "number": "288",
        "product_type": "3",
        "product_fresh": false,
        "sellable": true,
        "promotion_tag": ["赠"],
        "category_dsp": ["食品", "粮油", "食用油"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "13",
        "hasVideo": false,
        "label": ""
      },
      "599454": {
        "name": "【专仓直发包邮】炳记元福山西原味太谷饼70g*30",
        "price1": {
          "value": "￥42.90",
          "key": "抢购价"
        },
        "price2": {
          "value": "￥58.00",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥42.90",
          "key": "抢购价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/606/80300/80500/80504/599454/599454_1_phone580_2899.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/606/80300/80500/80504/599454/599454_1_phone640_2899.jpg",
        "product_id": "599454",
        "number": "3434",
        "product_type": "2",
        "product_fresh": false,
        "sellable": true,
        "promotion_tag": ["直送"],
        "category_dsp": ["食品", "味道中国", "华北"],
        "sellerId": 992608,
        "sellerType": 1,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "611221": {
        "name": "【正品保税】【有效期至2017年9月6日】澳大利亚即食免煮麦片早餐1.2kg",
        "price1": {
          "value": "￥65.00",
          "key": "零售价"
        },
        "price2": {
          "value": "￥65.00",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥65.00",
          "key": "零售价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/253820/611221/611221_1_phone580_1734.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/253820/611221/611221_1_phone640_1734.jpg",
        "product_id": "611221",
        "number": "0",
        "product_type": "1",
        "product_fresh": false,
        "sellable": false,
        "promotion_tag": [],
        "category_dsp": ["食品", "冲调品", "糊状冲调品"],
        "sellerId": 993146,
        "sellerType": 4,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "58520": {
        "name": "五粮液52度 500ml（新老包装  随机发货）",
        "price1": {
          "value": "￥1399.00",
          "key": "团购价"
        },
        "price2": {
          "value": "￥1399.00",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥1399.00",
          "key": "团购价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/606/6800/6801/58520/58520_0_phone580_3610.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/606/6800/6801/58520/58520_0_phone640_3610.jpg",
        "product_id": "58520",
        "number": "0",
        "product_type": "3",
        "product_fresh": false,
        "sellable": false,
        "promotion_tag": [],
        "category_dsp": ["食品", "酒类（废弃）", "白酒（废弃）"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "593769": {
        "name": "中粮初萃 河套雪花粉2.5kg",
        "price1": {
          "value": "￥40.00",
          "key": "零售价"
        },
        "price2": {
          "value": "￥40.00",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥40.00",
          "key": "零售价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/90900/216060/216061/593769/593769_1_phone314_6112.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/90900/216060/216061/593769/593769_1_phone640_6112.jpg",
        "product_id": "593769",
        "number": "0",
        "product_type": "1",
        "product_fresh": false,
        "sellable": false,
        "promotion_tag": [],
        "category_dsp": ["食品", "粮油", "面粉"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "603934": {
        "name": "中粮时怡牛肉干（五香味）",
        "price1": {
          "value": "￥20.90",
          "key": "零售价"
        },
        "price2": {
          "value": "￥20.90",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥20.90",
          "key": "零售价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/253820/603934/603934_1_phone580_7525.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/253820/603934/603934_1_phone640_9680.jpg",
        "product_id": "603934",
        "number": "0",
        "product_type": "2",
        "product_fresh": false,
        "sellable": false,
        "promotion_tag": [],
        "category_dsp": ["食品", "休闲食品", "休闲零食"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "11",
        "hasVideo": false,
        "label": ""
      },
      "571771": {
        "name": "owl猫头鹰3合1特浓咖啡800g",
        "price1": {
          "value": "￥48.80",
          "key": "零售价"
        },
        "price2": {
          "value": "￥48.80",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥48.80",
          "key": "零售价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/606/66102/201240/571771/571771_0_phone580_6903.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/606/66102/201240/571771/571771_0_phone640_6903.jpg",
        "product_id": "571771",
        "number": "0",
        "product_type": "1",
        "product_fresh": false,
        "sellable": false,
        "promotion_tag": [],
        "category_dsp": ["食品", "进口食品", "进口咖啡茶叶"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "10318263": {
        "name": "时怡中粮优选碧根果（袋装210g) *2 【新旧包装随机发货】",
        "price1": {
          "value": "￥79.80",
          "key": "零售价"
        },
        "price2": {
          "value": "￥79.80",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥79.80",
          "key": "零售价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/606/6060/6065/78704/10318263/10318263_0_phone580_4309.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/606/6060/6065/78704/10318263/10318263_0_phone640_4309.jpg",
        "product_id": "10318263",
        "number": "0",
        "product_type": "1",
        "product_fresh": false,
        "sellable": false,
        "promotion_tag": [],
        "category_dsp": ["食品", "休闲食品", "坚果炒货"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "602325": {
        "name": "中粮家佳康冷冻超值培根1kg 袋装",
        "price1": {
          "value": "￥65.00",
          "key": "零售价"
        },
        "price2": {
          "value": "￥65.00",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥65.00",
          "key": "零售价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/602/61010/602325/602325_20_phone580_3967.jpg",
        "largePic": "http://pic.womai.com/upload/601/602/61010/602325/602325_20_phone640_3967.jpg",
        "product_id": "602325",
        "number": "0",
        "product_type": "1",
        "product_fresh": true,
        "sellable": false,
        "promotion_tag": [],
        "category_dsp": ["食品", "生鲜食品", "肉类海鲜低温"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "13",
        "hasVideo": false,
        "label": ""
      },
      "10344642": {
        "name": "光明莫斯利安巴氏杀菌常温酸奶（原味）200g*6\r\n盒*2提",
        "price1": {
          "value": "￥92.00",
          "key": "零售价"
        },
        "price2": {
          "value": "￥92.00",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥92.00",
          "key": "零售价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/606/6600/6604/10344642/10344642_2_phone580_3386.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/606/6600/6604/10344642/10344642_1_phone640_4621.jpg",
        "product_id": "10344642",
        "number": "0",
        "product_type": "1",
        "product_fresh": false,
        "sellable": false,
        "promotion_tag": [],
        "category_dsp": ["食品", "奶制品", "酸奶"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "606506": {
        "name": "中粮初萃 古田银耳25g*4",
        "price1": {
          "value": "￥27.90",
          "key": "抢购价"
        },
        "price2": {
          "value": "￥42.00",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥27.90",
          "key": "抢购价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/606/7300/7301/503823/606506/606506_1_phone580_3464.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/606/7300/7301/503823/606506/606506_1_phone640_3464.jpg",
        "product_id": "606506",
        "number": "1315",
        "product_type": "2",
        "product_fresh": false,
        "sellable": true,
        "promotion_tag": ["赠"],
        "category_dsp": ["食品", "干货", "木耳/银耳"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "13",
        "hasVideo": false,
        "label": ""
      },
      "608691": {
        "name": "艾美 希腊覆盆子部分脱脂风味发酵乳150g杯装（瑞士进口）",
        "price1": {
          "value": "￥23.80",
          "key": "零售价"
        },
        "price2": {
          "value": "￥23.80",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥23.80",
          "key": "零售价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/606/64306/280375/89500/206060/608691/608691_1_phone580_6588.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/606/64306/280375/89500/206060/608691/608691_1_phone640_6588.jpg",
        "product_id": "608691",
        "number": "0",
        "product_type": "1",
        "product_fresh": true,
        "sellable": false,
        "promotion_tag": [],
        "category_dsp": ["食品", "生鲜食品", "肉类海鲜低温"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "595818": {
        "name": "【每日燕麦】中粮悠采 果蔬燕麦片480g",
        "price1": {
          "value": "￥28.80",
          "key": "抢购价"
        },
        "price2": {
          "value": "￥40.00",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥28.80",
          "key": "抢购价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/606/7400/7407/595818/595818_1_phone580_429.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/606/7400/7407/595818/595818_1_phone640_429.jpg",
        "product_id": "595818",
        "number": "280",
        "product_type": "2",
        "product_fresh": false,
        "sellable": true,
        "promotion_tag": ["赠"],
        "category_dsp": ["食品", "早餐食品", "糊状冲调品"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "13",
        "hasVideo": false,
        "label": ""
      },
      "571601": {
        "name": "【有好货】中粮安至选澳洲牛肋条 1kg 袋装",
        "price1": {
          "value": "￥138.00",
          "key": "零售价"
        },
        "price2": {
          "value": "￥138.00",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥138.00",
          "key": "零售价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/606/64306/280375/82402/82505/571601/571601_1_phone580_9490.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/606/64306/280375/82402/82505/571601/571601_1_phone640_9490.jpg",
        "product_id": "571601",
        "number": "0",
        "product_type": "1",
        "product_fresh": true,
        "sellable": false,
        "promotion_tag": [],
        "category_dsp": ["食品", "生鲜食品", "肉类海鲜低温"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "11",
        "hasVideo": false,
        "label": ""
      },
      "612074": {
        "name": "【专仓直发包邮】新西兰DNZ野花蜂蜜500g",
        "price1": {
          "value": "￥79.90",
          "key": "抢购价"
        },
        "price2": {
          "value": "￥158.00",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥79.90",
          "key": "抢购价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/606/6300/6304/6313/612074/612074_2_phone580_6523.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/606/6300/6304/6313/612074/612074_2_phone640_6523.jpg",
        "product_id": "612074",
        "number": "15419",
        "product_type": "2",
        "product_fresh": false,
        "sellable": true,
        "promotion_tag": ["直送"],
        "category_dsp": ["食品", "冲调品", "蜂蜜/柚子茶"],
        "sellerId": 993476,
        "sellerType": 1,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "589990": {
        "name": "时怡 中粮优选黑加仑葡萄干（袋装280g）",
        "price1": {
          "value": "￥37.80",
          "key": "零售价"
        },
        "price2": {
          "value": "￥37.80",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥37.80",
          "key": "零售价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/606/6060/6062/6076/589990/589990_0_phone580_6521.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/606/6060/6062/6076/589990/589990_0_phone640_6521.jpg",
        "product_id": "589990",
        "number": "0",
        "product_type": "1",
        "product_fresh": false,
        "sellable": false,
        "promotion_tag": [],
        "category_dsp": ["食品", "休闲食品", "果脯蜜饯"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "10321655": {
        "name": "统一冰红茶(瓶装 500ml)*6",
        "price1": {
          "value": "￥15.60",
          "key": "零售价"
        },
        "price2": {
          "value": "￥15.60",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥15.60",
          "key": "零售价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/604/439208/10321655/10321655_1_phone314_8127.jpg",
        "largePic": "http://pic.womai.com/upload/601/604/439208/10321655/10321655_1_phone640_8127.jpg",
        "product_id": "10321655",
        "number": "0",
        "product_type": "1",
        "product_fresh": false,
        "sellable": false,
        "promotion_tag": [],
        "category_dsp": ["食品", "果汁饮料", "茶饮料"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "586491": {
        "name": "【正品保税】2件 日本Merries花王纸尿裤大号L54片",
        "price1": {
          "value": "￥209.00",
          "key": "零售价"
        },
        "price2": {
          "value": "￥209.00",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥209.00",
          "key": "零售价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/606/6590/248321/248345/586491/586491_1_phone580_9470.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/606/6590/248321/248345/586491/586491_1_phone640_9470.jpg",
        "product_id": "586491",
        "number": "207",
        "product_type": "1",
        "product_fresh": false,
        "sellable": false,
        "promotion_tag": [],
        "category_dsp": [],
        "sellerId": 992359,
        "sellerType": 4,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "574338": {
        "name": "松下（Panasonic）吸尘器MC-CL443GJ81",
        "price1": {
          "value": "￥499.00",
          "key": "零售价"
        },
        "price2": {
          "value": "￥499.00",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥499.00",
          "key": "零售价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/608/253222/253223/253225/574338/574338_2_phone314_2617.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/608/253222/253223/253225/574338/574338_2_phone640_2617.jpg",
        "product_id": "574338",
        "number": "0",
        "product_type": "1",
        "product_fresh": false,
        "sellable": false,
        "promotion_tag": [],
        "category_dsp": ["日用品", "家用电器/运动办公", "生活电器"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "10429781": {
        "name": "【5包】Tomsgilim汤姆农场蜂蜜黄油扁桃仁35g（韩国进口 袋）",
        "price1": {
          "value": "￥32.80",
          "key": "团购价"
        },
        "price2": {
          "value": "￥34.00",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥32.80",
          "key": "团购价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/604/439208/10429781/10429781_1_phone580_9709.jpg",
        "largePic": "http://pic.womai.com/upload/601/604/439208/10429781/10429781_1_phone640_9709.jpg",
        "product_id": "10429781",
        "number": "247",
        "product_type": "3",
        "product_fresh": false,
        "sellable": true,
        "promotion_tag": [],
        "category_dsp": ["食品", "休闲食品", "坚果炒货"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "10274914": {
        "name": "【2019年新米】中粮初萃 东北明珠大米5kg",
        "price1": {
          "value": "￥29.90",
          "key": "抢购价"
        },
        "price2": {
          "value": "￥42.00",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥29.90",
          "key": "抢购价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/606/6200/6215/6213/10274914/10274914_0_phone580_2734.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/606/6200/6215/6213/10274914/10274914_0_phone640_2734.jpg",
        "product_id": "10274914",
        "number": "1165",
        "product_type": "2",
        "product_fresh": false,
        "sellable": true,
        "promotion_tag": [],
        "category_dsp": ["食品", "粮油", "大米"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "59494": {
        "name": "怡达果丹皮袋装500g",
        "price1": {
          "value": "￥14.00",
          "key": "零售价"
        },
        "price2": {
          "value": "￥14.00",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥14.00",
          "key": "零售价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/606/6060/6062/6077/59494/59494_1_phone580_8485.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/606/6060/6062/6077/59494/59494_1_phone640_8485.jpg",
        "product_id": "59494",
        "number": "176",
        "product_type": "1",
        "product_fresh": false,
        "sellable": true,
        "promotion_tag": [],
        "category_dsp": ["食品", "休闲食品", "果脯蜜饯"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "582850": {
        "name": "Friso美素佳儿金装幼儿配方奶粉3段900g  12-36个月宝宝适用（荷兰进口）",
        "price1": {
          "value": "￥208.00",
          "key": "零售价"
        },
        "price2": {
          "value": "￥208.00",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥208.00",
          "key": "零售价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/606/6590/6501/214562/582850/582850_1_phone580_6451.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/606/6590/6501/214562/582850/582850_1_phone640_6451.jpg",
        "product_id": "582850",
        "number": "0",
        "product_type": "1",
        "product_fresh": false,
        "sellable": false,
        "promotion_tag": [],
        "category_dsp": ["食品", "孕婴童", "奶粉"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "10134628": {
        "name": "【2019年新米】中粮初萃 五常稻花香大米5kg（新旧包装随机发货）",
        "price1": {
          "value": "￥59.90",
          "key": "抢购价"
        },
        "price2": {
          "value": "￥80.00",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥59.90",
          "key": "抢购价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/606/6200/6215/6213/10134628/10134628_1_phone580_4822.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/606/6200/6215/6213/10134628/10134628_1_phone640_4822.jpg",
        "product_id": "10134628",
        "number": "753",
        "product_type": "2",
        "product_fresh": false,
        "sellable": true,
        "promotion_tag": ["赠"],
        "category_dsp": ["食品", "粮油", "大米"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "597511": {
        "name": "维达 蓝色经典3层140g卷纸*27卷（整箱销售）新旧包装随机发货",
        "price1": {
          "value": "￥79.00",
          "key": "零售价"
        },
        "price2": {
          "value": "￥79.00",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥79.00",
          "key": "零售价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/608/362805/362808/362457/362541/597511/597511_1_phone580_8776.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/608/362805/362808/362457/362541/597511/597511_1_phone640_8776.jpg",
        "product_id": "597511",
        "number": "0",
        "product_type": "1",
        "product_fresh": false,
        "sellable": false,
        "promotion_tag": [],
        "category_dsp": ["日用品", "家居用品/厨具用品", "生活日用/宠物"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "10318074": {
        "name": "时怡中粮优选洋槐蜂蜜454g *2",
        "price1": {
          "value": "￥110.00",
          "key": "零售价"
        },
        "price2": {
          "value": "￥110.00",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥110.00",
          "key": "零售价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/606/7400/7408/10318074/10318074_2_phone580_3852.jpg",
        "largePic": "http://pic.womai.com/upload/601/604/439208/10318074/10318074_1_phone640_881.jpg",
        "product_id": "10318074",
        "number": "0",
        "product_type": "1",
        "product_fresh": false,
        "sellable": false,
        "promotion_tag": [],
        "category_dsp": ["食品", "冲调品", "蜂蜜/柚子茶"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "611996": {
        "name": "可兰纳斯美滋滋坚果天天见A750g（新老包装发货）（华北失效期2019.7.31）",
        "price1": {
          "value": "￥148.00",
          "key": "零售价"
        },
        "price2": {
          "value": "￥148.00",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥148.00",
          "key": "零售价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/606/6060/6065/73000/611996/611996_1_phone580_4190.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/606/6060/6065/73000/611996/611996_1_phone640_4190.jpg",
        "product_id": "611996",
        "number": "0",
        "product_type": "1",
        "product_fresh": false,
        "sellable": false,
        "promotion_tag": [],
        "category_dsp": ["食品", "休闲食品", "坚果炒货"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "539762": {
        "name": "贝倍舒宝宝润肤霜50g（盒）",
        "price1": {
          "value": "￥38.00",
          "key": "零售价"
        },
        "price2": {
          "value": "￥38.00",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥38.00",
          "key": "零售价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/608/206120/206123/206251/539762/539762_1_phone314_3327.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/608/206120/206123/206251/539762/539762_1_phone640_3327.jpg",
        "product_id": "539762",
        "number": "0",
        "product_type": "1",
        "product_fresh": false,
        "sellable": false,
        "promotion_tag": [],
        "category_dsp": ["臻品尊享", "北京", "餐厨百货"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "514872": {
        "name": "茅台王子酒 500ml",
        "price1": {
          "value": "￥169.00",
          "key": "零售价"
        },
        "price2": {
          "value": "￥169.00",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥169.00",
          "key": "零售价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/606/6800/6801/514872/514872_0_phone580_114.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/606/6800/6801/514872/514872_0_phone640_114.jpg",
        "product_id": "514872",
        "number": "0",
        "product_type": "1",
        "product_fresh": false,
        "sellable": false,
        "promotion_tag": [],
        "category_dsp": ["食品", "酒类（废弃）", "白酒（废弃）"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "602297": {
        "name": "一品玉和田红枣五星 特惠专供装 400g*3",
        "price1": {
          "value": "￥89.00",
          "key": "零售价"
        },
        "price2": {
          "value": "￥89.00",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥89.00",
          "key": "零售价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/602/62817/602297/602297_0_phone580_7150.jpg",
        "largePic": "http://pic.womai.com/upload/601/602/62817/602297/602297_0_phone640_7150.jpg",
        "product_id": "602297",
        "number": "0",
        "product_type": "1",
        "product_fresh": false,
        "sellable": false,
        "promotion_tag": [],
        "category_dsp": ["民生关爱积分"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "502614": {
        "name": "欣和六月鲜 特级酱油1L",
        "price1": {
          "value": "￥22.00",
          "key": "零售价"
        },
        "price2": {
          "value": "￥22.00",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥22.00",
          "key": "零售价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/606/7100/7102/502614/502614_1_phone580_2882.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/606/7100/7102/502614/502614_1_phone640_2882.jpg",
        "product_id": "502614",
        "number": "317",
        "product_type": "1",
        "product_fresh": false,
        "sellable": true,
        "promotion_tag": [],
        "category_dsp": ["食品", "调味品", "酱油"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "610793": {
        "name": "【香港直邮】满199减50 德国 Balea 芭乐雅七日保湿玻尿酸安瓶 紫盒7支装",
        "price1": {
          "value": "￥79.00",
          "key": "零售价"
        },
        "price2": {
          "value": "￥79.00",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥79.00",
          "key": "零售价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/253820/610793/610793_1_phone580_1854.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/253820/610793/610793_1_phone640_1854.jpg",
        "product_id": "610793",
        "number": "77",
        "product_type": "1",
        "product_fresh": false,
        "sellable": false,
        "promotion_tag": [],
        "category_dsp": ["日用品", "个人护理/美容美妆", "美容美妆"],
        "sellerId": 993362,
        "sellerType": 4,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "552409": {
        "name": "十月稻田稻花香大米5kg",
        "price1": {
          "value": "￥55.00",
          "key": "团购价"
        },
        "price2": {
          "value": "￥65.00",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥55.00",
          "key": "团购价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/606/6200/6215/6213/552409/552409_1_phone580_3804.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/606/6200/6215/6213/552409/552409_1_phone640_3804.jpg",
        "product_id": "552409",
        "number": "236",
        "product_type": "3",
        "product_fresh": false,
        "sellable": true,
        "promotion_tag": [],
        "category_dsp": ["食品", "粮油", "大米"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "13",
        "hasVideo": false,
        "label": ""
      },
      "76340": {
        "name": "三元极致全脂纯牛奶250ml*12/箱(新老包装随机发货)",
        "price1": {
          "value": "￥49.90",
          "key": "团购价"
        },
        "price2": {
          "value": "￥65.00",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥49.90",
          "key": "团购价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/602/66008/76340/76340_1_phone580_7924.jpg",
        "largePic": "http://pic.womai.com/upload/601/602/66008/76340/76340_1_phone640_7924.jpg",
        "product_id": "76340",
        "number": "337",
        "product_type": "3",
        "product_fresh": false,
        "sellable": true,
        "promotion_tag": [],
        "category_dsp": ["食品", "奶制品", "纯牛奶"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "585917": {
        "name": "FisherPrice费雪层叠彩虹杯婴儿玩具K7166",
        "price1": {
          "value": "￥109.00",
          "key": "零售价"
        },
        "price2": {
          "value": "￥109.00",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥109.00",
          "key": "零售价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/606/6590/406614/406416/406628/585917/585917_1_phone314_6180.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/606/6590/406614/406416/406628/585917/585917_1_phone640_6180.jpg",
        "product_id": "585917",
        "number": "0",
        "product_type": "1",
        "product_fresh": false,
        "sellable": false,
        "promotion_tag": [],
        "category_dsp": ["食品", "孕婴童", "玩具童车"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "613317": {
        "name": "【限北京天津地区销售】渤悦鲜活冻煮裙边扇贝250g/袋 肉质鲜美",
        "price1": {
          "value": "￥39.50",
          "key": "零售价"
        },
        "price2": {
          "value": "￥39.50",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥39.50",
          "key": "零售价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/606/80300/80517/80518/613317/613317_1_phone580_5138.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/606/80300/80517/80518/613317/613317_1_phone640_5138.jpg",
        "product_id": "613317",
        "number": "50436",
        "product_type": "1",
        "product_fresh": false,
        "sellable": false,
        "promotion_tag": ["直送"],
        "category_dsp": ["食品", "味道中国", "华中"],
        "sellerId": 993471,
        "sellerType": 1,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "586398": {
        "name": "【正品保税】2件 德国Aptamil爱他美婴幼儿奶粉3段800g（新老包装随机发货）",
        "price1": {
          "value": "￥309.00",
          "key": "零售价"
        },
        "price2": {
          "value": "￥309.00",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥309.00",
          "key": "零售价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/606/6590/6501/214562/586398/586398_1_phone580_5074.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/606/6590/6501/214562/586398/586398_1_phone640_5074.jpg",
        "product_id": "586398",
        "number": "308",
        "product_type": "1",
        "product_fresh": false,
        "sellable": true,
        "promotion_tag": [],
        "category_dsp": ["食品", "孕婴童", "奶粉"],
        "sellerId": 992359,
        "sellerType": 4,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "10320606": {
        "name": "上海梅林午餐肉340g*2",
        "price1": {
          "value": "￥31.40",
          "key": "零售价"
        },
        "price2": {
          "value": "￥31.40",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥31.40",
          "key": "零售价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/604/10320606/10320606_0_phone580_3767.jpg",
        "largePic": "http://pic.womai.com/upload/601/604/10320606/10320606_0_phone640_3767.jpg",
        "product_id": "10320606",
        "number": "0",
        "product_type": "1",
        "product_fresh": false,
        "sellable": false,
        "promotion_tag": [],
        "category_dsp": ["食品", "方便食品", "罐头"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "76348": {
        "name": "三元特品方白纯牛奶250ml*24/箱",
        "price1": {
          "value": "￥64.90",
          "key": "抢购价"
        },
        "price2": {
          "value": "￥91.20",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥64.90",
          "key": "抢购价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/602/66008/76348/76348_1_phone580_8926.jpg",
        "largePic": "http://pic.womai.com/upload/601/602/66008/76348/76348_1_phone640_8926.jpg",
        "product_id": "76348",
        "number": "1038",
        "product_type": "2",
        "product_fresh": false,
        "sellable": true,
        "promotion_tag": [],
        "category_dsp": ["食品", "奶制品", "纯牛奶"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "80772": {
        "name": "瑞士莲特醇排装-70％可可黑巧克力100g（法国进口排）",
        "price1": {
          "value": "￥29.80",
          "key": "团购价"
        },
        "price2": {
          "value": "￥36.00",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥29.80",
          "key": "团购价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/606/7400/7406/80772/80772_0_phone580_1092.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/606/7400/7406/80772/80772_0_phone640_1092.jpg",
        "product_id": "80772",
        "number": "51",
        "product_type": "3",
        "product_fresh": false,
        "sellable": true,
        "promotion_tag": [],
        "category_dsp": ["食品", "早餐食品", "咖啡/巧克力"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "612602": {
        "name": "苹果iPhone7 128GB 全网通 玫瑰金",
        "price1": {
          "value": "￥5699.00",
          "key": "零售价"
        },
        "price2": {
          "value": "￥5699.00",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥5699.00",
          "key": "零售价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/608/362421/362428/362492/362578/612602/612602_1_phone580_6848.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/608/362421/362428/362492/362578/612602/612602_1_phone640_6848.jpg",
        "product_id": "612602",
        "number": "0",
        "product_type": "1",
        "product_fresh": false,
        "sellable": false,
        "promotion_tag": ["直采"],
        "category_dsp": ["日用品", "家用电器/运动办公", "个护健康"],
        "sellerId": 993359,
        "sellerType": 2,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "66546": {
        "name": "蒙牛特仑苏纯牛奶250ml*12/箱（新老包装随机发）",
        "price1": {
          "value": "￥56.90",
          "key": "团购价"
        },
        "price2": {
          "value": "￥75.00",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥56.90",
          "key": "团购价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/606/7400/7409/66546/66546_1_phone580_2483.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/606/7400/7409/66546/66546_1_phone640_2483.jpg",
        "product_id": "66546",
        "number": "340",
        "product_type": "3",
        "product_fresh": false,
        "sellable": true,
        "promotion_tag": [],
        "category_dsp": ["食品", "早餐食品", "常温奶"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "538200": {
        "name": "乌克兰乡村葵花籽油5L(乌克兰进口 桶)(新老包装随机发货）",
        "price1": {
          "value": "￥99.00",
          "key": "零售价"
        },
        "price2": {
          "value": "￥99.00",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥99.00",
          "key": "零售价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/606/6200/6201/6209/538200/538200_4_phone580_4569.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/606/6200/6201/6209/538200/538200_1_phone640_5292.jpg",
        "product_id": "538200",
        "number": "0",
        "product_type": "1",
        "product_fresh": false,
        "sellable": false,
        "promotion_tag": [],
        "category_dsp": ["食品", "粮油", "食用油"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "594018": {
        "name": "【中粮海外直采】Hochwald好沃得全脂牛奶200ml*6",
        "price1": {
          "value": "￥22.90",
          "key": "零售价"
        },
        "price2": {
          "value": "￥22.90",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥22.90",
          "key": "零售价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/602/54610/594018/594018_0_phone580_5143.jpg",
        "largePic": "http://pic.womai.com/upload/601/602/54610/594018/594018_0_phone640_5143.jpg",
        "product_id": "594018",
        "number": "0",
        "product_type": "1",
        "product_fresh": false,
        "sellable": false,
        "promotion_tag": [],
        "category_dsp": ["食品", "早餐食品", "常温奶"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "560134": {
        "name": "GoldenDelight金怡泰国茉莉香米5kg（泰国）新老包装随机发货",
        "price1": {
          "value": "￥112.00",
          "key": "零售价"
        },
        "price2": {
          "value": "￥112.00",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥112.00",
          "key": "零售价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/606/6200/6215/6214/560134/560134_0_phone580_1624.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/606/6200/6215/6214/560134/560134_0_phone640_1624.jpg",
        "product_id": "560134",
        "number": "0",
        "product_type": "1",
        "product_fresh": false,
        "sellable": false,
        "promotion_tag": [],
        "category_dsp": ["食品", "粮油", "大米"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "562365": {
        "name": "【专仓直发包邮】年货山孚牌微山湖散养咸鸭蛋盒装390g*2盒",
        "price1": {
          "value": "￥29.90",
          "key": "抢购价"
        },
        "price2": {
          "value": "￥39.00",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥29.90",
          "key": "抢购价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/606/80300/80506/80507/562365/562365_1_phone580_6599.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/606/80300/80506/80507/562365/562365_1_phone640_6599.jpg",
        "product_id": "562365",
        "number": "27458",
        "product_type": "2",
        "product_fresh": false,
        "sellable": true,
        "promotion_tag": ["直送"],
        "category_dsp": ["食品", "味道中国", "华东"],
        "sellerId": 991504,
        "sellerType": 1,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "607660": {
        "name": "安荟堂中粮优选银耳（朵型)65g（新旧包装随机发货）",
        "price1": {
          "value": "￥25.80",
          "key": "零售价"
        },
        "price2": {
          "value": "￥25.80",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥25.80",
          "key": "零售价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/606/7300/7301/503823/607660/607660_1_phone580_1012.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/606/7300/7301/503823/607660/607660_1_phone640_1012.jpg",
        "product_id": "607660",
        "number": "0",
        "product_type": "1",
        "product_fresh": false,
        "sellable": false,
        "promotion_tag": [],
        "category_dsp": ["食品", "粮油", "其他"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "609453": {
        "name": "Anchor安佳调制乳粉(全脂乳粉）900g（新西兰进口 罐装）",
        "price1": {
          "value": "￥120.00",
          "key": "零售价"
        },
        "price2": {
          "value": "￥120.00",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥120.00",
          "key": "零售价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/606/66102/66105/496872/609453/609453_0_phone580_1352.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/606/66102/66105/496872/609453/609453_0_phone640_1352.jpg",
        "product_id": "609453",
        "number": "0",
        "product_type": "1",
        "product_fresh": false,
        "sellable": false,
        "promotion_tag": [],
        "category_dsp": ["食品", "奶制品", "进口奶"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "587494": {
        "name": "三养超辣鸡肉味拌面五连包140g*5（韩国进口 袋）",
        "price1": {
          "value": "￥30.90",
          "key": "抢购价"
        },
        "price2": {
          "value": "￥49.90",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥30.90",
          "key": "抢购价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/606/66102/200620/587494/587494_1_phone580_6115.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/606/66102/200620/587494/587494_1_phone640_6115.jpg",
        "product_id": "587494",
        "number": "38",
        "product_type": "2",
        "product_fresh": false,
        "sellable": true,
        "promotion_tag": [],
        "category_dsp": ["食品", "进口食品", "进口方便食品"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "613091": {
        "name": "优形电烤鸡胸肉片150g（女神款）盒装",
        "price1": {
          "value": "￥14.90",
          "key": "零售价"
        },
        "price2": {
          "value": "￥14.90",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥14.90",
          "key": "零售价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/606/64306/280375/219400/219420/613091/613091_0_phone580_6087.JPG",
        "largePic": "http://pic.womai.com/upload/601/603/606/64306/280375/219400/219420/613091/613091_0_phone640_6087.JPG",
        "product_id": "613091",
        "number": "0",
        "product_type": "1",
        "product_fresh": true,
        "sellable": false,
        "promotion_tag": [],
        "category_dsp": [],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "12",
        "hasVideo": false,
        "label": ""
      },
      "10134592": {
        "name": "【2019年新米】中粮初萃 五常香米5kg",
        "price1": {
          "value": "￥49.90",
          "key": "抢购价"
        },
        "price2": {
          "value": "￥62.90",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥49.90",
          "key": "抢购价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/606/6200/6215/6213/10134592/10134592_0_phone580_4518.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/606/6200/6215/6213/10134592/10134592_0_phone640_4518.jpg",
        "product_id": "10134592",
        "number": "2226",
        "product_type": "2",
        "product_fresh": false,
        "sellable": true,
        "promotion_tag": ["赠"],
        "category_dsp": ["食品", "粮油", "大米"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "572327": {
        "name": "BHB燕山甘栗仁100g*10袋 专供特惠装（新老包装随机发货）",
        "price1": {
          "value": "￥49.90",
          "key": "团购价"
        },
        "price2": {
          "value": "￥69.00",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥49.90",
          "key": "团购价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/210640/210642/210644/572327/572327_1_phone580_4828.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/210640/210642/210644/572327/572327_1_phone640_4828.jpg",
        "product_id": "572327",
        "number": "435",
        "product_type": "3",
        "product_fresh": false,
        "sellable": true,
        "promotion_tag": [],
        "category_dsp": ["臻品尊享", "北京", "休闲健康"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "10377394": {
        "name": "虎标黑糖150g*3瓶（玫瑰+老姜+红枣桂圆）",
        "price1": {
          "value": "￥49.00",
          "key": "抢购价"
        },
        "price2": {
          "value": "￥80.70",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥49.00",
          "key": "抢购价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/606/6900/6902/10377394/10377394_3_phone580_3859.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/606/6900/6902/10377394/10377394_3_phone640_3859.jpg",
        "product_id": "10377394",
        "number": "0",
        "product_type": "2",
        "product_fresh": false,
        "sellable": false,
        "promotion_tag": [],
        "category_dsp": ["食品", "茶叶", "养生茶"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "608129": {
        "name": "【澳洲直邮】澳大利亚Bio Island比奥岛袋鼠精胶囊（男性调理滋补）90粒",
        "price1": {
          "value": "￥138.00",
          "key": "零售价"
        },
        "price2": {
          "value": "￥138.00",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥138.00",
          "key": "零售价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/606/7000/65906/608129/608129_1_phone580_3016.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/606/7000/65906/608129/608129_1_phone640_3016.jpg",
        "product_id": "608129",
        "number": "0",
        "product_type": "1",
        "product_fresh": false,
        "sellable": false,
        "promotion_tag": [],
        "category_dsp": ["食品", "营养健康", "骨骼健康"],
        "sellerId": 993368,
        "sellerType": 4,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "65902": {
        "name": "中粮悠采 核桃油250ml",
        "price1": {
          "value": "￥128.00",
          "key": "零售价"
        },
        "price2": {
          "value": "￥128.00",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥128.00",
          "key": "零售价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/606/6200/6201/51900/65902/65902_5_phone580_7815.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/606/6200/6201/51900/65902/65902_1_phone640_6933.jpg",
        "product_id": "65902",
        "number": "0",
        "product_type": "2",
        "product_fresh": false,
        "sellable": false,
        "promotion_tag": ["赠"],
        "category_dsp": ["食品", "粮油", "食用油"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "13",
        "hasVideo": false,
        "label": ""
      },
      "598921": {
        "name": "【中粮出品】简沃-加厚纸杯250ML50只装 RY-1508",
        "price1": {
          "value": "￥13.90",
          "key": "零售价"
        },
        "price2": {
          "value": "￥13.90",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥13.90",
          "key": "零售价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/608/362805/362424/362442/362514/598921/598921_1_phone580_4513.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/608/362805/362424/362442/362514/598921/598921_1_phone640_4513.jpg",
        "product_id": "598921",
        "number": "0",
        "product_type": "1",
        "product_fresh": false,
        "sellable": false,
        "promotion_tag": [],
        "category_dsp": ["臻品尊享", "北京", "粮油调味"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "609442": {
        "name": "帮宝适 超薄干爽拉拉裤电商彩箱 L120",
        "price1": {
          "value": "￥258.00",
          "key": "零售价"
        },
        "price2": {
          "value": "￥258.00",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥258.00",
          "key": "零售价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/90900/216060/216061/609442/609442_1_phone580_3782.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/90900/216060/216061/609442/609442_1_phone640_3782.jpg",
        "product_id": "609442",
        "number": "0",
        "product_type": "1",
        "product_fresh": false,
        "sellable": false,
        "promotion_tag": [],
        "category_dsp": ["食品", "孕婴童", "尿裤/湿巾"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "609441": {
        "name": "帮宝适 超薄干爽拉拉裤电商彩箱 XL108",
        "price1": {
          "value": "￥318.00",
          "key": "零售价"
        },
        "price2": {
          "value": "￥318.00",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥318.00",
          "key": "零售价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/90900/216060/216061/609441/609441_1_phone580_8404.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/90900/216060/216061/609441/609441_1_phone640_8404.jpg",
        "product_id": "609441",
        "number": "0",
        "product_type": "1",
        "product_fresh": false,
        "sellable": false,
        "promotion_tag": [],
        "category_dsp": ["食品", "孕婴童", "尿裤/湿巾"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "534093": {
        "name": "清风原木纯品3层270段10卷卷纸",
        "price1": {
          "value": "￥30.90",
          "key": "零售价"
        },
        "price2": {
          "value": "￥30.90",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥30.90",
          "key": "零售价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/362419/206121/206256/206257/534093/534093_1_phone580_7614.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/362419/206121/206256/206257/534093/534093_1_phone640_7614.jpg",
        "product_id": "534093",
        "number": "0",
        "product_type": "1",
        "product_fresh": false,
        "sellable": false,
        "promotion_tag": [],
        "category_dsp": ["臻品尊享", "广州", "餐厨百货"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "595767": {
        "name": "【店庆爆款】时怡中粮优选什锦果仁(罐装1020g)",
        "price1": {
          "value": "￥158.00",
          "key": "零售价"
        },
        "price2": {
          "value": "￥158.00",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥158.00",
          "key": "零售价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/606/6060/6065/6086/595767/595767_1_phone580_38.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/606/6060/6065/6086/595767/595767_1_phone640_38.jpg",
        "product_id": "595767",
        "number": "0",
        "product_type": "1",
        "product_fresh": false,
        "sellable": false,
        "promotion_tag": [],
        "category_dsp": ["食品", "休闲食品", "坚果炒货"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "11",
        "hasVideo": false,
        "label": ""
      },
      "613770": {
        "name": "伊利金典纯牛奶250ml*16/箱",
        "price1": {
          "value": "￥82.90",
          "key": "抢购价"
        },
        "price2": {
          "value": "￥87.00",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥82.90",
          "key": "抢购价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/90900/216060/216061/613770/613770_1_phone580_5185.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/90900/216060/216061/613770/613770_1_phone640_5185.jpg",
        "product_id": "613770",
        "number": "249",
        "product_type": "2",
        "product_fresh": false,
        "sellable": true,
        "promotion_tag": [],
        "category_dsp": ["食品", "奶制品", "纯牛奶"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "575005": {
        "name": "【专仓直发包邮】暖民茶叶花草茶玫瑰花茶120g罐装",
        "price1": {
          "value": "￥27.60",
          "key": "零售价"
        },
        "price2": {
          "value": "￥27.60",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥27.60",
          "key": "零售价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/606/6900/6903/575005/575005_1_phone580_6255.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/606/6900/6903/575005/575005_1_phone640_6255.jpg",
        "product_id": "575005",
        "number": "0",
        "product_type": "1",
        "product_fresh": false,
        "sellable": false,
        "promotion_tag": ["直送"],
        "category_dsp": ["食品", "茶叶", "花草茶"],
        "sellerId": 991951,
        "sellerType": 1,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "603887": {
        "name": "【热卖】时怡海苔 42.3g (4.7g x 9袋)",
        "price1": {
          "value": "￥19.90",
          "key": "抢购价"
        },
        "price2": {
          "value": "￥29.90",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥19.90",
          "key": "抢购价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/606/6060/6061/6074/603887/603887_1_phone580_6190.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/606/6060/6061/6074/603887/603887_1_phone640_6190.jpg",
        "product_id": "603887",
        "number": "0",
        "product_type": "2",
        "product_fresh": false,
        "sellable": false,
        "promotion_tag": [],
        "category_dsp": ["食品", "休闲食品", "休闲零食"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "588603": {
        "name": "福临门秋田小町5kg",
        "price1": {
          "value": "￥32.90",
          "key": "抢购价"
        },
        "price2": {
          "value": "￥58.90",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥32.90",
          "key": "抢购价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/606/6200/6215/6213/588603/588603_1_phone580_4164.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/606/6200/6215/6213/588603/588603_1_phone640_4164.jpg",
        "product_id": "588603",
        "number": "1215",
        "product_type": "2",
        "product_fresh": false,
        "sellable": true,
        "promotion_tag": [],
        "category_dsp": ["食品", "粮油", "大米"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "13",
        "hasVideo": false,
        "label": ""
      },
      "597259": {
        "name": "圣牧全程有机纯奶200ml*10/箱 新老包装随机发货",
        "price1": {
          "value": "￥58.00",
          "key": "零售价"
        },
        "price2": {
          "value": "￥58.00",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥58.00",
          "key": "零售价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/606/207421/207424/597259/597259_1_phone580_4474.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/606/207421/207424/597259/597259_1_phone640_4474.jpg",
        "product_id": "597259",
        "number": "0",
        "product_type": "1",
        "product_fresh": false,
        "sellable": false,
        "promotion_tag": [],
        "category_dsp": ["食品", "有机食品", "有机婴幼食品&奶制品"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "613767": {
        "name": "伊利安慕希希腊风味酸奶 原味 205g*16盒/箱（新老包装随机发货）",
        "price1": {
          "value": "￥66.90",
          "key": "团购价"
        },
        "price2": {
          "value": "￥88.00",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥66.90",
          "key": "团购价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/606/6600/6604/613767/613767_1_phone580_7814.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/606/6600/6604/613767/613767_1_phone640_7814.jpg",
        "product_id": "613767",
        "number": "145",
        "product_type": "3",
        "product_fresh": false,
        "sellable": true,
        "promotion_tag": [],
        "category_dsp": ["食品", "奶制品", "酸奶"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "10318295": {
        "name": "时怡 中粮优选雪域玉枣 五星 (450g)*2【新旧包装随机发货】",
        "price1": {
          "value": "￥132.00",
          "key": "零售价"
        },
        "price2": {
          "value": "￥132.00",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥132.00",
          "key": "零售价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/606/6060/6062/6075/10318295/10318295_1_phone580_4230.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/606/6060/6062/6075/10318295/10318295_1_phone640_4230.jpg",
        "product_id": "10318295",
        "number": "0",
        "product_type": "1",
        "product_fresh": false,
        "sellable": false,
        "promotion_tag": [],
        "category_dsp": ["食品", "休闲食品", "果脯蜜饯"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "597258": {
        "name": "圣牧全程有机酸奶205g*8/箱 新老包装随机发",
        "price1": {
          "value": "￥52.00",
          "key": "零售价"
        },
        "price2": {
          "value": "￥52.00",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥52.00",
          "key": "零售价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/606/6600/6604/597258/597258_1_phone580_7642.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/606/6600/6604/597258/597258_1_phone640_7642.jpg",
        "product_id": "597258",
        "number": "0",
        "product_type": "1",
        "product_fresh": false,
        "sellable": false,
        "promotion_tag": [],
        "category_dsp": ["食品", "奶制品", "酸奶"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "553896": {
        "name": "【中粮直采】西班牙进口拉科利慕斯 Lacrimus 5号DOC级干红葡萄酒 750ml",
        "price1": {
          "value": "￥85.00",
          "key": "抢购价"
        },
        "price2": {
          "value": "￥128.00",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥85.00",
          "key": "抢购价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/606/6800/6803/6807/553896/553896_1_phone580_5373.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/606/6800/6803/6807/553896/553896_1_phone640_5373.jpg",
        "product_id": "553896",
        "number": "0",
        "product_type": "2",
        "product_fresh": false,
        "sellable": false,
        "promotion_tag": [],
        "category_dsp": ["臻品尊享", "北京", "酒饮冲调"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "576073": {
        "name": "【中粮直采】法国进口甜美诱惑Tentation Douce AOC级干红葡萄酒750ml",
        "price1": {
          "value": "￥158.00",
          "key": "零售价"
        },
        "price2": {
          "value": "￥158.00",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥158.00",
          "key": "零售价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/606/6800/6803/6807/576073/576073_1_phone314_2485.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/606/6800/6803/6807/576073/576073_1_phone640_2485.jpg",
        "product_id": "576073",
        "number": "0",
        "product_type": "1",
        "product_fresh": false,
        "sellable": false,
        "promotion_tag": [],
        "category_dsp": ["食品", "全球美食", "地中海"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "10422847": {
        "name": "福临门黄金产地玉米油3.5L+玉米油900ML",
        "price1": {
          "value": "￥79.80",
          "key": "零售价"
        },
        "price2": {
          "value": "￥79.80",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥79.80",
          "key": "零售价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/606/6200/6201/6211/10422847/10422847_1_phone580_6111.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/606/6200/6201/6211/10422847/10422847_1_phone640_6111.jpg",
        "product_id": "10422847",
        "number": "0",
        "product_type": "1",
        "product_fresh": false,
        "sellable": false,
        "promotion_tag": [],
        "category_dsp": ["食品", "粮油", "食用油"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "611729": {
        "name": "中国台湾老杨咸蛋黄饼干  260g  （中国台湾 袋）",
        "price1": {
          "value": "￥32.80",
          "key": "零售价"
        },
        "price2": {
          "value": "￥32.80",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥32.80",
          "key": "零售价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/606/6400/6401/84301/611729/611729_0_phone580_1.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/606/6400/6401/84301/611729/611729_0_phone640_1.jpg",
        "product_id": "611729",
        "number": "0",
        "product_type": "1",
        "product_fresh": false,
        "sellable": false,
        "promotion_tag": [],
        "category_dsp": ["食品", "饼干蛋糕", "饼干"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "",
        "hasVideo": false,
        "label": ""
      },
      "588605": {
        "name": "福临门葵花籽清香食用植物调和油5L（新老包装随机发）",
        "price1": {
          "value": "￥54.90",
          "key": "团购价"
        },
        "price2": {
          "value": "￥59.90",
          "key": "零售价"
        },
        "buyPrice": {
          "value": "￥54.90",
          "key": "团购价"
        },
        "referencePrice": {
          "value": "",
          "key": ""
        },
        "pic": "http://pic.womai.com/upload/601/603/606/6200/6201/6207/588605/588605_1_phone580_9905.jpg",
        "largePic": "http://pic.womai.com/upload/601/603/606/6200/6201/6207/588605/588605_1_phone640_9905.jpg",
        "product_id": "588605",
        "number": "4054",
        "product_type": "3",
        "product_fresh": false,
        "sellable": true,
        "promotion_tag": [],
        "category_dsp": ["食品", "粮油", "食用油"],
        "sellerId": 0,
        "sellerType": 0,
        "restAssuredLabel": "13",
        "hasVideo": false,
        "label": ""
      }
    }
  }
}
