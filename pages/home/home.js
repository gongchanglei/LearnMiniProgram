// pages/home/home.js

// 获取App()的实例化对象
// const app = getApp()
// console.log(app.globalData.name)

// 调用Page方法，注册一个页面，调用App方法注册一个小程序
Page({

  data:{
    list:[]
  },

  // 页面也存在自己的生命周期函数 onLoad onShow ...
  // 页面被加载时调用
  onLoad() {
    // 一般会在onLoad()里获取网络请求，将请求数据保存到变量中，再将其显示在页面上
    wx.request({
      url: 'http://123.207.32.32:8000/recommend',
      success(res){
        console.log(res)
      }
    })
  },
  // 页面显示时调用
  onShow() {

  },
  // 页面初次渲染完成时调用
  onReady(){

  },
  // 页面隐藏起来时调用
  onHide(){

  },
  onUnload(){

  },

  handleGetUserInfo(event){
    console.log(event)
  }
})
