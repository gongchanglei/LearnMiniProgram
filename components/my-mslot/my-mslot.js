// components/my-mslot/my-mslot.js
Component({

  // properties:用于向组件中传入数据
  properties:{

  },

  // date:组件内部定义的数据
  data:{

  },

  // method:用于定义组件内部的函数
  methods:{

  },

  // options:用于定义组件的配置
  // multipleSlots:使用多插槽时设置为true
  // styleIsolation:样式隔离
  options:{
    multipleSlots:true
  },

  // 向组件转递样式
  externalClasses:[],

  // 监听propertiones/date的改变
  observers:{
    counter:function(newValue){

    }
  },

  //组件中监听生命周期函数
  // 1 监听组件所在页面的生命周期
  PageLifeTimes:{
    show(){
      console.log('监听组件所在页面出现时')
    },
    hide(){
      console.log('监听组件所在页面隐藏时')
    },
    resize(){
      console.log('监听组件所在页面尺寸改变时')
    }

    
  },

  // 2 监听组件自身生命周期函数
  lifetimes:{
    created(){
      console.log('组件被创建出来')
    },

    attached(){
      console.log('组件被添加到页面')
    },

    ready(){
      console.log('组件被渲染出来')
    },

    move(){
      console.log('组件被移到另外一个节点')
    },

    dettached(){
      console.log('组件被移除掉')
    },

  }

})
