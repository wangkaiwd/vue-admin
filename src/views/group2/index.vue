<template>
  <div>
    <admin-chart :options="options" :loading="loading"></admin-chart>
  </div>
</template>

<script>
  import AdminChart from 'components/chart';

  export default {
    name: 'index',
    components: { AdminChart },
    data () {
      return {
        loading: false,
        options: {}
      };
    },
    mounted () {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.options = {
          title: {
            text: 'ECharts 入门示例'
          },
          tooltip: {},
          legend: {
            data: ['销量']
          },
          xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        };
      }, 2000);
      setTimeout(() => {
        this.options.xAxis.data = ['衬衫1', '羊毛衫1', '雪纺衫1', '裤子1', '高跟鞋1', '袜子1'];
        this.options.series = [{
          name: '销量',
          type: 'bar',
          data: [10, 20, 26, 12, 10, 26]
        }];
      }, 4000);
    }
  };
</script>

<style scoped>

</style>
