<template>
  <div class="movie_container">
    <div class="left">
      <router-link to="/movie/rihan">日韩电影</router-link>
      <router-link to="/movie/omei">欧美电影</router-link>
      <router-link to="/movie/guochan">国产电影</router-link>
    </div>
    <div class="right">
       <router-view></router-view>
    </div>
  
   
  
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang='css' scoped>
 
  a{
   width:80px;
   float:left;
   text-decoration: none
  }
  .right{
    overflow:hidden;
    width: 100%;
    padding-left:80px;
  }
</style>

