<template>
  <el-container class="admin-home">
    <left-nav></left-nav>
    <el-container class="admin-home-content">
      <admin-header></admin-header>
      <top-nav></top-nav>
      <el-card shadow="never" class="admin-home-content-page">
        <div class="admin-home-content-page-header">
          <!-- this里的数据都是响应式的，当this.$route发生改变的时候，对应的页面就会重新render,更新状态   -->
          <strong>{{$route.name}}</strong>
          <admin-bread></admin-bread>
        </div>
        <transition name="slide-left" mode="out-in">
          <router-view></router-view>
        </transition>
      </el-card>
      <admin-footer></admin-footer>
    </el-container>
  </el-container>
</template>

<script>
  import AdminHeader from 'layouts/header';
  import AdminFooter from 'layouts/footer';
  import AdminBread from 'layouts/breadcrumb';
  import LeftNav from 'layouts/leftNav';
  import TopNav from 'layouts/topNav';

  export default {
    name: 'AdminHome',
    components: { AdminHeader, AdminFooter, LeftNav, AdminBread, TopNav },
    watch: {},
    mounted () {
    },
  };
</script>

<style lang="scss" scoped>
  .admin-home {
    display: flex;
    height: 100%;
    &-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      min-width: 600px;
    }
    &-content-page {
      flex: 1;
      overflow-y: auto;
      overflow-x: hidden;
      border: none;
      &-header {
        padding-bottom: 20px;
        display: flex;
        justify-content: space-between;
      }
    }

    .slide-left-enter-active,
    .slide-left-leave-active {
      transition: all .4s cubic-bezier(.55, 0, .1, 1);
      transform: translateX(0);
    }
    .slide-left-enter {
      opacity: 0;
      transform: translateX(40px);
    }
    .slide-left-leave-to {
      opacity: 0;
      transform: translateX(-40px);
    }
  }
</style>
