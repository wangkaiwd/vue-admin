<template>
  <el-dialog
    :title="dialogTitle"
    class="add-dialog"
    :visible="visible"
    @close="$emit('update:visible',false)"
  >
    <el-form :model="form" ref="form" :rules="rules">
      <el-form-item label="收支类型" prop="type" :label-width="formLabelWidth">
        <el-col :span="18">
          <el-select class="admin-form-item" v-model="form.type" placeholder="请选择收支类型">
            <el-option :label="item" v-for="item in moneyList" :value="item" :key="item"></el-option>
          </el-select>
        </el-col>
      </el-form-item>
      <el-form-item label="收支描述" prop="describe" :label-width="formLabelWidth">
        <el-col :span="18">
          <el-input v-model="form.describe" placeholder="请输入收支描述"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="收入" prop="income" :label-width="formLabelWidth">
        <el-col :span="18">
          <el-input-number
            class="admin-form-item"
            controls-position="right"
            :precision="2"
            :min="0"
            v-model="form.income"
            type="number"
            placeholder="请输入收入"
          >
          </el-input-number>
        </el-col>
      </el-form-item>
      <el-form-item label="支出" prop="expend" :label-width="formLabelWidth">
        <el-col :span="18">
          <el-input-number
            class="admin-form-item"
            controls-position="right"
            :precision="2"
            :min="0"
            v-model="form.expend"
            type="number"
            placeholder="请输入支出"
          >
          </el-input-number>
        </el-col>
      </el-form-item>
      <el-form-item label="账户现金" prop="cash" :label-width="formLabelWidth">
        <el-col :span="18">
          <el-input-number
            class="admin-form-item"
            controls-position="right"
            :precision="2"
            :min="0"
            v-model="form.cash"
            type="number"
            placeholder="请输入账户现金"
          >
          </el-input-number>
        </el-col>
      </el-form-item>
      <el-form-item label="备注" prop="remark" :label-width="formLabelWidth">
        <el-col :span="18">
          <el-input type="textarea" :rows="4" v-model="form.remark" placeholder="请输入备注"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth">
        <el-col :span="18">
          <el-button @click="$emit('update:visible',false)">取 消</el-button>
          <el-button type="primary" :loading="submitLoading" @click="onOkClick">确 定</el-button>
        </el-col>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
  import { fetchProfileAdd, fetchProfileEdit } from 'api/profile';

  const PAGE_CFG = {
    add: { title: '添加资金信息', api: fetchProfileAdd },
    edit: { title: '编辑资金信息', api: fetchProfileEdit },
  };
  const MONEY_LIST = [
    '提现',
    '提现手续费',
    '充值',
    '优惠券',
    '充值礼券',
    '转账'
  ];
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
      },
      dialogItem: {
        type: Object,
        default: () => ({})
      }
    },
    data () {
      return {
        dialogTitle: PAGE_CFG[this.pageType].title,
        form: {
          type: '',
          describe: '',
          income: undefined,
          expend: undefined,
          cash: undefined,
          remark: ''
        },
        formLabelWidth: '140px',
        submitLoading: false,
        moneyList: MONEY_LIST,
        rules: {
          type: [
            { required: true, message: '请选择收支类型', trigger: 'blur' },
          ],
          describe: [
            { required: true, message: '请填写收支描述', trigger: 'blur' }
          ],
          income: [
            { required: true, message: '请填写收入', trigger: 'blur' },
          ],
          expend: [
            { required: true, message: '请填写支出', trigger: 'blur' },
          ],
          cash: [
            { required: true, message: '请填写账户现金', trigger: 'blur' },
          ],
          remark: [
            { required: true, message: '请填写备注', trigger: 'blur' },
          ],
        }
      };
    },
    mounted () {
      this.editData();
    },
    methods: {
      onOkClick () {
        this.$refs.form.validate((valid) => {
          if (valid) {
            this.submitLoading = true;
            if (this.pageType === 'edit') {
              this.form.id = this.dialogItem.id;
            }
            PAGE_CFG[this.pageType].api(this.form)
              .then(
                res => {
                  this.submitLoading = false;
                  this.$message.success(res.msg);
                  this.$emit('update:visible', false);
                  this.$emit('on-ok');
                },
                () => this.submitLoading = false
              );
          }
        });
      },
      editData () {
        console.log(this.pageType);
        if (this.pageType === 'edit') {
          const { date, id, ...rest } = this.dialogItem;
          this.form = rest;
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  .add-dialog {
    .admin-form-item {
      width: 100%;
    }
    /deep/ .el-input-number .el-input__inner {
      text-align: left;
    }
  }
</style>
