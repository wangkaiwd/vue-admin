<template>
  <div class="split-panel-demo">
    <split-panel :value.sync="value">
      <div slot="panel-left" class="demo-left">
        左面板
      </div>
      <div slot="panel-right" class="demo-right">
        右面板
      </div>
    </split-panel>
  </div>
</template>

<script>
  import AdminChart from 'components/chart';
  import SplitPanel from 'components/splitPanel';

  export default {
    name: 'index',
    components: { AdminChart, SplitPanel },
    data () {
      return {
        value: 0.2
      };
    },
    mounted () {

    }
  };
</script>

<style lang="scss" scoped>
  .split-panel-demo {
    .demo-left,
    .demo-right {
      height: 400px;
      border: 1px solid #ccc;
    }
  }
</style>
