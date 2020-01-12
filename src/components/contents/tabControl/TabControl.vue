<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles"
         @click="itemClick(index)"
         :class="{active: index === currenIndex}"
         class="tab-control-item">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props:{
      titles: String
    },
    data(){
      return {
        currenIndex: 0
      }
    },
    methods:{
      itemClick(index){
        this.currenIndex = index
      }
    }
  }
</script>

<style scoped>
  .tab-control{
    display: flex;
    text-align: center;
    height: 40px;
    font-size: 15px;
    line-height: 40px;

    background-color: #ffffff;
  }
  .tab-control-item{
    flex: 1;
  }
  .active {
    color: var(--color-high-text);
  }
  .active span{
    padding: 5px;
    border-bottom: 3px solid var(--color-high-text);
  }

</style>
