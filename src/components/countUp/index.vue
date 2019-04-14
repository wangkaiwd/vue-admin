<template>
  <div class="count-up" ref="countUp" :id="countUpId"></div>
</template>

<script>
  import { CountUp } from 'countup.js';

  export default {
    name: 'CountUp',
    props: {
      /**
       * 动画数值
       */
      startVal: {
        type: Number,
        required: true
      },
      /**
       * 小数点保留位数
       */
      decimalPlaces: {
        type: Number,
        default: 0
      },
      /**
       * 动画持续时间，单位秒
       */
      duration: {
        type: Number,
        default: 2
      }
    },
    computed: {
      countUpId () { // 通过组件唯一的_uid来设置html元素的唯一id,用来进行DOM操作
        return `${this._uid}-count-up`;
      }
    },
    mounted () {
      const { startVal, decimalPlaces, duration } = this;
      const countUp = new CountUp(this.countUpId, startVal, {
        decimalPlaces,
        duration
      });
      countUp.start();
    }
  };
</script>

<style lang="scss" scoped>
  .count-up {

  }
</style>
