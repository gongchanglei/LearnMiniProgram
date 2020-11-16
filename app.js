// 注册小程序示例
App({

  // 生命周期函数
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
   // console.log("呵呵呵")
    // 获取用户信息，已废弃
    // wx.getUserInfo({
    //   success: function(res){
    //     console.log(res)
    //   }
    // })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow（界面显示出来时）
   */
  onShow: function (options) {
   // console.log("界面显示出来时")
   // console.log(options)  // 进入小程序方式
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide（关闭界面时）
   */
  onHide: function () {
   // console.log("关闭界面")
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },

  // App属性 全局属性
  globalData:{
    name:'gcl',
    age:18
  }

})
