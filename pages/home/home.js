// pages/home/home.js
Page({
  data: {
    title:'哈哈'
  },

  handleSwitch(){
    wx.navigateTo({
      url: '/pages/detail/detail',
    })
  }
})
