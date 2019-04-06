<template>
  <el-col class="left-nav" :span="4">
    <div class="left-nav-logo">VUEADMIN</div>
    <el-menu
      :default-active="defaultActive"
      class="left-nav-menu"
      :router="true"
    >
      <side-bar></side-bar>
    </el-menu>
  </el-col>
</template>

<script>
  import SideBar from './components/sideBar'

  export default {
    name: 'LeftNav',
    components: { SideBar },
    data () {
      return {
        defaultActive: '/home/index'
      }
    },
    watch: {
      '$route' (newVal) {
        this.defaultActive = newVal.path
      }
    },
  }
</script>

<style lang="scss" scoped>
  .left-nav {
    display: flex;
    flex-direction: column;
    min-width: 260px;
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
      flex: 1;
      overflow: auto;
      background-color: #eef1f6;
      border: none;
    }
  }
</style>
