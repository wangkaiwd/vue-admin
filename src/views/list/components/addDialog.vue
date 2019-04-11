<template>
  <el-dialog
    :title="dialogTitle"
    custom-class="add-dialog"
    :visible="visible"
    @close="$emit('update:visible',false)"
  >
    <el-form :model="form" ref="form" :rules="rules">
      <el-form-item label="收支类型" prop="type" :label-width="formLabelWidth">
        <el-col :span="22">
          <el-select v-model="form.type" placeholder="请选择收支类型">
            <el-option label="收入" value="shanghai"></el-option>
            <el-option label="支出" value="beijing"></el-option>
          </el-select>
        </el-col>
      </el-form-item>
      <el-form-item label="收支描述" prop="describe" :label-width="formLabelWidth">
        <el-col :span="22">
          <el-input v-model="form.describe" placeholder="请输入收支描述"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="收入" prop="income" :label-width="formLabelWidth">
        <el-col :span="22">
          <el-input v-model="form.income" type="number" placeholder="请输入收入"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="支出" prop="expend" :label-width="formLabelWidth">
        <el-col :span="22">
          <el-input v-model="form.expend" type="number" placeholder="请输入支出"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="账户现金" prop="cash" :label-width="formLabelWidth">
        <el-col :span="22">
          <el-input v-model="form.cash" type="number" placeholder="请输入账户现金"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="备注" prop="remark" :label-width="formLabelWidth">
        <el-col :span="22">
          <el-input type="textarea" autosize v-model="form.remark" placeholder="请输入备注"></el-input>
        </el-col>
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
          type: '',
          describe: '',
          income: '',
          expend: '',
          cash: '',
          remark: ''
        },
        formLabelWidth: '100px',
        rules: {
          type: [
            { type: String, required: true, message: '请选择收支类型', trigger: 'blur' },
          ],
          describe: [
            { type: String, required: true, message: '请填写收支描述', trigger: 'blur' }
          ],
          income: [
            { type: Number, required: true, message: '请填写收入', trigger: 'blur' },
          ],
          expend: [
            { type: Number, required: true, message: '请填写支出', trigger: 'blur' },
          ],
          cash: [
            { type: Number, required: true, message: '请填写账户现金', trigger: 'blur' },
          ],
          remark: [
            { type: String, required: true, message: '请填写备注', trigger: 'blur' },
          ],

        }
      };
    },
    mounted () {
      if (this.pageType === 'detail') {

      }
    },
    methods: {
      onOkClick () {
        this.$refs.form.validate((valid) => {
          if (valid) {
            this.$emit('update:visible', false);
            this.$emit('on-ok');
          }
        });
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
