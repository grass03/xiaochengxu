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
  
    listCon: [
      { introduce: '礼物' }
    ],
    listtext: [
      {
        hourlist: '礼物',
        hourTime: '12:00',
        title: "送出第一个",
        soop: '../../icons/icon_09.gif',
        some: 'name'
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



