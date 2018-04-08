//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  //    wx.login({
  //       success: function (res) {
  //       console.log(res)
  //     }
  // })
  },
  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  qianbao:function() {
      wx.navigateTo({
        url: '../wallet/wallet'
      })
  },
  shoucang: function () {
    wx.navigateTo({
      url: '../shoucang/shoucang'
    })
  },
  libao: function () {
    wx.navigateTo({
      url: '../libao/libao'
    })
  },
  libao: function () {
    wx.navigateTo({
      url: '../libao/libao'
    })
  },
  xiaoxi: function () {
    wx.navigateTo({
      url: '../xiaoxi/xiaoxi'
    })
  },
  fensi: function () {
    wx.navigateTo({
      url: '../fensi/fensi'
    })
  },
  tuiguang: function () {
    wx.navigateTo({
      url: '../tuiguang/tuiguang'
    })
  },
  shouyi: function () {
    wx.navigateTo({
      url: '../shouyi/shouyi'
    })
  },
  fabu: function () {
    wx.navigateTo({
      url: '../fabu/fabu'
    })
  }
})
