<template>
  <div id="container">
    <!-- container -->
    <div id="body_box">
      <div class="body_container clearfix">
        <div class="body_container_left">
          <div class="news_box">
            <div class="news_item" v-for="(item, index) in newData" :key="index">
              <div class="news_img">
                <img :src="item.img" alt>
              </div>
              <div class="news_infor">
                <h1>
                  <span>{{ item.tag }}</span>
                  <a href>{{ item.title }}</a>
                </h1>
                <div class="news_meta">
                  <span>转载</span>
                  <i>•</i>
                  <span>文章</span>
                </div>
                <p>{{ item.content }}</p>
                <div class="news_time">
                  <i></i>
                  <span>{{ item.time }}</span>
                </div>
                <div class="news_href">
                  <a href>阅读全文</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="body_container_right"></div>
      </div>
    </div>
    <!-- /container -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      newData: [
        {
          img: "../../static/img/news/1.png",
          tag: "HTML5/CSS3",
          title: "vue程序化的事件监听器",
          content: `过滤器的介绍
                  1.在Vue中使用过滤器（Filters）来渲染数据是一种很有趣的方式。
                  2.首先我们要知道，Vue中的过滤器不能替代Vue中的methods、computed或者watch，但是...`,
          time: "2019年3月7号"
        },
        {
          img: "../../static/img/news/1.png",
          tag: "HTML5/CSS3",
          title: "vue程序化的事件监听器",
          content: `过滤器的介绍
                  1.在Vue中使用过滤器（Filters）来渲染数据是一种很有趣的方式。
                  2.首先我们要知道，Vue中的过滤器不能替代Vue中的methods、computed或者watch，但是...`,
          time: "2019年3月7号"
        }
      ]
    };
  }
};
</script>
<style>
.clearfix::after {
  visibility: hidden;
  clear: both;
  display: block;
  content: "";
  height: 0;
}
#body_box {
  margin-top: 20px;
}
#body_box .body_container {
  width: 1190px;
  background-color: #eaeaea;
  margin: 0 auto;
}

/* #body_box .body_container::after{
  display: block;
  content: "";
  clear: both;
} */
#body_box .body_container_left {
  float: left;
  overflow: hidden;
  margin: 5px 5px 5px 0;
  max-width: 790px;
  height: 880px;
  /* background-color: pink; */
}
#body_box .body_container_right {
  float: right;
  overflow: hidden;
  margin: 5px 0 5px 10px;
  width: 370px;
  height: 880px;
  background-color: rgb(149, 65, 65);
}
#body_box .news_box {
  /* width: 790px; */
  /* height: 2520px; */
  border-radius: 3px;
  /* background-color: green; */
}
#body_box .news_item {
  position: relative;
  width: 760px;
  height: 175px;
  padding: 15px;
  /* background-color: rgb(240, 243, 61); */
  border-radius: 3px;
  border-bottom: 1px solid #ccc;
  transition: all 0.3s ease-in-out;
}
#body_box .news_item:after {
  display: block;
  content: "";
  position: absolute;
  left: 0;
  bottom: -1px;
  width: 0;
  height: 2px;
  transition: all 0.3s ease-in-out;
  background-color: #1890ff;
}
#body_box .news_item:hover:after {
  width: 100%;
}
#body_box .news_item .news_img {
  overflow: hidden;
  float: left;
  margin-top: 7px;
  margin-right: 5px;
}
#body_box .news_item .news_img:hover img {
  transform: scale(1.1);
}
#body_box .news_item .news_img img {
  width: 220px;
  height: 150px;
  transition: all 0.2s;
}
/*     570  20 */
#body_box .news_item .news_infor {
  position: relative;
  float: right;
  width: 530px;
  height: 150px;
  margin-top: 7px;
  /* background-color: #eaeaea; */
}
#body_box .news_item .news_infor h1 {
  /* width: 500px; */
  height: 30px;
  line-height: 30px;
  font-size: 18px;
}
#body_box .news_item .news_infor h1 span {
  display: inline-block;
  /* margin: 0 6px; */
  line-height: 20px;
  background-color: #1890ff;
  font-size: 12px;
  border-radius: 2px;
}
#body_box .news_item .news_infor h1 a {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #000;
  transition: color 0.2s linear;
  margin-left: 10px;
}
#body_box .news_item .news_infor h1 a:hover {
  /* cursor: pointer; */
  color: #1890ff;
}
#body_box .news_item .news_infor .news_meta {
  margin-top: 8px;
}
#body_box .news_item .news_infor .news_meta span {
  /* margin: 6px; */
  /* color: #eaeaea; */
  color: #000;
}
#body_box .news_item .news_infor .news_meta i {
  margin: 0 6px;
  font-size: 13px;
}
#body_box .news_item .news_infor p {
  /* 超出隐藏*/
  overflow: hidden;
  /* 溢出省略(...)*/
  text-overflow: ellipsis;
  /* CSS3 盒子属性,兼容写法*/
  display: -webkit-box;
  /* 从上往下换行*/
  -webkit-box-orient: vertical;
  /* 多于第二行的省略*/
  -webkit-line-clamp: 2;
  width: 100%;
  height: 49px;
  line-height: 26px;
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
  margin-top: 5px;
}

#body_box .news_item .news_time {
  position: absolute;
  left: 0;
  bottom: 0;
}
#body_box .news_item .news_time span {
  color: orange;
}
#body_box .news_item .news_href a {
  position: absolute;
  display: block;
  right: 0;
  bottom: 0;
  transition: color 0.2s;
}
#body_box .news_item .news_href a:hover {
  color: orange;
}
</style>