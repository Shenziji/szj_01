<template>
  <div id="canvas">
    <div id="body_box">
      <div class="body_container clearfix">
        <div class="body_container_left">
          <div class="news_box">
            <div class="news_detail">
              <!-- <canvas ref='canvas'></canvas> -->
              <div class="canvas">
                <div class="canvas_title">把音乐拖放到蓝色区域</div>
                <canvas></canvas>
              </div>
            </div>
            <!-- <el-pagination background layout="prev, pager, next" :total="100"></el-pagination> -->
          </div>
        </div>
        <!-- <div class="body_container_right">
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </div>-->
      </div>
    </div>
  </div>
</template>
<script>
import { music } from "../../../static/js/music.js";
export default {
  mounted() {
    music();
  },
  watch: {
    '$route.path':function(newVal,oldVal){
        //console.log(newVal+"---"+oldVal);
        if(newVal === '/canvas'){
          console.log('欢迎进入登录页面');
        } else if(newVal === '/first'){
          console.log('欢迎进入注册页面');
        }
      }
  }
};
</script>
<style scoped>
#canvas .canvas {
  margin: 0 auto;
  width: 100%;
  text-align: center;
}
.canvas_title {
  margin: 0 auto;
  text-align: center;
}
#canvas canvas {
  width: 1190px;
  height: 500px;
  background-color: skyblue;
}
</style>