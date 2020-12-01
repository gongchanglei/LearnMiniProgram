// pages/detail/detail.js
Page({
  // 页面加载时调用
  onLoad: function (options) {
    console.log(options)
  },

  // 页面退出调用
  onUnload:function(){
    // 获取页面对象
    console.log('退出')
    const pages = getCurrentPages()
    const home = pages[pages.length-2]
    home.setData({
      title : '呵呵'
    })
  }


})