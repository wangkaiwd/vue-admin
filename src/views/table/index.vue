<template>
  <div>
    <count-up :start-val="4000"></count-up>
  </div>
</template>

<script>
  import CountUp from 'components/countUp';

  export default {
    name: 'index',
    components: {
      CountUp
    },
    data () {
      return {};
    },
  };
</script>

<style lang="scss" scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
