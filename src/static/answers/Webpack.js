export default [
  { id:0,
    title:'Loader Plugin',
    answer:'Loader <br/>用于对模块源码的转换，描述了webpack怎么处理非JavaScript文件，并且在buld中引入依赖。可以将不同语言转换成JavaScript，还可以将内联图像转换成data URL，比如 CSS-Loader ， Style-Loader。<br/><br/>Plugin<br/>目的在于解决Loader无法解决的事情，直接作用于webpack；<br/>在webpack的生命周期中会广播出全部事件，plugin就可以监听此事件，在合适的时机通过webpack的api改变输出结果。<br/>插件的范围包括从优化打包和压缩，一直到重新定义环境中的变量；',star:4
  },
  
]