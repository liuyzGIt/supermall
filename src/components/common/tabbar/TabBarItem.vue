<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props:{
      path:{
        type: String
      },
      activeClass:{
        type: String,
        default: 'coral'
      }
    },
    computed:{
      isActive(){
        return this.$route.path.startsWith(this.path)
      },
      activeStyle(){
        return this.isActive? {color: this.activeClass}: {}
      }
    },
    methods:{
      itemClick(){
        this.$router.push(this.path)
      }
    }

  }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    height: 49px;
    text-align: center;
    font-size: 14px;
  }

  .tab-bar-item img{
    height: 24px;
    width: 24px;
    vertical-align: middle;
  }

</style>
