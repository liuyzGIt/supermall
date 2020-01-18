<template>
  <div id="home" class="wrapper">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            :pull-up-load="true"
            @scroll="scrollContent"
            @pullingUpload="loadMore">
      <HomeSwiper :banners="banners"></HomeSwiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control :titles="['流行', '新款', '精选']"></tab-control>
      <GoodsList :goods="goods"></GoodsList>
    </scroll>
    <back-top @click.native="topClick" v-show="isShow"></back-top>
  </div>
</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar"
  import HomeSwiper from "./childComps/HomeSwiper"
  import RecommendView from "./childComps/RecommendView"
  import FeatureView from "./childComps/FeatureView"
  import TabControl from "@/components/contents/tabControl/TabControl"
  import GoodsList from "@/components/contents/goods/GoodsList"
  import Scroll from "@/components/common/scroll/Scroll"
  import BackTop from "@/components/common/backtop/BackTop";

  import { getHomeMultiData, getHomeGoods } from "@/network/home"
  import { debounce } from "@/common/utils";

  export default {
    name: "Home",
    components:{
      BackTop,
      Scroll,
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
        goods:[],
        isShow: false
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
    mounted() {
      const refresh  = debounce(this.$refs.scroll.refresh, 100)

      this.$bus.$on('imgLoad', ()=>{
        refresh()
      })
    },
    methods:{
      getHomeGoods(type){
        const page = this.goods[type].page + 1
        let res = getHomeGoods(type, page)
        return res.skulist
      },
      loadMore(){
        console.log('load more')

      },
      scrollContent(pos){
        this.isShow = -pos.y > 1000
      },
      topClick(){
        this.$refs.scroll.scrollTo(0, 0, 100)
      }
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
  .tab-control {
    /*吸顶效果*/
    position: sticky;
    top: 44px;
    z-index: 9;
  }
  .content {
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

</style>
