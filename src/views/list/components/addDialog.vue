<template>
  <el-dialog
    :title="dialogTitle"
    custom-class="add-dialog"
    :visible="visible"
    @close="$emit('update:visible',false)"
  >
    <el-form :model="form">
      <el-form-item label="活动名称" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="活动区域" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="$emit('update:visible',false)">取 消</el-button>
      <el-button type="primary" @click="onOkClick">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>

  const PAGE_CFG = {
    add: { title: '新增', api: '' },
    edit: { title: '编辑', api: '' },
    detail: { title: '查看', api: '' }
  };
  export default {
    name: 'AddDialog',
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      pageType: {
        type: String,
        default: 'add'
      }
    },
    data () {
      return {
        dialogTitle: PAGE_CFG[this.pageType].title,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      };
    },
    mounted () {
      if (this.pageType === 'detail') {

      }
    },
    methods: {
      onOkClick () {
        this.$emit('update:visible', false);
        this.$emit('on-ok');
      },
      getDetailData () {

      }
    }
  };
</script>

<style lang="scss" scoped>
  .add-dialog {

  }
</style>
