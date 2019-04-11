<template>
  <el-row type="flex" class="admin-home">
    <left-nav></left-nav>
    <el-col class="admin-home-content" :span="20">
      <admin-header></admin-header>
      <el-card shadow="never" class="admin-home-content-page">
        <div class="admin-home-content-page-header">
          <!-- this里的数据都是响应式的，当this.$route发生改变的时候，对应的页面就会重新render,更新状态   -->
          <strong>{{$route.name}}</strong>
          <admin-bread></admin-bread>
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
  import AdminBread from 'layouts/breadcrumb';
  import LeftNav from 'layouts/leftNav';
  import { mapMutations } from 'vuex';
  import { goLogin } from 'utils/user';

  export default {
    name: 'AdminHome',
    components: { AdminHeader, AdminFooter, LeftNav, AdminBread },
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
