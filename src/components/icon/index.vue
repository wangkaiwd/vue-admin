<template>
  <div class="admin-icon" @click="$emit('click')">
    <svg class="icon" aria-hidden="true">
      <!-- 注意：这里的前缀是可以改的，这里只不过是由于手动改为了i，默认前缀是icon -->
      <!-- 使用的时候要以iconfont中图标中复制的代码为主,要在自己使用的时候增加iconfont生成的js链接到index.html -->
      <use :xlink:href="`#icon-${icon}`"></use>
    </svg>
  </div>
</template>

<script>
  export default {
    name: 'SmileIcon',
    props: {
      icon: { type: String, required: true }
    }
  };
</script>

<style lang="scss" scoped>
  .admin-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: top;
    .icon {
      width: 1em; height: 1em;
      vertical-align: -0.15em;
      fill: currentColor;
      overflow: hidden;
    }
  }
</style>
