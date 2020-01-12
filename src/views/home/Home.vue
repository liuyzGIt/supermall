<template>
  <div id="home" class="wrapper">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <HomeSwiper :banners="banners"></HomeSwiper>
  </div>
</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar"
  import HomeSwiper from "./childComps/HomeSwiper"

  import { getHomeMultiData} from "@/network/home"

  export default {
    name: "Home",
    components:{
      NavBar,
      HomeSwiper
    },
    data(){
      return {
        banners: [],
        recommends: []
      }
    },
    created() {
      getHomeMultiData().then(res=>{
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    }
  }
</script>

<style scoped>
  #home{
    height: 100vh;
    position: relative;
  }
  .home-nav{
    background-color: var(--color-tint);
    color: #ffffff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
</style>
