export default [
  { id:0,
    title:'CDN',
    answer:'将各种缓存服务器分布到用户访问相对集中的地区，用户访问网络时，利用全局负载均衡技术将用户的访问指向距离最近的正常工作的缓存服务器中去，由缓存服务器直接响应用户请求<br/>过程<br/>1.用户输入www.web.com域名，浏览器第一次没有本地DNS缓存，则向DNS服务器请求<br/><br/>2.网站的DNS域名解析器设置了CNAME，指向www.web.51cnd.com，请求指向了CDN网络中的智能DNS负载均衡系统<br/><br/>3.智能DNS负载均衡系统解析域名，把对用户响应速度最快的的IP节点（CDN服务器）返回给用户<br/><br/>4.用户向该IP节点发送请求<br/><br/>5.由于是第一次访问，CDN服务器会向原web站点发请求，并缓存内容<br/><br/>6.请求结果发送给用户<br/><br/>在性能方面，引入CDN的作用在于：<br/><br/>1.用户收到的内容来自最近的数据中心，延迟更低，内容加载更快<br/>2.部分资源请求分配给了CDN，减少了服务器的负载',
    star:4
  },
  
]