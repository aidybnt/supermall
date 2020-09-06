<template>
  <div class="bar-item" @click="itemClick" :class="{itemActive: isActive}" :style="{color:activeStyle}">
    <slot name="item-icon"></slot>
    <slot name="item-text"></slot>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {}
  },
  computed: {
    //判断当前和this.path
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      // this.$router.push(this.path);    //简写
      //这种浏览器无法返回上一步
      // this.$router.replace()
      this.$router.push({path: this.path});
    }
  }
}
</script>

<style scoped>

/*均等分布*/
.bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}

.bar-item img, .bar-item .icon {
  width: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}

.bar-item .icon {
  /*color: #ff0000;*/
  height: 24px;
}

.itemActive {
  color: red;
}
</style>