<template>
<div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
      name: "TabBar"
  }
</script>

<style scoped>
  .tab-bar{
    padding: 0;
    margin: 0;

    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;

    box-shadow: 0px -2px 1px rgba(100, 100, 100, 0.1);
  }
</style>
