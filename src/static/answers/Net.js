export default [
  { id:0,
    title:'GET和POST的请求的区别',
    answer:'应用场景： GET 请求是一个幂等的请求，一般 Get 请求用于对服务器资源不会产生影响的场景，比如说请求一个网页的资源。而 Post 不是一个幂等的请求，一般用于对服务器资源会产生影响的情景，比如注册用户这一类的操作。<br/>是否缓存： 因为两者应用场景不同，浏览器一般会对 Get 请求缓存，但很少对 Post 请求缓存。<br/><br/>请求长度： 浏览器由于对 url 长度的限制，所以会影响 get 请求发送数据时的长度。这个限制是浏览器规定的，并不是 RFC 规定的。<br/><br/>GET产生一个TCP数据包，head和data一起发送。POST产生两个TCP数据包，header先发送，服务器响应100ms然后继续，发送data，服务器200然后返回数据',star:4
  },
  
]