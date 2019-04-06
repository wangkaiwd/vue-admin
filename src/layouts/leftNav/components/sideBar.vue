<template>
  <div class="side-bar-wrapper">
    <template v-for="menu in routerConfig">
      <el-submenu
        :key="`sub-${menu.name}`"
        :index="menu.path"
        v-if="menu.children && !menu.hidden"
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
        v-if="!menu.children && !menu.hidden"
      >
        {{menu.name}}
      </el-menu-item>
    </template>
  </div>
</template>
<script>
  import routerConfig from 'router'

  export default {
    name: 'SideBar',
    props: {
      routerConfig: {
        type: Array,
        default: () => routerConfig
      }
    },
    data () {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
  .side-bar-wrapper {
    .el-menu-item {
      height: 40px;
      line-height: 40px;
    }
  }
</style>
