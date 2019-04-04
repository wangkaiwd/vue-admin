<template>
  <div class="side-bar-wrapper">
    <template v-for="menu in menuConfig">
      <el-submenu :index="menu.index" v-if="menu.children">
        <template slot="title">
          {{menu.title}}
        </template>
        <side-bar v-if="menu.children" :menu-config="menu.children"></side-bar>
      </el-submenu>
      <el-menu-item :index="menu.index" v-else>
        {{menu.title}}
      </el-menu-item>
    </template>
  </div>
</template>
<script>
  import menuConfig from '../menuConfig';

  export default {
    name: 'SideBar',
    props: {
      menuConfig: {
        type: Array,
        default: () => menuConfig
      }
    },
    data () {
      return {
        // menuConfig
      };
    }
  };
</script>

<style lang="scss" scoped>
  .side-bar-wrapper {
    .el-menu-item {
      height: 40px;
      line-height: 40px;
    }
  }
</style>
