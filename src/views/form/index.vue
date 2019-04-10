<template>
  <div>
    <admin-editor v-model="msg" :disabled="true"></admin-editor>
  </div>
</template>

<script>
  import AdminEditor from 'components/editor';

  export default {
    name: 'index',
    components: { AdminEditor },
    data () {
      return {
        msg: '<p>message</p>'
      };
    }
  };
</script>

<style lang="scss" scoped>

</style>
