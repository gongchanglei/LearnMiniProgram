// pages/input/input.js
Page({
  data: {

  },

  handleInput(event){
    console.log('输入框输入内容：'+event)
  },
  handleFocus(event){
    console.log('输入框获取焦点：'+event)
  },
  handleBlur(event){
    console.log('输入框失去焦点：'+event)
  }

})