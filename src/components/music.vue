<template>
  <div>
   <router-link :to="{name:'rihanMusic'}">日韩音乐</router-link>
   <router-link :to="{name:'omeiMusic'}">欧美音乐</router-link>
   <router-link :to="{name:'guochanMusic'}" ref='abc'>国产音乐</router-link>
  <router-view></router-view>
  
  </div>
</template>

<script>
export default {
  methods:{
    add(){
    
    }
  }
}
</script>

<style lang="">
  
</style>
