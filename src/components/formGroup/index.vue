<template>
  <el-form class="form-group" :model="formValues" ref="formGroup" :label-width="labelWidth">
    <el-form-item
      v-for="item in formList"
      :label="item.label"
      :key="item.prop"
      :prop="item.prop"
      :rules="item.rules"
      :error="errorObject[item.prop]"
    >
      <component :is="item.widget" v-bind="item.widgetProps" v-model="formValues[item.prop]">
        <template v-if="item.children">
          <!-- 需要注意：复选框和单选框的label属性是value属性-->
          <component
            v-for="child in item.children"
            :is="child.widget"
            :value="child.value"
            :label="child.label"
            :key="child.label"
          >
            <!-- checkbox和radio不需要value,只通过label就可以-->
            <span v-if="!child.value">{{child.title}}</span>
          </component>
        </template>
      </component>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">提交</el-button>
      <el-button @click="onReset">重置</el-button>
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
      value: 2,
      prop: 'radio',
      widget: 'el-radio-group',
      widgetProps: {},
      children: [
        {
          widget: 'el-radio',
          value: 1,
          label: 'radio1'
        },
        {
          widget: 'el-radio',
          value: 2,
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
        { label: 'select1', widget: 'el-option', value: 1 },
        { label: 'select2', widget: 'el-option', value: 2 },
      ]
    }
  ];
  /**
   * 组件分析：
   *  1. 兼容各种form表单元素（检验）
   *  2. 能够复现默认值
   *  3. 检验功能
   *  4. 点击提交将输入的内容提交，提交前校验
   *
   * 需求梳理：
   *  1. 后端返回一个json数据：
   *      a. 新增：value值为空
   *      b. 编辑：value值为初始默认值
   *  2. 提交：用户进行新增和编辑以后要调用一个接口将表单数据进行保存
   *  3. 重置：将所有表单中绑定的值设置为空
   *  4. 请求接口接口：
   *      a. 接口校验成功：会更新formList,watch会更新formValues
   *      b. 接口校验失败：会根据返回的错误信息进行对应输入框下方错误提示
   *
   *  过程中碰到的问题:
   *      1. 直接对遍历表单数据进行v-model的绑定，会导致校验出问题，所以绑定了重新赋值的formValues
   *      2. checkbox 和 radio这来个元素有些特殊，通过label来控制对应的value值，通过slot来显示对应的文字信息，
   *          而select是和正常理解一样的
   *      3. 错误信息回显什么时候该消失？
   *      4. 组件的key值设计会不会有什么问题？
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
        formValues: {}, // 这里为什么不能用计算属性
        errorObject: {}
      };
    },
    watch: {
      // 这里为什么使用watch而不使用computed
      formList () { // 在formList发生变化的时候，更新valueList
        this.setFormValues();
      },
      formValues: {
        handler () {
          this.errorObject = {};
        },
        deep: true
      }
    },
    mounted () {
      this.setFormValues();
    },
    methods: {
      setFormValues () {
        this.formList.map(form => {
          this.$set(this.formValues, form.prop, form.value);
        });
      },
      onSubmit () {
        this.$refs.formGroup.validate(valid => {
          if (valid) {
            console.log(this.formValues);
            const reqObj = {
              input: '输入框不对',
              radio: '单选不对',
              checkbox: '多选框不对',
              select: '下拉不对'
            };
            this.errorObject = reqObj;
          }
        });
      },
      onReset () {
        this.$refs.formGroup.resetFields();
      }
    }
  };
</script>

<style lang="scss" scoped>

</style>
