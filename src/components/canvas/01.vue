<template>
  <div id="canvas">
    <div id="body_box">
      <div class="body_container clearfix">
        <div class="body_container_left">
          <div class="news_box">
            <div class="news_detail">
              <!-- <canvas ref='canvas'></canvas> -->
              <div class="canvas">
                <canvas ref='canvas'></canvas>
              </div>
            </div>
            <!-- <el-pagination background layout="prev, pager, next" :total="100"></el-pagination> -->
          </div>
        </div>
        <!-- <div class="body_container_right">
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted ()  {
    const cv = this.$refs.canvas
    console.log(cv);
    const c = cv.getContext("2d");

    // const w = (cv.width = window.innerWidth);
    // const h = (cv.height = window.innerHeight);
    const w = (cv.width = window.innerWidth);
    const h = (cv.height = 500);

    function draw({ clientX = w / 2, clientY = h / 2 }) {
      c.save();
      c.clearRect(0, 0, w, h);
      c.rect(0, 0, w, h);
      c.fill();
      c.globalCompositeOperation = "destination-out";
      const rg = c.createRadialGradient(
        clientX,
        clientY,
        1,
        clientX,
        clientY,
        100
      );
      rg.addColorStop(0, "rgba(0,0,0,1)");
      rg.addColorStop(0.7, "rgba(0,0,0,1)");
      rg.addColorStop(1, "rgba(0,0,0,0)");
      c.beginPath();
      c.fillStyle = rg;
      c.arc(clientX, clientY, 100, 0, 2 * Math.PI);
      c.fill();
      c.restore();
    }
    draw({});
    cv.addEventListener("mousemove", draw);
  }
};
</script>

<style>
#canvas .news_detail {
  margin: 0;
  background: url("../../../static/img/1.gif");
}
#canvas .canvas{
  margin: 0 auto;
  width: 100%;
  height: 500px;
}
</style>