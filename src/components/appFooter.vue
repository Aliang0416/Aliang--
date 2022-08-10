<template>
  <div class="footer-continer">
    <van-tabbar route  active-color="#007bff">
  <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
  <van-tabbar-item to="/user" icon="user-o" info="5">我的</van-tabbar-item>
</van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="less">
.footer-continer {
  height: 50px;
}
</style>
