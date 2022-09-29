<template>
  <div class="wrapper">
    <div class="box_wrapper">
      <div
        class="box_item"
        v-for="(item, index) in typeList"
        :key="index"
        @click="toPath(item.name)"
      >
        <div class="box" :class="{ active: checkIndex == index }">
          <img :src="item.img" class="img" />
        </div>
        <div class="box_name">{{ item.name }}</div>
      </div>
    </div>
    <el-button type="primary" round @click="start">随机抽取</el-button>

    <!-- <el-dialog
      title="提示"
      :visible.sync="isMdOpen"
      width="80%"
      height="100%"
      :before-close="handleClose"
    > -->
      <!-- <div class="markdown-body">
        <VueMarkdown :source="value" v-highlight></VueMarkdown>
      </div> -->

    <!-- </el-dialog> -->
  </div>
</template>

<script>
import { getType } from "@/api";
export default {
  name: "Home",
  props: {},
  components: {

  },
  data() {
    return {
      value: "",
      isMdOpen: false,
      checkIndex: 0,
      typeList: [],
      time: 0, // 当前时间戳
      timer: null, // 定时器
      current: 0, // 当前索引值
      randomNum: -1,
      diff: 15, // 基数
    };
  },
  methods: {
    async getTypeList() {
      let result = await getType();
      this.typeList = result.data;
      // console.log(result);
    },
    start() {
      // 开始抽奖
      this.move();
      this.time = Date.now();
      this.speed = 200;
      this.randomNum = Math.floor(Math.random() * this.typeList.length);
    },
    // 开始转动
    move() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.checkIndex++;
        if (this.checkIndex > this.typeList.length - 1) {
          this.checkIndex = 0;
        }
        if ((Date.now() - this.time) / 1000 > this.randomNum) {
          clearTimeout(this.timer);
          this.isMdOpen = true;
          return;
        }
        this.move();
      }, this.speed);
    },
    handleClose(done) {
      done();
    },
    toPath(path){
      this.$router.push({ path: '/exam', query:{ path }})
    }
  },
  mounted() {
    this.getTypeList();
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
.box_wrapper {
  width: 50vw;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 50px;
}
.box_item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.box {
  width: 60px;
  height: 60px;
  background-color: antiquewhite;
  margin-bottom: 10px;
}
.img {
  width: 100%;
  height: 100%;
}
.active {
  border: 5px solid rgb(195, 0, 255);
}
</style>
