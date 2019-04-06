<template>
  <el-row class="home">
    <left-nav></left-nav>
    <el-col>
      <router-view></router-view>
    </el-col>
  </el-row>
</template>

<script>
  import AdminHeader from 'layouts/header'
  import LeftNav from 'layouts/leftNav'

  export default {
    name: 'AdminHome',
    components: { AdminHeader, LeftNav },
    data () {
      return {}
    },
    mounted () {
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .home {

  }
</style>
