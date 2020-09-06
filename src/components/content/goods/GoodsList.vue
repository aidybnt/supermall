<template>
  <div class="goods_list">
    <GoodsListItem
        v-for="(item, index) in goods.list" :key="index"
        :goods-item="item">
    </GoodsListItem>
  </div>
</template>

<script>
import GoodsListItem from "@/components/content/goods/GoodsListItem";

export default {
  name: "GoodsList",
  components: {
    GoodsListItem
  },
  props: {
    goods: {
      type: Object,
      default() {
        return [];
      }
    }
  }
}
</script>

<style scoped>
.goods_list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}


</style>