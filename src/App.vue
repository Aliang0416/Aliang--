<template>
<div id="app">
  <keep-alive include="Home">
    <router-view></router-view>
  </keep-alive>
  <Footer/>
</div>
</template>

<script>
import Footer from './components/appFooter.vue'
export default {
  components: { Footer }

}
</script>

<style>

</style>
