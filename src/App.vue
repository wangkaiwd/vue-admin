<template>
  <el-container class="container">
    <el-header class="header">头部</el-header>
    <el-container class="main-wrapper">
      <el-main class="main">
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
      </el-main>
      <el-aside class="ad">侧边内容</el-aside>
    </el-container>
    <el-footer class="footer">底部</el-footer>
  </el-container>
</template>

<script>
import Cnfooter from '@/pages/layout/cnFooter';
import CnHeader from '@/pages/layout/cnHeader';
export default {
  name: 'App',
  computed: {},
  components: { Cnfooter, CnHeader },
  mounted() {},
  methods: {}
};
</script>

<style lang="less" scoped>
.container {
  .header {
    min-height: 50px;
    background-color: pink;
  }
  .main-wrapper {
    .main {
      background-color: gray;
    }
    .ad {
    }
  }
  .footer {
    min-height: 190px;
    background-color: blue;
  }
}

[v-cloak] {
  display: none;
}
</style>
