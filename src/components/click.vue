<template>
  <div id="click">
    <!-- 鼠标点击特效 -->
    <!-- <canvas width="1920" height="943" style="position: fixed; left: 0px; top: 0px; z-index: 2147483647; pointer-events: none;"></canvas> -->
  </div>
</template>
<script>
import clickM from '../../static/js/heart.js'
  export default {

    beforeMount () {
      clickM()
      
    }

  }

</script>
<style>
    

</style>