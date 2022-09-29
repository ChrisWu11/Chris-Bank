export default [
  { id:0,
    title:'八种数据类型',
    answer:'Undefined，Boolean，Null，Number，String，Object，Symbol，BigInt<br/><br/>栈：原始数据类型（Undefined、Null、Boolean、Number、String）<br/>堆：引用数据类型（对象、数组和函数）',
    star:2
  },
  { 
    id:1,
    title:'判断数组的方式',
    answer:'1.Object.prototype.toString.call(obj) === "Array";<br/>2.obj.__proto__ = Array.prototype;<br/>3.Array.isArrray(obj);<br/>4.obj instanceof Array<br/>5.Array.prototype.isPrototypeOf(obj)<br/>6.obj.constructor===Array',
    star:3
  },
  {
    id:2,
    title:'null和undefined区别',
    answer:'null == undefinded    //true<br/>null === undefined    //false',
    star:2
  },
  {
    id:3,
    title:'let、const、var的区别',
    answer:'（1）块级作用域<br/>（2）变量提升<br/>（3）给全局添加属性<br/>（4）重复声明<br/>（5）暂时性死区<br/>（6）初始值设<br/>（7）指针指向',
    star:4
  },
]