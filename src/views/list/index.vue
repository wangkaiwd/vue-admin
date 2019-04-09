<template>
  <div>
    <div class="search-form">
      <el-form :model="searchForm" :inline="true">
        <el-form-item>
          <el-input v-model="searchForm.name" placeholder="姓名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">搜索</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table
      :data="tableData"
    >
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column label="操作" width="200">
        <template #default="{row}">
          <el-button
            size="mini"
            @click="onEdit(row)">编辑
          </el-button>
          <el-button
            size="mini"
            type="danger"
            @click="onDelete(row)">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import { fetchProfileList } from 'api/profile';

  export default {
    name: 'index',
    data () {
      return {
        searchForm: {
          name: ''
        },
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      };
    },
    mounted () {
      this.getList();
    },
    methods: {
      getList () {
        fetchProfileList().then(
          res => {
            console.log('res', res);
          }
        );
      },
      onEdit (row) {
        console.log('edit', row);
      },
      onDelete (row) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', { type: 'warning' })
          .then(() => {
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
          });
      }
    }
  };
</script>

<style scoped>

</style>
