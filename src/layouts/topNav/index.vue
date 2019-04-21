<template>
  <el-tabs class="top-nav" :value="activeTab" @tab-remove="onTabRemove" @tab-click="onTabClick" type="card">
    <el-tab-pane
      v-for="item in topNavList"
      :label="item.name"
      :key="item.path"
      closable
      :name="item.path"
    >
    </el-tab-pane>
  </el-tabs>
</template>

<script>
  import { mapState, mapMutations } from 'vuex';

  export default {
    name: 'TopNav',
    computed: {
      ...mapState('topNav', ['topNavList', 'activeTab']),
    },
    methods: {
      ...mapMutations('topNav', ['DELETE_NAV', 'CHANGE_ACTIVE']),
      onTabRemove (index) {
        const isCurrent = index === this.activeTab;
        this.DELETE_NAV({ index });
        isCurrent && this.$router.push(this.activeTab);
      },
      onTabClick (index) {
        this.CHANGE_ACTIVE(index.name);
        this.$router.push(this.activeTab);
      }
    }
  };
</script>

<style lang="scss" scoped>

</style>
