<template>
  <div class="side-bar-wrapper" :class="{collapse}">
    <template v-for="menu in routerConfig">
      <el-submenu
        :key="`sub-${menu.name}`"
        :index="menu.name"
        v-if="menu.children"
      >
        <template slot="title">
          <i :class="menu.iconCls" v-if="menu.iconCls"></i>
          <span slot="title">{{menu.name}}</span>
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
        <i :class="menu.iconCls" v-if="menu.iconCls"></i>
        <span slot="title">{{menu.name}}</span>
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
      },
      collapse: {
        type: Boolean,
        default: false
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
    &.collapse {
      .el-submenu > .el-submenu__title span {
        height: 0;
        width: 0;
        overflow: hidden;
        visibility: hidden;
        display: inline-block;
      }
      /deep/ .el-submenu__icon-arrow {
        display: none;
      }
    }
    .el-menu-item {
      height: 40px;
      line-height: 40px;
      &:hover {background-color: #d1dbe5;}
      &:focus {background-color: inherit;}
    }
    /deep/ .el-submenu .el-menu:not(.el-menu--popup) {background-color: #e4e8f1;}
    /deep/ .el-submenu [class^=el-icon-] {
      /*margin-right: 0;*/
    }
    .el-menu-item [class^=el-icon-] {
      /*margin-right: 0;*/
    }
  }
</style>
