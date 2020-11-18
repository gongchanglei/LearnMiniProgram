// pages/image/image.js
Page({

  data: {
    imagePath:""
  },
  handleChooseAlbum(){
    // 系统API，让用户在相册中选择图片活着拍照
    wx.chooseImage({
      success: (res) =>{
        // console.log(res)
        // 1 取出路径
        const path = res.tempFilePaths[0]
        // setData()函数将path值赋给imagePath
        this.setData({
          imagePath:path
        })
      }
    })

  },
  handleImageLoad(){
    console.log('图片加载了')
  }

})