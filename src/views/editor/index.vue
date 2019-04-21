<template>
  <div>
    <el-alert
      :title="`内容双向绑定：${msg}`"
      type="info"
      :closable="false"
    >
    </el-alert>
    <admin-editor style="margin-top: 20px" v-model="msg" :disabled="false"></admin-editor>
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
