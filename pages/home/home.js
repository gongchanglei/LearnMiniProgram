// pages/home/home.js
Page({
 
  data: {
    count:0
  },
  
  handleIncrement(){
    //console.log('!!!')
    this.setData({
      count:this.data.count + 1
    })
  },
  handleClickItem(event){
    console.log(event)
  },

  // 修改组件数据
  handleClick(){
    // 获取组件对象
    const my_sel = this.selectComponent('#sel-id')
    console.log(my_sel)

    // 通过setdata修改数据(不太规范)
    // my_sel.setData({
    //   counter:my_sel.data.counter+1
    // })

    // 通过调用组件内部函数进行修改
    my_sel.incrementNum(10)

  }
})
