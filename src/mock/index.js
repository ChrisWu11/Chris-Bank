const Mock = require('mockjs')
import CssList from '@/static/answers/Css.js'
import HtmlList from '@/static/answers/Html.js'
import NetList from '@/static/answers/Net.js'
import OptimizeList from '@/static/answers/Optimize.js'
import ReactList from '@/static/answers/React.js'
import VueList from '@/static/answers/Vue.js'
import WebpackList from '@/static/answers/Webpack'
import WriteList from '@/static/answers/Write.js'
Mock.setup({
  timeout: '500-1000'
});

const list = [ 
      {
        id: 1,
        name:'HTML',
        img: 'https://img1.baidu.com/it/u=3247278276,1211678076&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=500',
      },
      {
        id: 2,
        name:"CSS",
        img: 'https://img1.baidu.com/it/u=81277077,3948587356&fm=253&fmt=auto&app=120&f=PNG?w=500&h=500',
      },
      {
        id: 3,
        name:'Javascript',
        img: 'https://img0.baidu.com/it/u=3395025429,823606704&fm=253&fmt=auto&app=138&f=PNG?w=660&h=412',
      },
      {
        id: 4,
        name:"Vue",
        img: 'https://img2.baidu.com/it/u=24623662,3609338383&fm=253&fmt=auto&app=138&f=JPEG?w=404&h=345',
      },
      {
        id: 5,
        name:'Net',
        img: 'https://img1.baidu.com/it/u=92949246,825313466&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
      },
      {
        id: 6,
        name:"React",
        img: 'https://img2.baidu.com/it/u=3545225878,2086373205&fm=253&fmt=auto&app=138&f=JPEG?w=450&h=236',
      },
      {
        id: 7,
        name:'Webpack',
        img: 'https://img0.baidu.com/it/u=2976377426,1544598812&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=277',
      },
      {
        id: 8,
        name:"Node",
        img: 'https://img1.baidu.com/it/u=2773821288,2017523538&fm=253&fmt=auto&app=138&f=PNG?w=500&h=281',
      },
      {
        id: 9,
        name:'Optimize',
        img: 'https://img1.baidu.com/it/u=739688430,2502339427&fm=253&fmt=auto&app=138&f=PNG?w=499&h=338',
      },
      {
        id: 10,
        name:"Write",
        img: 'https://img2.baidu.com/it/u=1330827287,2757801697&fm=253&fmt=auto&app=138&f=JPEG?w=696&h=500',
      }
];


Mock.mock('/typeList','get',() => {
  return list;
})

Mock.mock('/vue','get',() => {
  return VueList;
})

Mock.mock('/react','get',() => {
  return ReactList;
})

Mock.mock('/html','get',() => {
  return HtmlList;
})

Mock.mock('/css','get',() => {
  return CssList;
})

Mock.mock('/net','get',() => {
  return NetList;
})

Mock.mock('/optimize','get',() => {
  return OptimizeList;
})

Mock.mock('/write','get',() => {
  return WriteList;
})

Mock.mock('/webpack','get',() => {
  return WebpackList;
})