<template>
  <el-breadcrumb separator="/" class="admin-home-content-breadcrumb">
    <!--  $route.matched: 一个数组，包含当前路由的所有嵌套路径片段的路由记录，即当前路由以及当前路由对应的所有父级路由对象  -->
    <el-breadcrumb-item
      v-for="route in $route.matched"
      :to="{path:route.path}"
      :key="route.path"
      v-if="route.name"
    >
      {{route.name}}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
  export default {
    name: 'AdminBread'
  };
</script>

<style lang="scss" scoped>

</style>
