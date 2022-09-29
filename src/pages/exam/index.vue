<template>
  <div class="wrapper">
    <Exam :question="list[curPage]" @prev="prev" @next="next" :last="last"/>
    <el-button class="btn" type="success" icon="el-icon-house" circle @click="$router.push('/')"></el-button>
  </div>
</template>

<script>
import Exam from '../../components/Exam';
import { getVueList,getReactList,getHtmlList,getCssList,getNetList,getWriteList,getOptimizeList,getNodeList,getWebpackList,getJavascriptList } from "@/api";
export default {
  props: {},
  components: {
    Exam
  },
  data() {
    return {
      list:[],
      curPage:0,
      last:false,
      map:{
        Vue : getVueList,
        React : getReactList,
        Html : getHtmlList,
        Css : getCssList,
        Net : getNetList,
        Write : getWriteList,
        Optimize : getOptimizeList,
        Node : getNodeList,
        Webpack : getWebpackList,
        Javascrip : getJavascriptList
      }
    };
  },
  methods: {
    async getList(path) {
      let result = await this.map[path]();
      this.list = result.data;
      console.log(path,222);
    },
    prev(id){
      this.last = false
      this.curPage = id - 1;
    },
    next(){
      this.curPage !== this.list.length -1 && this.curPage++;
      this.curPage == this.list.length -1 && (this.last = true)
    }
  },
  mounted() {
    this.getList(this.$route.query.path);
    
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
}
.btn{
  position: fixed;
  right: 40px;
}
</style>
