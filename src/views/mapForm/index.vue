<template>
  <form-group :form-list="formList"></form-group>
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
      widgetProps: {
        placeholder: '请输入内容'
      }
    },
    {
      label: '单选',
      value: '2',
      prop: 'radio',
      widget: 'el-radio-group',
      children: [
        {
          widget: 'el-radio',
          label: '1',
          title: 'radio1'
        },
        {
          widget: 'el-radio',
          label: '2',
          title: 'radio2'
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
        { title: 'checkbox1', widget: 'el-checkbox', label: 1, },
        { title: 'checkbox2', widget: 'el-checkbox', label: 2, },
        { title: 'checkbox3', widget: 'el-checkbox', label: 3, },
      ]
    },
    {
      label: '下拉',
      value: 1,
      prop: 'select',
      widget: 'el-select',
      widgetProps: {},
      children: [
        { title: 'select1', widget: 'el-option', value: 1 },
        { title: 'select2', widget: 'el-option', value: 2 },
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
