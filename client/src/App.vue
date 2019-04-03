<template>
  <el-row type="flex">
    <left-nav></left-nav>
    <el-col>
      <el-card class="content">
        <div slot="header">
          {{title}}
        </div>
        <router-view></router-view>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
  import LeftNav from 'layouts/leftNav';

  export default {
    name: 'App',
    components: { LeftNav },
    data () {
      return {
        title: ''
      };
    },
    updated () {
      this.title = this.$route.meta.title;
    }
  };
</script>
<style lang="scss" scoped>
  .content {
    height: 100vh;
  }
</style>
