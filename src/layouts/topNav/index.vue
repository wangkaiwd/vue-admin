<template>
  <el-tabs class="top-nav" editable @tab-remove="onTabRemove" type="border-card">
    <el-tab-pane>
      <span slot="label"><i class="el-icon-date"></i> 我的行程</span>
    </el-tab-pane>
    <el-tab-pane label="消息中心"></el-tab-pane>
    <el-tab-pane label="角色管理"></el-tab-pane>
    <el-tab-pane label="定时任务补偿"></el-tab-pane>
  </el-tabs>
</template>

<script>
  export default {
    name: 'TopNav',
    methods: {
      onTabRemove (name) {
        console.log('remove');
      }
    }
  };
</script>

<style lang="scss" scoped>

</style>
