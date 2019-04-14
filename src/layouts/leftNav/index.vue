<template>
  <el-menu
    :default-active="$route.path"
    :unique-opened="true"
    class="left-nav-menu"
    :router="true"
    :collapse="isCollapsed"
  >
    <router-link tag="div" to="/main" class="left-nav-logo" :class="{collapsed:isCollapsed}">
      {{logoText}}
    </router-link>
    <side-bar :collapse="isCollapsed"></side-bar>
  </el-menu>
</template>

<script>
  import SideBar from './components/sideBar';
  import { mapState } from 'vuex';

  export default {
    name: 'LeftNav',
    components: { SideBar },
    data () {
      return {};
    },
    computed: {
      ...mapState(['isCollapsed']),
      logoText () {
        return this.isCollapsed ? 'VUE' : 'VUEADMIN';
      }
    }
  };
</script>

<style lang="scss" scoped>
  .left-nav {
    display: flex;
    flex-direction: column;
    &-menu:not(.el-menu--collapse) {
      flex-shrink: 0;
      width: 256px;
      min-height: 400px;
    }
    &-logo {
      padding: 10px 20px;
      color: $white;
      height: 60px;
      display: flex;
      align-items: center;
      font-size: 22px;
      background-color: $blue;
      border-right: 1px solid rgba(238, 241, 147, 0.3);
      transition: all .4s;
      cursor: pointer;
      &.collapsed {
        font-size: 16px;
      }
    }
    &-menu {
      height: 100%;
      overflow: auto;
      background-color: #eef1f6;
      border: none;
    }
  }
</style>
