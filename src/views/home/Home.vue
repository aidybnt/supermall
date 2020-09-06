<template>
  <div id="home" ref="swiperWidth">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <!-- v-if解决异步加载轮播图失效问题 :style="{height:swheight + 'px'}-->
    <swiper :banners="banners" v-if="banners.length"></swiper>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
    <HomeFeature></HomeFeature>
    <TabControl :titles="titles" @tabClick="tabClick"></TabControl>
    <goods-list :goods="showGoods"></goods-list>
  </div>
</template>

<script>
import {getHomeMultiData, getHomeGoods} from "@/network/home";
import NavBar from "@/components/common/navbar/NavBar";
import swiper from "@/views/home/childComps/swiper";
import HomeRecommendView from "@/views/home/childComps/HomeRecommendView";
import HomeFeature from "@/views/home/childComps/HomeFeature";
import TabControl from "@/components/content/tabControl/TabControl";
import GoodsList from "@/components/content/goods/GoodsList";

export default {
  name: "Home",
  components: {
    HomeFeature,
    swiper,
    NavBar,
    HomeRecommendView,
    TabControl,
    GoodsList
  },
  data() {
    return {
      banners: [],
      recommends: [],
      titles: ['流行', '新款', '精选'],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []},
      },
      currentType: 'pop'
    }
  },
  created() {
    this.doHomeMultiData()
    this.doHomeGoods('pop')
    this.doHomeGoods('new')
    this.doHomeGoods('sell')
  },
  methods: {
    /*
    事件监听
    * */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      console.log(index);
    },
    /***
     * 网络请求
     */
    doHomeMultiData() {
      getHomeMultiData().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    doHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data)
        this.goods[type].page += 1
        console.log(res.data);
      })
    },
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType]
    }
  }
}
</script>

<style scoped>
.home-nav {
  background-color: var(--main-bg-color);
  color: white;
}
</style>