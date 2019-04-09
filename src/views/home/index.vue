<template>
  <el-row type="flex" class="admin-home">
    <left-nav></left-nav>
    <el-col class="admin-home-content" :span="20">
      <admin-header></admin-header>
      <el-card shadow="never" class="admin-home-content-page">
        <div class="admin-home-content-page-header">
          <!-- this里的数据都是响应式的，当this.$route发生改变的时候，对应的页面就会重新render,更新状态   -->
          <strong>{{$route.name}}</strong>
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
  import { mapMutations } from 'vuex';
  import { goLogin } from 'utils/user';

  export default {
    name: 'AdminHome',
    components: { AdminHeader, AdminFooter, LeftNav },
    data () {
      return {};
    },
    watch: {},
    mounted () {
      // this.setUserInfo();
    },
    methods: {
      ...mapMutations(['changeUserInfo']),
      setUserInfo () {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        if (userInfo) {
          this.changeUserInfo(userInfo);
        } else {
          goLogin('请先登录');
        }
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
    &-content-breadcrumb {
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
