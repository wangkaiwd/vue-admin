<template>
  <div class="admin-table">
    <el-button
      class="json-button"
      type="primary"
      @click="dialogVisible=true"
    >
      查看当前表格数据
    </el-button>
    <edit-table
      :columns="columns"
      :tableData.sync="tableData"
    >
    </edit-table>
    <el-dialog
      title="表格数据"
      :visible.sync="dialogVisible"
      @close="dialogVisible=false"
    >
      <el-card>
        <pre><code>{{tableData}}</code></pre>
      </el-card>
    </el-dialog>
  </div>

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
          { prop: 'email', label: '邮箱', width: '220' },
          { prop: 'address', label: '地址', minWidth: '320' },
        ],
        tableData: data.dataSource,
        dialogVisible: false
      };
    },
    computed: {}
  };
</script>

<style lang="scss" scoped>
  .admin-table {
    .json-button {
      margin-bottom: 20px;
    }
  }
</style>
