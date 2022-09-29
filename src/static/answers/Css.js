export default [
  { id:0,
    title:'为什么有时候⽤translate来改变位置⽽不是定位',
    answer:'translate 是 transform 属性的⼀个值。改变transform或opacity不会触发浏览器重新布局（reflow）或重绘（repaint），只会触发复合（compositions）。⽽translate改变位置时，元素依然会占据其原始空间，绝对定位就不会发⽣这种情况。',
    star:4
  },
  { 
    id:1,
    title:'BFC',
    answer:'块格式化上下文（Block Formatting Context，BFC）是Web页面的可视化CSS渲染的一部分，是布局过程中生成块级盒子的区域，也是浮动元素与其他元素的交互限定区域。<br/>创建BFC的条件：<br/>根元素：body；<br/>元素设置浮动：float 除 none 以外的值；<br/>元素设置绝对定位：position (absolute、fixed)；<br/>display 值为：inline-block、table-cell、table-caption、flex等；<br/>overflow 值为：hidden、auto、scroll；',
    star:2
  },
  {
    id:2,
    title:'css主题色',
    answer:'方案一<br/>在css文件顶部定义css变量，注意必须以–开头，使用:root包括这几个变量<br/>在需要的地方使用，使用var()包裹css变量<br/><br/><br/>方案二<br/>@width: 10px;<br/>@height: @width + 10px;',
    star:4
  },
  {
    id:3,
    title:'Px，rem，em 的区别',
    answer:'Px，绝对长度单位，像素 px 是相对于显示器屏幕分辨率来说的<br/>em 相对长度单位，相对于当前对象内文本的字体尺寸<br/>em 的值并不是固定的<br/>em 会继承父级元素的字体大小（参考物是父元素的 font-size）<br/>em 中所有的字体都是相对于父元素的大小决定的<br/>rem 相对于 html 根元素的 font-size<br/>1em=1rem=16px 在 body 中加入 font-size：62.5% 这样直接就是原来的 px 数值除以10上 em 就可以',
    star:4
  },
]