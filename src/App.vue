<template>
  <div id="app">
    <hd-nav/>
    <banner/>
    <newList/>
    <router-view/>
    <ft-nav/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
  height: 1500px;
}
*{
  padding: 0;
  margin: 0;
}
a{
  text-decoration: none;
  color: #666;
}
ul,li{
  list-style: none;
}
</style>
