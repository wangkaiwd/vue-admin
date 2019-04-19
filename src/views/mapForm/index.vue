<template>
  <form-group></form-group>
</template>

<script>
  import formGroup from 'components/formGroup';

  const formList = [
    {
      label: '输入框',
      prop: 'input',
      value: '111',
      widget: 'el-input',
      rules: [
        { required: true, message: '请输入输入框', trigger: 'change' }
      ],
      widgetProps: {}
    },
    {
      label: '单选',
      value: '2',
      prop: 'radio',
      widget: 'el-radio-group',
      rules: [
        { required: true, message: '请选择单选', trigger: 'change' }
      ],
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
  export default {
    name: 'MapForm',
    components: { formGroup },
    data () {
      return {
        formList
      };
    }
  };
</script>

<style scoped>

</style>
