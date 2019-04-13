<template>
  <el-menu
    :default-active="$route.path"
    :unique-opened="true"
    class="left-nav-menu"
    :router="true"
    :collapse="isCollapsed"
  >
    <div class="left-nav-logo">VUEADMIN</div>
    <side-bar></side-bar>
  </el-menu>
</template>

<script>
  import SideBar from './components/sideBar';

  export default {
    name: 'LeftNav',
    props: {
      isCollapsed: {
        type: Boolean,
        default: false
      }
    },
    components: { SideBar },
    data () {
      return {};
    },
  };
</script>

<style lang="scss" scoped>
  .left-nav {
    display: flex;
    flex-direction: column;
    min-width: 260px;
    &-menu:not(.el-menu--collapse) {
      width: 200px;
      min-height: 400px;
    }
    &-logo {
      padding-left: 20px;
      color: $white;
      height: 60px;
      display: flex;
      align-items: center;
      font-size: 22px;
      background-color: $blue;
      border-right: 1px solid rgba(238, 241, 147, 0.3);
    }
    &-menu {
      overflow: auto;
      background-color: #eef1f6;
      border: none;
    }
  }
</style>
