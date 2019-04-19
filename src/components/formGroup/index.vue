<template>
  <el-form class="form-group" :model="formValues" ref="formGroup" :label-width="labelWidth">
    <el-form-item
      v-for="item in formList"
      :label="item.label"
      :key="item.prop"
      :prop="item.prop"
      :rules="item.rules"
    >
      <component :is="item.widget" v-model="formValues[item.prop]">
        <template v-if="item.children">
          <component
            v-for="child in item.children"
            :is="child.widget"
            :value="child.value"
            :label="child.label"
            :key="child.value"
          >
          </component>
        </template>
      </component>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @submit="onSubmit">提交</el-button>
      <el-button>重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  const formList = [
    {
      label: '输入框',
      prop: 'input',
      value: '111',
      widget: 'el-input',
      rules: [
        { required: true, message: '请输入输入框', trigger: 'change' }],
      widgetProps: {}
    },
    {
      label: '单选',
      value: '2',
      prop: 'radio',
      widget: 'el-radio-group',
      widgetProps: {},
      children: [
        {
          widget: 'el-radio',
          value: '1',
          label: 'radio1'
        },
        {
          widget: 'el-radio',
          value: '2',
          label: 'radio2'
        }
      ]
    },
    {
      label: '多选框',
      value: [1, 2],
      prop: 'checkbox',
      widget: 'el-checkbox-group',
      widgetProps: {},
      children: [
        { label: 'checkbox1', widget: 'el-checkbox', value: 1, },
        { label: 'checkbox2', widget: 'el-checkbox', value: 2, },
        { label: 'checkbox3', widget: 'el-checkbox', value: 3, },
      ]
    },
    {
      label: '下拉',
      value: 1,
      prop: 'select',
      widget: 'el-select',
      widgetProps: {},
      children: [
        { label: 'select1', widget: 'el-option', value: '1' },
        { label: 'select2', widget: 'el-option', value: '2' },
      ]
    }
  ];
  /**
   * 组件分析：
   *  1. 兼容各种form表单元素（检验）
   *  2. 能够复现默认值
   *  3. 检验功能
   *  4. 点击提交将输入的内容提交，提交前校验
   */
  export default {
    name: 'FormGroup',
    props: {
      labelWidth: {
        type: String,
        default: '100px'
      },
      formList: {
        type: Array,
        default: () => formList
      },
      // submitApi: {
      //   type: String,
      //   required: true
      // }
    },
    data () {
      return {
        formValues: {} // 这里为什么不能用计算属性
      };
    },
    computed: {},
    mounted () {
      this.setValueList();
    },
    methods: {
      setValueList () {
        const values = {}
        this.formList.map(form => {
          this.formValues.set(this.formValues, form.prop, form.value);
        });
      },
      onSubmit () {
        this.$refs.formGroup.validate(valid => {
          if (valid) {
            console.log(this.formValues);
          }
        });
      }
    }
  };
</script>

<style lang="scss" scoped>

</style>
