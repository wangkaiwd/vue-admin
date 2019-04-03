<template>
  <div class="app">
    app
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
    updated () {
      this.title = this.$route.meta.title;
    }
  };
</script>
<style lang="scss" scoped>
  .app {
    height: 100vh;
  }
</style>
