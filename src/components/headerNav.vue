<template>
  <div id="head">
    <!-- 提示 -->

    <!-- 小装饰s -->
    <div class="pgy">
      <span class="small_pgy"></span>
      <span class="big_pgy"></span>
    </div>
    <!-- 小装饰e -->

    <!-- 小火箭 -->
    <!-- <span class="iconfont icon-icon-test top"></span> -->
    <!-- /小火箭 -->
    <div class="bg_header"></div>
    <!-- 抬头header -->
    <header id="header">
      <nav class="header_content">
        <div id="logo">
          <!-- <img src="" alt="鬼鬼个人博客"> -->
          <a href="javascript:(0)">
            <span>鬼</span>
            <span>鬼</span>
            <span>の</span>
            <span>博</span>
            <span>客</span>
          </a>
        </div>
        <nav class="header_nav clearfix">
          <ul class="nav_list">
            <li>
              <!-- <a href="#" class="active">首页</a> -->
              <router-link :to="{name: 'index'}">首页</router-link>
            </li>
            <li>
              <a href="#" class>文章</a>
            </li>
            <li>
              <a href="G:/sss/1JS/999个人博客/201938/999个人博客/search.html" class>视频搜索</a>
            </li>
            <li>
              <!-- <a href="G:/sss/1JS/999个人博客/201938/999个人博客/canvas.html" class="">canvas</a> -->
              <router-link :to="{name: 'canvas'}">canvas</router-link>
              <ul>
                <router-link :to="{name: 'canvas'}" tag="li">第一</router-link>
                <router-link :to="{name: 'musicCanvas'}" tag="li">第二</router-link>
                <router-link :to="{name:'canvas'}" tag="li">第三</router-link>
              </ul>
            </li>
            <li>
              <router-link :to="{name:'douban'}">豆瓣电影</router-link>
            </li>
          </ul>
        </nav>
        <div class="register">
          <ul>
            <li>
              <a href>注册</a>
            </li>
            <li>
              <a href>登录</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <!-- /抬头header -->
  </div>
</template>
<script>
import "muse-ui/dist/muse-ui.css";
export default {};
</script>
<style>
/* 抬头彩色进度条 */

.bg_header {
  position: fixed;
  top: 0;
  overflow: hidden;
  width: 100%;
  height: 2px;
  background: url("../../static/img/header_bj.gif");
  /* animation: through 10s linear infinite */
}
/* end抬头彩色进度条 */

/* 装饰物 */
.pgy span {
  display: block;
  position: fixed;
  bottom: 0;
  background: url("../../static/img/pgy.png") no-repeat;
  z-index: 999;
}

.pgy .small_pgy {
  width: 36px;
  height: 63px;
  left: 21px;
  background-position: 0px -87px;
  transform-origin: bottom center;
  animation: yaobai 3s linear 1s infinite alternate;
}

.pgy .big_pgy {
  width: 66px;
  height: 113px;
  left: 57px;
  background-position: -85px -36px;
  transform-origin: bottom center;
  animation: yaobai 3s linear 1s infinite alternate;
}

@keyframes yaobai {
  0% {
    transform: rotate(0deg);
  }

  20% {
    transform: rotate(5deg);
  }

  40% {
    transform: rotate(0deg);
  }

  60% {
    transform: rotate(-5deg);
  }

  80% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(5deg);
  }
}

.clearfix {
  zoom: 1;
}

/* header */
#header {
  position: fixed;
  top: 2px;
  width: 100%;
  height: 60px;
  line-height: 60px;
  background-color: rgba(175, 157, 138, 0.7);
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.15);
  z-index: 999;
}

.header_content {
  width: 1190px;
  margin: auto;
  height: 60px;
  line-height: 60px;
  color: #eee;
  font-size: 13px;
}

#logo {
  position: relative;
  float: left;
  /* width: 70px; */
  height: 100%;
}

#logo::after {
  overflow: hidden;
  position: absolute;
  display: block;
  content: "";
  top: 5px;
  left: 150px;
  width: 1px;
  height: 50px;
  background-color: rgba(254, 254, 254, 0.2);
}

#logo span {
  display: inline-block;
  margin: 1px;
  color: #eee;
  font-size: 20px;
  font-weight: bold;
}

#header .header_nav {
  float: left;
  width: 800px;
  height: 100%;
  margin-left: 50px;
}

#header .header_nav .nav_list {
  height: 50px;
  margin: 5px 0;
}

#header .header_nav .nav_list > li {
  position: relative;
  float: left;
  min-width: 80px;
  height: 40px;
  line-height: 40px;
  margin: 5px 10px;
  text-align: center;
  font-size: 18px;
}

#header .header_nav .nav_list > li > a {
  position: relative;
  overflow: hidden;
  display: block;
  color: #eee;
  transition: all 0.2s;
}

#header .header_nav .nav_list > li > a::after {
  position: absolute;
  display: block;
  content: "";
  /* top: 38px; */
  bottom: 0;
  width: 0;
  left: 50%;
  height: 2px;
  background-color: #fff;
  transition: all 0.2s;
}

#header .header_nav .nav_list > li > a:hover {
  /* transform: scale(1.1); */
  color: rgb(233, 58, 58);
  /* color: #eee; */
  text-decoration: none;
}

#header .header_nav .nav_list > li > a:hover::after {
  width: 100%;
  left: 0;
}
#header .header_nav .nav_list .active {
  color: rgb(233, 58, 58);
}
#header .header_content .register {
  float: right;
}

#header .header_content .register > ul {
  height: 50px;
  margin: 5px 0;
}

#header .header_content .register > ul > li {
  float: right;
  min-width: 40px;
  height: 40px;
  line-height: 40px;
  margin: 5px 15px;
  text-align: center;
  font-size: 16px;
}

#header .header_content .register a {
  transition: color 0.3s;
}

#header .header_content .register a:hover {
  color: #eee;
}
/* logo文字跳动 */

#logo span:nth-child(1) {
  animation: jump 0.2s 5s alternate infinite;
}
#logo span:nth-child(2) {
  animation: jump 0.2s 5.1s alternate infinite;
}
#logo span:nth-child(3) {
  animation: jump 0.2s 5.2s alternate infinite;
}
#logo span:nth-child(4) {
  animation: jump 0.2s 5.3s alternate infinite;
}

#logo span:nth-child(5) {
  animation: jump 0.2s 5.4s alternate infinite;
}

@keyframes jump {
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-3px);
  }
}

/* 置顶小火箭 */

.icon-icon-test {
  position: fixed;
  display: none;
  z-index: 999;
  right: 20px;
  bottom: 30px;
  font-size: 44px !important;
}
.icon-icon-test:hover {
  cursor: pointer;
}

/* 菜单弹出框 */

.nav_list > li > ul {
  position: absolute;
  top: 50px;
  background-color: #fff;
  border-radius: 3px;
  transition: 0.3s;
  opacity: 0;
  visibility: hidden;
  transform: translateY(18px);
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.15);
}
.nav_list > li > ul::before {
  position: absolute;
  content: "";
  display: block;
  border: 10px solid transparent;
  border-bottom-color: #fff;
  left: 50%;
  transform: translateX(-50%) translateY(-20px);
}
.nav_list > li > ul > li {
  min-width: 90px;
  /* height: 30px; */
  /* margin: 5px; */
  color: #888;
  font-size: 16px;
  text-align: center;
  transition: 0.2s;
}
.nav_list > li > ul > li:hover {
  cursor: pointer;
  background-color: #a2dfec;
}
.nav_list > li:hover > ul {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}
#header .register a {
  color: #fff;
}
</style>