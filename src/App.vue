<template>
  <div id="app">

    <!-- 优化 路由当中的组件被加载一次后就保存在内存中  再一次进入路由  不需要重新渲染这个组件-->
    <keep-alive>


  <router-view/>


    </keep-alive>
  
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
