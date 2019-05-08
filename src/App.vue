<template>
  <div id="app">
    <bg></bg>
    <click></click>
    <!-- 小火箭 -->
    <span class="iconfont icon-icon-test top"></span>
    <!-- /小火箭 -->
    <hd-nav></hd-nav>
    <banner></banner>
    <router-view></router-view>
    <ft-nav></ft-nav>
  </div>
</template>

<script>
import { music } from "../static/js/music.js";
export default {
  name: "App",
  methods: {
    
  },
  created() {
    open()
    // console.log(music);
  },
  mounted() {
    // 页面提示
    

    // 取消右键默认事件
    window.oncontextmenu = function(e) {
      console.log("别皮哟~");
      e = e || window.event;
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    // 监听页面状态
    window.addEventListener("visibilitychange", function() {
      if (document.visibilityState === "hidden") {
        document.title = "你快回来~";
      }
      if (document.visibilityState === "visible") {
        document.title = "鬼鬼-个人博客";
      }
    });

    // 置顶
    const TOP = document.querySelector(".top");
    let canRun = true, //节流标记
      offsetValue = 0,
      timer = null,
      stop;
    window.onscroll = function() {
      if (!canRun) return;
      if (document.documentElement.scrollTop < 400) {
        TOP.style.display = "none";
        return;
      }
      canRun = false;
      TOP.style.display = "block";
      setTimeout(function() {
        offsetValue = document.documentElement.scrollTop;
        // console.log(offsetValue)
        canRun = true;
      }, 500);
    };
    TOP.onclick = function() {
      if (offsetValue < 400) {
        TOP.style.display = "none";
        return;
      } else {
        goTop();
      }
    };
    function goTop() {
      document.documentElement.scrollTop *= 0.93;
      // console.log(offsetValue)
      if (document.documentElement.scrollTop <= 0) {
        cancelAnimationFrame(stop);
      } else {
        stop = requestAnimationFrame(goTop);
      }
    }
  },
  watch: {
    "$route.path": function(to, from) {
      if (to !== "/first") {
        console.log("false");
        let a = false;
        console.log(music(a));

        music(a);
      }

      //console.log(newVal+"---"+oldVal);
      // if(newVal === '/canvas'){
      //   console.log('canvas');
      // } else if(newVal === '/first'){
      //   console.log('first');
      // }
    }
  }
};
</script>

<style>
*,
:after,
:before {
  box-sizing: content-box !important;
  -webkit-box-sizing: content-box !important;
}
#app {
  position: relative;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
  height: 1500px;
}
* {
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
  color: #666;
}
ul,
li {
  list-style: none;
}
::-webkit-scrollbar {
  width: 8px;
  height: 5px;
}
::-webkit-scrollbar-track {
  /*滚动条的背景区域的内阴影*/
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3) inset;

  /*滚动条的背景区域的圆角*/
  border-radius: 10px;

  /*滚动条的背景颜色*/
  background-color: #ddd;
}
::-webkit-scrollbar-thumb {
  background-color: rgba(250, 47, 47, 0.5);
  background-image: -webkit-linear-gradient(
    45deg,
    rgba(250, 44, 44, 0.3) 25%,
    transparent 0,
    transparent 50%,
    rgba(36, 107, 240, 0.3) 0,
    rgba(59, 228, 250, 0.3) 75%,
    transparent 0,
    transparent
  );
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:active {
  background-color: rgba(0, 174, 255, 0.5);
}
</style>
