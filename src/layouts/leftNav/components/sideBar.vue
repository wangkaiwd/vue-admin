<template>
  <div class="side-bar-wrapper">
    <template v-for="menu in routerConfig">
      <el-submenu
        :key="`sub-${menu.name}`"
        :index="menu.name"
        v-if="menu.children"
      >
        <template slot="title">
          {{menu.name}}
        </template>
        <side-bar
          v-if="menu.children"
          :router-config="menu.children"
        >
        </side-bar>
      </el-submenu>
      <el-menu-item
        :key="`item-${menu.name}`"
        :index="menu.path"
        v-else
      >
        {{menu.name}}
      </el-menu-item>
    </template>
  </div>
</template>
<script>
  import { menus } from 'router';

  export default {
    name: 'SideBar',
    props: {
      routerConfig: {
        type: Array,
        default: () => menus
      }
    },
    data () {
      return {};
    },
  };
</script>

<style lang="scss" scoped>
  .side-bar-wrapper {
    /deep/ .el-submenu__title {
      &:hover {background-color: #d1dbe5;}
    }
    .el-menu-item {
      height: 40px;
      line-height: 40px;
      &:hover {background-color: #d1dbe5;}
      &:focus {background-color: inherit;}
    }
    /deep/ .el-submenu .el-menu {background-color: #e4e8f1;}

  }
</style>
