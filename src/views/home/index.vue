<template>
  <el-row type="flex" class="admin-home">
    <left-nav></left-nav>
    <el-col class="admin-home-content" :span="20">
      <admin-header></admin-header>
      <el-card shadow="never" class="admin-home-content-page">
        <div class="admin-home-content-page-header">
          <h4>{{title}}</h4>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="name in breadCrumbs" :key="name">{{name}}</el-breadcrumb-item>
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
        title: '',
        breadCrumbs: []
      };
    },
    watch: {
      '$route' (newRoute, oldRoute) {
        if (newRoute.path !== oldRoute.path) {
          this.creatPageHeader(routeConfig, this.title);
        }
      }
    },
    mounted () {
      this.creatPageHeader();
    },
    methods: {
      creatPageHeader () {
        this.title = this.$route.name;
        this.breadCrumbs = this.findParentItem(routeConfig, this.title);
      },
      findParentItem (array, name) {
        let result;
        array.some(o => {
          let temp;
          if (o.name === name) {
            return result = [name];
          }
          temp = this.findParentItem(o.children || [], name);
          if (temp) {
            return result = [o.name, ...temp];
          }
        });
        return result;
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
