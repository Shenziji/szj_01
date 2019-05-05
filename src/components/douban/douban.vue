<template>
  <div id="douban">
    <home-title :title="title" v-if="show"></home-title>
    <home-content></home-content>
    <!-- <router-view name="content"></router-view>  -->
    <!-- <router-view name='content'></router-view> -->
  </div>
</template>
<script>
//导入  HomeTitle组件  @表示src所在的目录
import HomeTitle from "@/components/douban/HomeTitle";
import HomeContent from "@/components/douban/HomeContent";
export default {
  data() {
    return {
      title: "",
      show: true
    };
  },
  components: {
    HomeTitle,
    HomeContent
  },
  async created() {
    //  console.log(111,this.$axios.get("/api/v2/movie/top250?count=20&&start=0"));

    let {
      data: { title }
    } = await this.$axios.get("/api/v2/movie/top250?count=20&&start=0");
    this.title = title;
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
</style>