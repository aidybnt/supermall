<template>
  <div id="bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style scoped>
#bar {
  max-width: 750px;
  margin: 0 auto;
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -1px 9px rgba(150, 150, 150, 0.3);
  font-size: 12px;
}
</style>