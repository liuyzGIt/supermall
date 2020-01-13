<template>
  <div id="home" class="wrapper">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <HomeSwiper :banners="banners"></HomeSwiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control :titles="['流行', '新款', '精选']"></tab-control>
    <GoodsList :goods="goods"></GoodsList>
    <ul>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
      <li>商品</li>
    </ul>
  </div>
</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar"
  import HomeSwiper from "./childComps/HomeSwiper"
  import RecommendView from "./childComps/RecommendView"
  import FeatureView from "./childComps/FeatureView"
  import TabControl from "@/components/contents/tabControl/TabControl"
  import GoodsList from "@/components/contents/goods/GoodsList"

  import { getHomeMultiData, getHomeGoods } from "@/network/home"

  export default {
    name: "Home",
    components:{
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList
    },
    data(){
      return {
        banners: [],
        recommends: [],
        goods:[]
      }
    },
    created() {
      getHomeMultiData().then(res=>{
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })

      let data = this.getHomeGoods('pop')
      this.goods = data
    },
    methods:{
      getHomeGoods(type){
        const page = this.goods[type].page + 1
        let res = getHomeGoods(type, page)
        return res.skulist
      }
    }
  }
</script>

<style scoped>
  #home{
    padding-top: 44px;
    /*height: 100vh;*/
    /*position: relative;*/
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
