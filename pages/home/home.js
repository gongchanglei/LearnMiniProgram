// pages/home/home.js
Page({
  data:{
    title:['衣服','鞋子','裤子']
  },

  handleBtnClick(){
    console.log('点击了按钮')
  },
  handleTouchStart(){
    console.log('handleTouchStart')
  },
  handleTouchMove(){
    console.log('handleTouchMove')
  },
  handleTouchEnd(){
    console.log('handleTouchEnd')
  },
  handleTap(){
    console.log('handleTap')
  },
  handleLongPress(){
    console.log('handleLongPress')
  },
  handleEventClick(event){
    console.log(event)
  },

  handleItemClick(event){
    //console.log(event);
    const index = event.currentTarget.dataset.index;
    const item = event.currentTarget.dataset.item;
    console.log(index,item);
  }
})
