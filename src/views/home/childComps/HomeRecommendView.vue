<template>
  <div class="recommend">
    <div class="recommend-item" v-for="(item, index) in recommends" :key="index">
      <a href="#">
        <img :src="item.image" alt="">
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
}
</script>

<style scoped>
.recommend {
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 15px;
  padding: 15px 0 30px 0;
  border-bottom: 10px solid #e9e9e9;
}

.recommend-item {
  flex: 1;
}

.recommend-item img {
  width: 72px;
  margin-bottom: 10px;
}
</style>