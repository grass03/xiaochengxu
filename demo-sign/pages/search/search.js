Page({
  data: {
    // banner 初始化
    banner_url: ['../../icons/banner01.png', '../../icons/banner02.png', '../../icons/banner03.png', '../../icons/banner04.png', '../../icons/banner05.png'],
    indicatorDots: true,//是否显示指示点
    vertical: false,//是否为纵向
    autoplay: false,
    indicatorcolor: 'green',
    interval: 3000,//自动切换时长
    duration: 1000,//滑动时长
    nums: [
      {name: '我的课程' },
      {name: '精选专题' }
    ],
    contentList: [
      {
        shopping: '../../icons/banner01.png',
        title: '高级人脉养成术 | 结识你生命中的“贵人”,让身价提升10倍',
        bt_text: '文学体裁的一种，侧重于事件发展过程的描述。强调情节的生动性和连贯性，较适于口头讲述'
      },
      {
        shopping: '../../icons/banner05.png',
        title: '高级人脉养成术 | 结识你生命中的“贵人”,让身价提升10倍',
        bt_text: '文学体裁的一种，侧重于事件发展过程的描述。强调情节的生动性和连贯性，较适于口头讲述'
      }
    ]
    },
  onLoad: function (options) {
    this.setData({
      title: options.title
    })
  },
  detailed: function(e) {
    wx.navigateTo({
      url: '../detailed/detailed',
    })
  }
})