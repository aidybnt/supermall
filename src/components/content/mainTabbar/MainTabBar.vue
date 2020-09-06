<template>
  <TabBar>
    <!-- 可自定义设置颜色   <TabBarItem path="/home" style="color: #55a532">-->
    <TabBarItem path="/home" style="">
      <div slot="item-icon">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-tabbarhome"></use>
        </svg>
      </div>
      <div slot="item-text">首页</div>
    </TabBarItem>
    <TabBarItem path="/category">
      <div slot="item-icon">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-TABbar"></use>
        </svg>
      </div>
      <div slot="item-text">分类</div>
    </TabBarItem>
    <TabBarItem path="/cart">
      <div slot="item-icon">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-icontabbarshoppingup"></use>
        </svg>
      </div>
      <div slot="item-text">购物车</div>
    </TabBarItem>
    <TabBarItem path="/profile">
      <div slot="item-icon">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-icprofile"></use>
        </svg>
      </div>
      <div slot="item-text">我的</div>
    </TabBarItem>
  </TabBar>
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar";
import TabBarItem from "@/components/common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>