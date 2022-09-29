export default [
  { id:0,
    title:'Express Koa',
    answer:'Express<br/>优点：线性逻辑，通过中间件形式把业务逻辑细分、简化，一个请求进来经过一系列中间件处理后再响应给用户，清晰明了。<br/>缺点：基于 callback 组合业务逻辑，业务逻辑复杂时嵌套过多，异常捕获困难。<br/><br/>Koa<br/>优点：首先，借助 co 和 generator，很好地解决了异步流程控制和异常捕获问题。其次，Koa 把 Express 中内置的 router、view 等功能都移除了，使得框架本身更轻量。<br/>缺点：社区相对较小',star:4
  },
  
]