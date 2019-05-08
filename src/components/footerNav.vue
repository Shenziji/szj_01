<template>
  <div id="ft">
    <!-- footer -->
    <footer id="footer">
      <div class="footer_box">
        <div class="footer_msg">
          <span>© CopyRight 2018-2019, 待完善</span>
          <p>备案：待备案</p>
        </div>
      </div>
    </footer>
    <!-- /footer -->
  </div>
</template>
<script>
export default {};
</script>
<style>
#ft{
  position: absolute;
  bottom: 1.2rem;
}
#footer {
  width: 100%;
  /* height: 500px; */
  font-size: 12px;
}
#footer .footer_box {
  width: 1190px;
  /* height: 500px; */
  margin: 0 auto;
  /* background-color: hotpink; */
  text-align: center;
}
#footer .footer_box .footer_msg {
  padding-top: 20px;
  margin-bottom: 10px;
  color: #aaa;
}
.footer_msg p {
  margin-top: 5px;
}
</style>