<template>
  <div class="auth-button">
    <el-alert
      title="这里演示组件内的元素权限"
      type="info"
      :closable="false"
    >
    </el-alert>
    <div style="margin-top: 20px">
      <el-button v-admin-auth="'main:edit'" type="primary">
        编辑
      </el-button>
      <el-button v-admin-auth="'main'" type="primary">
        搜索
      </el-button>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'AuthButton',
    computed: {}
  };
</script>

<style lang="scss" scoped>

</style>
