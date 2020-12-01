// pages/home/home.js
Page({
  handleToast(){
    wx.showToast({
      title: '加载中ing',
      duration:3000,
      icon:'loading'
    })
  },

  handleModal(){
    wx.showModal({
      title:'标题',
      content:'内容',
      success:function(res){
        console.log(res)
      }
    })
  },

  handleLoading(){
    wx.showLoading({
      title: '加载ing',
    })
  },

  handleAction(){
    wx.showActionSheet({
      itemList: ['相册','拍照'],
      success:function(res){
        console.log(res)
      }
    })
  },

  // 开启分享
  onShareAppMessage:function(options){
    return{
      title:'hello',
      path:'/pages/about/about' // 点击后直接进入页面路径
    }
  }
})
