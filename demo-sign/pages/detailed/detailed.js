// pages/detailed/detailed.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner_url: ['../../icons/detail.jpg', '../../icons/detail02.jpg'],
    indicatorDots: true,//是否显示指示点
    vertical: false,//是否为纵向
    autoplay: false,
    indicatorcolor: 'green',
    interval: 3000,//自动切换时长
    duration: 1000,//滑动时长
    contentList: [
      {
        shopping: '../../icons/banner01.png',
        // title: '高级人脉养成术 | 结识你生命中的“贵人”,让身价提升10倍',
        bt_text: '让你成为一名优秀的管理者',
        bt_content:'有一个故事，说的是一头驴，背着两捆草，饿了，到底放下那一捆来吃呢?一直犹豫不决，结果饿死了。这个故事有些夸张，但人生很多路口，大家都会在路口上徘徊。做选择是很难很痛苦的，这边有诱惑，那边也有诱惑。到底选择哪个?我的同学都出国了，我是不是也应该去新东方学习准备考托福?我的发小考公务员了，我是不是也要买书复习了?电视上说有个人小学没毕业做电商就发财了，我是不是也要到淘宝上开个店铺?'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  }

  
})