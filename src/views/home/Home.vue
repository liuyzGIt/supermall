<template>
  <div id="home" class="wrapper">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control 
        :titles="['流行', '新款', '精选']" 
        ref="tabControl1"        
        v-show="isTabControlFixed"
        class="tab-control" 
        @tabClick="tabClick"/>

    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            :pull-up-load="true"
            @scroll="scrollContent"
            @pullingUpload="loadMore">
      <HomeSwiper :banners="banners" @swiperImgLoad="swiperImgLoad"></HomeSwiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control 
        :titles="['流行', '新款', '精选']" 
        ref="tabControl2" 
        @tabClick="tabClick"/>
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
  import BackTop from "@/components/common/backtop/BackTop"

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
        isShow: false,
        tabControlPos: 0,
        isTabControlFixed: false,
        currentY: 0
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
        this.isTabControlFixed = -pos.y > this.tabControlPos
        // this.currentY = pos.y
      },
      topClick(){
        this.$refs.scroll.scrollTo(0, 0, 100)
      },
      swiperImgLoad(){
        this.tabControlPos = this.$refs.tabControl2.$el.offsetTop
      },
      tabClick(index){
        console.log(index)
        this.$refs.tabControl2.currenIndex = index
        this.$refs.tabControl1.currenIndex = index
      }
    },
    activated(){
      console.log(123)      
      this.$refs.scroll.scrollTo(0, this.currentY, 0)
      this.$refs.scroll.refresh()
      
    },
    deactivated(){
      console.log(456)
      this.currentY = this.$refs.scroll.getScrollY()
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

    /* position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9; */
  }
  .tab-control{
    position: relative;
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
