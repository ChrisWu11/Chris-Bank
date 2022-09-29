<template>
  <div class="container">
    <div class="exam_wrapper">
      <div class="title">{{question.title}}</div>
      <div class="answer">答案：<br> <div v-html="question.answer"></div></div>
      <el-input v-model="input" placeholder="0~100" class="input"></el-input>
      <div class="option">
        <el-button-group class="btn_group">
          <el-button type="primary" icon="el-icon-arrow-left" @click="prev" v-if="question.id !==0">上一题</el-button>
          <el-button v-if="!last" type="primary" @click="next">下一题<i class="el-icon-arrow-right el-icon--right"></i></el-button>
          <el-button v-else type="primary">提交</el-button>
        </el-button-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['question','last'],
  components: {},
  data() {
    return {
      input: "",
    };
  },
  methods: {
    prev(){
      this.question.id !== 0 && this.$emit('prev',this.question.id)
    },
    next(){
      this.$emit('next')
    }
  },
  mounted() {},
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
}
.exam_wrapper{
  width: 60vw;
  background-color: rgba(156, 156, 156, 0.219);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
}
.title{
  font-weight: 550;
  color: rgb(48, 47, 47);
  font-size: 32px;
  width: 100%;
  margin-bottom: 10px;
}
.answer{
  font-size: 20px;
  width: 100%;
  margin-bottom: 30px;
  word-wrap: break-word;
  word-break: normal;
}
.input{
  width: 200px;
  position: relative;
  word-wrap: break-word;
  word-break: normal;
  margin-bottom: 30px;
}
.input::after{
  position: absolute;
  right: -40px;
  font-size: 26px;
  content: '分';
}
.btn_group{
  width: 60vw;
  display: flex;
  justify-content: space-between;
}
</style>
