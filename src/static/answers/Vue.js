export default [
  { id:0,
    title:'vue响应式原理',
    answer:'采用数据劫持配合发布者-订阅者模式的方式,整合Observer，Compile和Watcher三者,从new Vue开始创建一个Observer对象，对data里面每一个属性进行遍历，定义一个defineReactive的方法,这个方法先对data里面的属性进行深度监听，通过Object.definerProperty()来劫持各个属性的setter和getter，同时创建了一个Dep对象，和data里面的属性是一一对应的，又会去创建Compile来解析编译模板指令，deep中的notify调用Watcher里面update方法对dom做更新',
    star:5
  },
  { 
    id:1,
    title:'MVVM、MVC、MVP的区别',
    answer:'MVC 当用户与页面产生交互的时候，Controller 中的事件触发器就开始工作了，通过调用 Model 层，来完成对 Model 的修改，然后 Model 层再去通知 View 层更新。<br/>MVVM Model和ViewModel之间有着双向数据绑定的联系。因此当Model中的数据改变时会触发View层的刷新，View中由于用户交互操作而改变的数据也会在Model中同步',
    star:3
  },
  {
    id:2,
    title:'Computed 和 Watch 的区别',
    answer:'computed 计算属性 : 依赖其它属性值，并且 computed 的值有缓存，只有它依赖的属性值发生改变，下一次获取 computed 的值时才会重新计算 computed 的值,一对多。<br/>watch 侦听器 : 更多的是观察的作用，无缓存性，类似于某些数据的监听回调，每当监听的数据变化时都会执行回调进行后续操作。可以异步操作，一对一。',
    star:2
  },
  {
    id:3,
    title:'v-if和v-show的区别',
    answer:'手段：v-if是动态的向DOM树内添加或者删除DOM元素；v-show是通过设置DOM元素的display样式属性控制显隐；<br/>性能消耗：v-if有更高的切换消耗；v-show有更高的初始渲染消耗；',
    star:2
  },
]