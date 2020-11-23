// pages/wxml/wxml.js
Page({

  data: {
    firstname:'g',
    lastname:'cl',
    age:10,
    nowTime:new Date().toLocaleString(),
    isActive:false,
    isShow:true,
    movies:["大话西游",'超人','绿巨人'],
    nums:[
      [1,2,3],
      [4,5,6],
      [7,8,9],
    ]
  },

  onLoad(){
    setInterval( ()=>{
      this.setData({
        nowTime:new Date().toLocaleString()
      })
    },1000)
  },

  handleSwitch(){
    this.setData({
      isActive:!this.data.isActive
    })
  },

  handleShow(){
    this.setData({
      isShow:!this.data.isShow
    })
  }

})