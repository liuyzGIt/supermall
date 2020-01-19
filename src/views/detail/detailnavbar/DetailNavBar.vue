<template>
    <nav-bar>
      <img slot="left" class="left-nav" src="~@/assets/img/common/back.svg">
      <div slot="center" class="detail-nav">
        <div v-for="(item, index) in titles"
             class="nav-item"
             @click="itemClick(index)"
             :class="{active: currentIndex === index}">
          {{item}}
        </div>
      </div>
    </nav-bar>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'

export default {
  name: "DetailNavBar",
  components: {
    NavBar
  },
  data() {
    return {
      titles:["商品","参数","评论","推荐"],
      currentIndex: 0
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex = index
    }
  }
}
</script>
<style scoped>
  .detail-nav{
    display: flex;
    font-size: 14px;
    text-align: center;
  }
  .nav-item{
    flex: 1;
  }
  .left-nav{
    vertical-align: middle;
  }
  .active{
    color: var(--color-high-text);
  }
</style>
