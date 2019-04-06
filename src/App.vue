<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: 'App',
    data () {
      return {
        title: ''
      };
    },
  };
</script>
<style lang="scss" scoped>
  .app {
    height: 100vh;
    width: 100vw;
  }
</style>
