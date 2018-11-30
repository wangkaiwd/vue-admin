<template>
  <div class="container">
    <header class="header">
      头部
      <CnHeader></CnHeader>
    </header>
    <div class="main-wrapper">
      <div class="main">
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
      </div>
      <aside class="ad">侧边内容</aside>
    </div>
    <footer class="footer">底部</footer>
  </div>
</template>

<script>
import Cnfooter from "@/pages/layout/cnFooter";
import CnHeader from "@/pages/layout/cnHeader";
export default {
  name: "App",
  computed: {},
  components: { Cnfooter, CnHeader },
  mounted() {},
  methods: {}
};
</script>

<style lang="less" scoped>
@import "~styles/vars";
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  .header {
    .page-center;
    min-height: 50px;
    background-color: @header-background;
  }
  .main-wrapper {
    display: flex;
    .page-center;
    flex: 1;
    .main {
      flex: 1;
      background-color: @easy-gray;
    }
    .ad {
      width: 290px;
    }
  }
  .footer {
    min-height: 190px;
    background-color: @easy-gray;
  }
}

[v-cloak] {
  display: none;
}
</style>
