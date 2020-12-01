// components/w-tab-control/w-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    text:{
      type:Array,
      value:[]
      
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClick(event){
      const index = event.currentTarget.dataset.index
      console.log('-----',index)
      this.setData({
        currentIndex:index
      })

      this.triggerEvent('itemClick',{index , title:this.properties.text[index]},{})
    }

  }
})
