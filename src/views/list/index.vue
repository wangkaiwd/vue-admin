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
        type="index"
        width="50"
      >
      </el-table-column>
      <el-table-column
        prop="date"
        label="创建时间"
        min-width="240"
      >
        <template #default="{row}">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{formatTime(row.date)}}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="type"
        label="收支类型"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="describe"
        label="收支描述"
        width="200"
      >
      </el-table-column>
      <el-table-column
        prop="income"
        label="收入"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="expand"
        label="支出"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="cash"
        label="账户现金"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="remark"
        label="备注"
        width="120"
      >
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
  import dayJs from 'dayjs';

  export default {
    name: 'index',
    data () {
      return {
        searchForm: {
          name: ''
        },
        tableData: []
      };
    },
    mounted () {
      this.getList();
    },
    methods: {
      getList () {
        fetchProfileList().then(
          res => {
            this.tableData = res.data.data;
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
      },
      formatTime (date) {
        return dayJs(date).format('YYYY-MM-DD HH:mm:ss');
      }
    }
  };
</script>

<style scoped>

</style>
