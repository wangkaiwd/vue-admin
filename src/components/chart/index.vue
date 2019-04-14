<template>
  <div
    class="chart"
    ref="chart"
    :style="{width,height}"
  >
  </div>
</template>

<script>
  import echarts from 'echarts';
  import { mapState } from 'vuex';

  export default {
    name: 'AdminChart',
    props: {
      /**
       * 生成echarts的配置项
       */
      options: {
        type: Object,
        default: () => ({})
      },
      /**
       * echarts容器的宽度
       */
      width: {
        type: String,
        default: '600px'
      },
      /**
       * echarts容器的高度
       */
      height: {
        type: String,
        default: '400px'
      },
      /**
       * 异步图表loading
       */
      loading: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        timerId: null
      };
    },
    computed: {
      ...mapState(['isCollapsed'])
    },
    watch: {
      options: {
        handler (newVal) {
          if (this.myChart) {
            this.myChart.setOption(newVal);
          }
        },
        deep: true
      },
      loading (newVal) {
        if (this.myChart) {
          newVal ? this.myChart.showLoading() : this.myChart.hideLoading();
        }
      },
      isCollapsed () {
        if (this.myChart) {
          setTimeout(() => {
            this.myChart.resize();
          }, 500);
        }
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
        window.addEventListener('resize', this.onResize);
      },
      onResize () {
        if (this.timerId) {
          clearTimeout(this.timerId);
          this.timerId = null;
        }
        this.timerId = setTimeout(() => {
          this.myChart.resize();
        }, 100);
      }
    },
    beforeDestroy () {
      window.removeEventListener('resize', this.onResize);
    }
  };
</script>

<style lang="scss" scoped>
  .chart {

  }
</style>
