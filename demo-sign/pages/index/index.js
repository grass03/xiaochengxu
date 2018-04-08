//index.js
//获取应用实例
var app = getApp()

Page({
  data: {
    // banner 初始化
    banner_url: ['../../icons/banner01.png', '../../icons/banner02.png', '../../icons/banner03.png', '../../icons/banner04.png', '../../icons/banner05.png'],
    indicatorDots: true,//是否显示指示点
    vertical: false,//是否为纵向
    autoplay: true,
    indicatorcolor: 'green',
    interval: 3000,//自动切换时长
    duration: 1000,//滑动时长
    contentList:[
      { shopping: '../../icons/banner01.png', 
        title:'高级人脉养成术 | 结识你生命中的“贵人”,让身价提升10倍',
        bt_text: '4万+人在学',
        bt_textTow: '含12节课程',
        bt_textThree: '99.00'
        },
      {
        shopping: '../../icons/banner05.png',
        title: '高级人脉养成术 | 结识你生命中的“贵人”,让身价提升10倍',
        bt_text: '4万+人在学',
        bt_textTow: '含12节课程',
        bt_textThree: '99.00'
      }
    ]
  },
  mavigate_01: function (e) {
    var id = e.currentTarget.id;
    console.log(id);
  },
  onTap: function (e) {
    var kind = e.target.id
    console.log(kind)
  },
  onLoad: function () {
    var that = this
    that.setData({
      list: that.data.navSectionItems
    })

  },
  imgchangeOne:function(e) {
    wx.navigateTo({
      url:'../Mycourse/Mycourse'
    })
  },
  imgchangeTow: function (e) {
    wx.navigateTo({
      url: '../selected/selected'
    })
  },
  imgchangeThree:function(e) {
    wx.navigateTo({
      url: '../audition/audition',
    })
  },
  imgchangeFour:function(e) {
    wx.navigateTo({
      url: '../area/area',
    })
  }
  ,
  tiaozhuan: function(event) {
      wx.navigateTo({
        url: '../search/search'
      })
  },
  detailins: function(e) {
    wx.navigateTo({
      url: '../curriculum/curriculum'
    })
  }

})
// 




  




 