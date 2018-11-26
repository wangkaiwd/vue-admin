<template>
  <div class="index" v-cloak>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {},
  components: {},
  mounted() {},
  methods: {}
};
</script>

<style lang="less" scoped>
.index {
  -webkit-overflow-scrolling: touch;
}

[v-cloak] {
  display: none;
}
</style>
