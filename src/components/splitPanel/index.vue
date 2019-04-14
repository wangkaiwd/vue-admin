<template>
  <div class="split-panel" ref="splitPanel">
    <div class="split-panel-left" :style="{width: `${value*100}%`}">
      <slot name="panel-left">

      </slot>
    </div>
    <div class="split-panel-center" ref="moveBar" :style="{width:`${triggerWidth}px`}">
      <div class="split-panel-bar">
        <admin-icon class="split-panel-bar-icon" icon="line"></admin-icon>
        <admin-icon class="split-panel-bar-icon" icon="line"></admin-icon>
        <admin-icon class="split-panel-bar-icon" icon="line"></admin-icon>
        <admin-icon class="split-panel-bar-icon" icon="line"></admin-icon>
        <admin-icon class="split-panel-bar-icon" icon="line"></admin-icon>
        <admin-icon class="split-panel-bar-icon" icon="line"></admin-icon>
        <admin-icon class="split-panel-bar-icon" icon="line"></admin-icon>
        <admin-icon class="split-panel-bar-icon" icon="line"></admin-icon>
        <admin-icon class="split-panel-bar-icon" icon="line"></admin-icon>
        <admin-icon class="split-panel-bar-icon" icon="line"></admin-icon>
        <admin-icon class="split-panel-bar-icon" icon="line"></admin-icon>
      </div>
    </div>
    <div class="split-panel-right">
      <slot name="panel-right">

      </slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SplitPanel',
    props: {
      value: {
        type: Number,
        default: 0.4
      },
      min: {
        type: Number,
        default: 0.1
      },
      max: {
        type: Number,
        default: 0.9
      },
      triggerWidth: {
        type: Number,
        default: 8
      }
    },
    data () {
      return {
        mouseX: 0
      };
    },
    mounted () {
      this.calcMoveBarHeight();
      this.bindEvent();
    },
    methods: {
      calcMoveBarHeight () {
        const { moveBar, height } = this.getElementInfo();
        moveBar.style.height = `${height}px`;
      },
      bindEvent () {
        const { moveBar } = this.getElementInfo();
        moveBar.addEventListener('mousedown', this.listenMousedown);
        document.addEventListener('mouseup', this.listenMouseup);
      },
      getElementInfo () {
        const { splitPanel, moveBar } = this.$refs;
        const { width, left, height } = splitPanel.getBoundingClientRect();
        const { left: moveBarLeft } = moveBar.getBoundingClientRect();
        return { moveBar, width, left, height, moveBarLeft };
      },
      listenMousemove (e) {
        let { width, left } = this.getElementInfo();
        let clientX = e.clientX;
        let leftPercent = (clientX - left - this.mouseX) / width;
        if (leftPercent < this.min) leftPercent = this.min;
        if (leftPercent > this.max) leftPercent = this.max;
        this.$emit('update:value', leftPercent);
      },
      listenMousedown (e) {
        console.log('mousedown');
        const { moveBarLeft } = this.getElementInfo();
        this.mouseX = e.clientX - moveBarLeft;
        document.addEventListener('mousemove', this.listenMousemove);
      },
      listenMouseup () {
        document.removeEventListener('mousemove', this.listenMousemove);
      },
      removeEvent () {
        const { moveBar } = this.getElementInfo();
        moveBar.removeEventListener('mousedown', this.listenMousedown);
        document.removeEventListener('mouseup', this.listenMouseup);
      }
    },
    beforeDestroy () {
      this.removeEvent();
    }
  };
</script>

<style lang="scss" scoped>
  .split-panel {
    display: flex;
    &-left {
    }
    &-center {
      background-color: #f8f8f9;
      height: 100%;
      cursor: col-resize;
      user-select: none;
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
    }
    &-bar {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    &-bar-icon {
      width: 100%;
      height: 4px;
    }
    &-right {
      flex: 1;
      height: 100%;
    }
  }
</style>
