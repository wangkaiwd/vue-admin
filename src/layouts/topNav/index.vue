<template>
  <transition name="fade">
    <el-tabs
      v-if="topNavList.length>0"
      class="top-nav"
      :value="activeTab"
      @tab-remove="onTabRemove"
      @tab-click="onTabClick" type="card"
    >
      <el-tab-pane
        v-for="item in topNavList"
        :label="item.name"
        :key="item.path"
        closable
        :name="item.path"
      >
      </el-tab-pane>
    </el-tabs>
  </transition>
</template>

<script>
  import { mapState, mapMutations } from 'vuex';

  /**
   * 这里的路由比较简单，并没有涉及到比较复杂的传参，所以直接通过index来进行跳转
   */
  export default {
    name: 'TopNav',
    computed: {
      ...mapState('topNav', ['topNavList', 'activeTab']),
    },
    mounted () {
      this.initTopNavList();
    },
    methods: {
      ...mapMutations('topNav', ['DELETE_NAV', 'CHANGE_ACTIVE', 'CHANGE_TOPNAVLIST']),
      onTabRemove (index) {
        const isCurrent = index === this.activeTab;
        this.DELETE_NAV({ index });
        isCurrent && this.$router.push(this.activeTab);
      },
      onTabClick (index) {
        this.CHANGE_ACTIVE(index.name);
        this.$router.push(this.activeTab);
      },
      initTopNavList () {
        this.CHANGE_ACTIVE(this.$route.path);
        const topNavList = JSON.parse(localStorage.getItem('topNavList')) || [];
        this.CHANGE_TOPNAVLIST(topNavList);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .top-nav {
    margin: 8px;
    /deep/ .el-tabs__header {
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
      margin-bottom: 0;
      border-bottom: 0;
    }
    &.fade-enter,
    &.fade-leave-to {
      opacity: 0;
    }
    &.fade-enter-active,
    &.fade-leave-active {
      transition: all .4s;
    }
  }
</style>
