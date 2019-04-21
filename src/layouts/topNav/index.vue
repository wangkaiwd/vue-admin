<template>
  <el-tabs class="top-nav" @tab-remove="onTabRemove" closable type="border-card">
    <el-tab-pane v-for="item in topNavList" :label="item.name" :key="item.path"></el-tab-pane>
  </el-tabs>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex';

  const { mapState } = createNamespacedHelpers('topNav');

  export default {
    name: 'TopNav',
    computed: {
      ...mapState(['topNavList'])
    },
    methods: {
      onTabRemove (name) {
        console.log('remove', name);
      }
    }
  };
</script>

<style lang="scss" scoped>

</style>
