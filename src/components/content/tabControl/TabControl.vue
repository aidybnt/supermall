<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" :key="index"
         class="tab-control-item" :class="{active: index === currentIndex}" @click="itemClick(index)">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('tabClick', index)
    }
  },
  mounted() {

  }
}
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  padding: 12px 0;
  position: sticky;
  top: 44px;
  background-color: #fff;
}

.tab-control-item {
  flex: 1;
}

.active {
  color: #ff725e;
}

.active span {
  padding: 6px;
  border-bottom: 1px solid #ff725e;
}
</style>