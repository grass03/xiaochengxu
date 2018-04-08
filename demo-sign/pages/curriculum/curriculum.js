// pages/detailed/detailed.js
var app = getApp()
console.log(getApp().globaData)
var shiftdata = {
  1: "50%",
  0: "0%"
}
var ran = 100
Page({
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },
  data: {
    contentList: [
      {
        shopping: '../../icons/banner01.png',
        // title: '高级人脉养成术 | 结识你生命中的“贵人”,让身价提升10倍',
        bt_text: '让你成为一名优秀的管理者',
        bt_content: '有一个故事，说的是一头驴，背着两捆草，饿了，到底放下那一捆来吃呢?一直犹豫不决，结果饿死了。这个故事有些夸张，但人生很多路口，大家都会在路口上徘徊。做选择是很难很痛苦的，这边有诱惑，那边也有诱惑。到底选择哪个?我的同学都出国了，我是不是也应该去新东方学习准备考托福?我的发小考公务员了，我是不是也要买书复习了?电视上说有个人小学没毕业做电商就发财了，我是不是也要到淘宝上开个店铺?'
      }
    ],
    poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    name: '测试课程1',
    author: '点击收听音频介绍',
    src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
    listCon:[
      {introduce:'课程介绍'}
    ],
    listtext:[
      { hourlist: '课时7',
        hourTime: '12:00',
        title: "测试课程1第一课",
        soop:'../../icons/icon_09.gif',
        some:'音频'
       }
    ]
  },
  audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  audio14: function () {
    this.audioCtx.seek(14)
  },
  audioStart: function () {
    this.audioCtx.seek(0)
  },
  //事件处理函数
  bindHeaderTap: function (event) {
    this.setData({
      current: event.target.dataset.index,
    });
    this.toggleShift()
  },
  bindSwiper: function (event) {
    this.setData({
      current: event.detail.current,
    });
    this.toggleShift()
  },
  toggleShift: function (e) {
    this.shiftanimation.left(shiftdata[this.data.current]).step()
    this.setData({
      shiftanimation: this.shiftanimation.export()
    })
  },

  //Scroll事件
  onLoad: function () {
    console.log('onLoad')
    this.shiftanimation = wx.createAnimation({
      duration: 500,
      timingFunction: "ease",
    })
    this.shiftanimation.left("0%").step();
    this.setData({
      shiftanimation: this.shiftanimation.export()
    })
  }
})



