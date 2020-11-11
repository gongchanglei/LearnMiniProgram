Page({
  data : {
    name : "gcl",
    age : 18,
    students :[
      {id:100,name:'小明',age:18},
      {id:101,name:'小红',age:19},
      {id:102,name:'小强',age:20},
      {id:103,name:'小刘',age:21}
    ],
    counter:0
  },
  handleBtnClick(){
    // counter增加了，但界面没有刷新
    // this.data.counter += 1
    // console.log(this.data.counter)

    // 使用setData()
    this.setData({
      counter:this.data.counter + 1
    })
  },
  handleBtnClick2(){
    this.setData({
      counter:this.data.counter - 1
    })
  }
})
