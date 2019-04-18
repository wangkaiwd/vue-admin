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
            prop: 'name', width: '180', label: '姓名',
            editable: {
              widget: 'el-input'
            }
          },
          { prop: 'age', width: '180', label: '年龄' },
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
