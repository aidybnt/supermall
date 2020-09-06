<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "@/components/content/mainTabbar/MainTabBar";

export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
@import "assets/css/base.css";

#app {
  max-width: 750px;
  margin: 0 auto;
  box-shadow: 0 -1px 9px rgba(150, 150, 150, 0.3);
}
</style>
