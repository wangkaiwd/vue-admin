<template>
  <el-row type="flex" class="admin-home">
    <left-nav></left-nav>
    <el-col class="admin-home-content" :span="20">
      <admin-header></admin-header>
      <el-card shadow="never" class="admin-home-content-page">
        <router-view></router-view>
      </el-card>
      <admin-footer></admin-footer>
    </el-col>
  </el-row>
</template>

<script>
  import AdminHeader from 'layouts/header'
  import AdminFooter from 'layouts/footer'
  import LeftNav from 'layouts/leftNav'

  export default {
    name: 'AdminHome',
    components: { AdminHeader, AdminFooter, LeftNav },
    data () {
      return {}
    },
    mounted () {
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .admin-home {
    height: 100%;
    &-content {
      display: flex;
      flex-direction: column;
    }
    &-content-page {
      flex: 1;
      overflow: auto;
      border: none;
    }
  }
</style>
