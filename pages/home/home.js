// pages/home/home.js
import request from '../../service/network.js'
Page({
  data:{

  },

  onLoad:function(options){
    // this.get_data_origin()

    // 使用封装的request发送网络请求
    // promise请求方式
    request({
      url:'http://123.207.32.32:8000/recommend',
    }).then(res=> {
      console.log(res)
    }).catch(err=> {
      console.log(err)
    })
  
  },

  get_data_origin(){
      
    // 发送网络请求 

    // 1 不带参数的get请求
    // wx.request({
    //   url: 'http://123.207.32.32:8000/recommend',
    //   success:function(res){
    //     console.log(res)
    //   }
    // })

    // 2 带参数的get请求 
    // wx.request({
    //   url: 'http://123.207.32.32:8000/home/data',
    //   data:{
    //     type:'sell',
    //     page:1
    //   },
    //   success:function(res){
    //     console.log(res)
    //   }
    // }),

    // 带参数的post请求
    wx.request({
      url: 'http://httpbin.org/post',
      method:'post',
      data:{
        type:'sell', 
        page:1
      },
      success:function(res){
        console.log(res)
      }
    })

  }
})
