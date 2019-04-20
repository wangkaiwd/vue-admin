<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex';

  const { mapMutations, mapActions } = createNamespacedHelpers('router');
  export default {
    name: 'App',
    data () {
      return {};
    },
    mounted () {
      this.initMenus();
    },
    methods: {
      ...mapMutations(['SET_MENUS']),
      ...mapActions(['GET_MENUS']),
      initMenus () {
        const authInfo = JSON.parse(localStorage.getItem('authInfo'));
        const menus = JSON.parse(localStorage.getItem('menus'));
        if (!authInfo || !menus) {
          return this.GET_MENUS();
        }
        this.SET_MENUS({ authInfo, menus });
      }
    }
  };
</script>
<style lang="scss" scoped>
  .app {
    height: 100vh;
    width: 100vw;
  }
</style>
