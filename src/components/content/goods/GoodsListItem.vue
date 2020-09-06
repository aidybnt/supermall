<template>
  <div class="goods_list_item">
      <img :src="require('@/assets/img/'+goodsItem.img+'.jpeg')" alt="">
      <p>{{ goodsItem.title }}</p>
      <p>价格：{{ goodsItem.price }}.00---收藏{{ goodsItem.likes }}</p>
  </div>
</template>

<script>

export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.goods_list_item {
  width: 47%;
  margin-top: 6px;
}

.goods_list_item img {
  width: 100%;
  margin: 0 auto;
  border-radius: 6px;
}

.goods_list_item p {
  width: 100%;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>