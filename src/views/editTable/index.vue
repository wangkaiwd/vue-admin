<template>
  <edit-table
    :columns="columns"
    :tableData="tableData"
  >
  </edit-table>
</template>

<script>
  import EditTable from 'components/editTable';
  import data from 'mock';

  export default {
    name: 'AdminTable',
    components: { EditTable },
    data () {
      return {
        columns: [
          {
            prop: 'name', width: '200', label: '姓名',
            editable: {
              widget: 'el-input',
              required: false,
              trigger: 'blur'
            }
          },
          {
            prop: 'age', width: '200', label: '年龄',
            editable: {
              widget: 'el-input-number',
              min: 1,
              max: 100,
              controls: false,
              style: { width: '100px' }
            }
          },
          { prop: 'email', label: '邮箱' }
        ],
        tableData: data.dataSource
      };
    },
  };
</script>

<style lang="scss" scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
