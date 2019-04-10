<template>
  <div class="chart" ref="chart" style="width: 600px;height:400px;">

  </div>
</template>

<script>
  import echarts from 'echarts';

  export default {
    name: 'AdminChart',
    props: {
      options: {
        type: Object,
        default: () => ({})
      }
    },
    watch: {
      options: {
        handler (newVal) {
          if (this.myChart) {
            this.myChart.setOption(newVal);
          }
        },
        deep: true
      }
    },
    mounted () {
      this.initChart();
    },
    methods: {
      initChart () {
        this.myChart = echarts.init(this.$refs.chart);
        // 指定图表的配置项和数据
        // 使用刚指定的配置项和数据显示图表。
        this.myChart.setOption(this.options);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .chart {

  }
</style>
