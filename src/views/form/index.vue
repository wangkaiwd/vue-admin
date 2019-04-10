<template>
  <div>
    {{msg}}<br>
    <admin-editor v-model="msg" :disabled="false"></admin-editor>
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
    },
    mounted () {

    }
  };
</script>

<style lang="scss" scoped>

</style>
