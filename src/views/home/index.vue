<template>
  <el-row type="flex" class="admin-home">
    <left-nav></left-nav>
    <el-col class="admin-home-content" :span="20">
      <admin-header></admin-header>
      <el-card shadow="never" class="admin-home-content-page">
        <div class="admin-home-content-page-header">
          <h4>{{title}}</h4>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>{{title}}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <router-view></router-view>
      </el-card>
      <admin-footer></admin-footer>
    </el-col>
  </el-row>
</template>

<script>
  import AdminHeader from 'layouts/header';
  import AdminFooter from 'layouts/footer';
  import LeftNav from 'layouts/leftNav';
  import routeConfig from 'router';

  export default {
    name: 'AdminHome',
    components: { AdminHeader, AdminFooter, LeftNav },
    data () {
      return {
        title: ''
      };
    },
    watch: {
      '$route' (newRoute, oldRoute) {
        if (newRoute.path !== oldRoute.path) {
          this.title = newRoute.name;
        }
      }
    },
    mounted () {
      this.findParentItem();
    },
    methods: {
      findParentItem () {
        
        console.log('parent', parent);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .admin-home {
    height: 100%;
    &-content {
      display: flex;
      flex-direction: column;
      min-width: 600px;
    }
    &-content-page {
      flex: 1;
      overflow: auto;
      border: none;
      &-header {
        padding-bottom: 20px;
        display: flex;
        justify-content: space-between;
      }
    }
  }
</style>
