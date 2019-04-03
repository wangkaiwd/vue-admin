<template>
  <div class="home">
    home
    <router-link to="/personal">to personal</router-link>
  </div>
</template>

<script>
  import { fetchGoods } from 'api';

  export default {
    name: 'Home',
    data () {
      return {};
    },
    mounted () {
      fetchGoods().then(
        res => {
          console.log('res', res);
        }
      );
    },
    methods: {}
  };
</script>

<style lang="scss" scoped>
</style>
