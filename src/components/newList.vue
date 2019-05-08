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
            <el-pagination
              background
              layout="prev, pager, next"
              :total="100"
              @current-change="handleCurrentChange"
            ></el-pagination>
          </div>
        </div>
        <div class="body_container_right">
          <div class="left_calendar">
            <el-calendar v-model="timeValue"></el-calendar>
          </div>
          <div class="left_timeline">
            <span class="left_tag">
              <span>时间线:</span>
            </span>
            <el-timeline :reverse="reverse">
              <el-timeline-item
                v-for="(activity, index) in activities"
                :key="index"
                :timestamp="activity.timestamp"
              >{{activity.content}}</el-timeline-item>
            </el-timeline>
          </div>
        </div>
      </div>
    </div>
    <!-- /container -->
  </div>
</template>
<script>
import canvas from "./canvas/01";
export default {
  data() {
    return {
      reverse: true,
      activities: [
        {
          content: "网站开始建设",
          timestamp: "2019-04-15"
        },
        {
          content: "构思网站结构",
          timestamp: "2019-04-16"
        },
        {
          content: "用vue重构",
          timestamp: "2019-04-25"
        },
        {
          content: "用vue重构",
          timestamp: "2019-04-25"
        },
        {
          content: "用vue重构",
          timestamp: "2019-04-25"
        }
      ],
      timeValue: new Date(),
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
  },
  methods: {
    handleCurrentChange(currentPage) {
      console.log(currentPage);
    }
  },
   watch: {
    $route: {
      handler: function(val, oldVal) {
        console.log(val, oldVal);
        alert(111)
      },
      // 深度观察监听
      deep: true
    }
  }
};
</script>
<style>

/* 时间线组件样式 */
.left_timeline{
  overflow: hidden;
  float: left;
  width: 95%;
  padding: 10px 10px;
  margin: 20px 0;
  /* box-shadow: 0 2px 5px rgba(0,0,0,.15) */
  box-shadow: 0 2px 5px rgba(175, 157, 138, .7)
}
.el-timeline{
  margin: 20px 0!important;
}
.left_tag{
  position: relative;
  margin: 10px 0 ;
  font-size: 1.2rem;
  color: #666;
  user-select: none;

}
.left_tag::before{
  content: '';
  position: absolute;
  width: 5px;
  height: 100%;
  margin-left: -10px;
  border-radius: 0 5px 5px 0;
  /* background-color: #83e1f7; */
  background-color: rgba(175, 157, 138, .7);
}
.left_tag span{
  position: relative;
  user-select: none;
  color: #666;
  font-size: 1.2rem;
}

/* 日历样式 */
.left_calendar{
  overflow: hidden;
  margin: 20px 0;
  padding: 5px;
  /* background-color: #666; */
  border-radius: 5px;
  /* box-shadow: 1px 2px 5px #aaa; */
  box-shadow: 1px 2px 5px rgba(175, 157, 138, .7);
}
.el-calendar-table .el-calendar-day {
  text-align: center;
  height: 35px !important;
}
/* 日历样式end */

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
  /* background-color: #eaeaea; */
  margin: 0 auto;
}

/* #body_box .body_container::after{
  display: block;
  content: "";
  clear: both;
} */
#body_box .body_container_left {
  position: relative;
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
  padding: 0 5px;
  width: 370px;
  height: 880px;
  /* background-color: rgb(149, 65, 65); */
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
  color: #666;
}
#body_box .news_item .news_href a:hover {
  color: orange;
}
.el-pagination {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}
</style>