<template>
  <div class="list">
    <div class="search-form">
      <el-form :model="searchForm" :inline="true">
        <el-form-item>
          <el-input v-model="searchForm.name" placeholder="姓名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">搜索</el-button>
          <el-button>重置</el-button>
        </el-form-item>
        <el-form-item class="search-form-add">
          <el-button type="primary" @click="onAdd">新增</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table
      :data="tableData"
      v-loading="tableLoading"
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
          <span style="margin-left: 10px">{{row.date | formatTime}}</span>
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
        prop="expend"
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
    <el-pagination
      layout="prev, pager, next"
      :total="pageKey.totalCount"
      :current-page="pageKey.currentPage"
      @current-change="onCurrentChange"
    >
    </el-pagination>
    <add-dialog
      @on-ok="onOkClick"
      :page-type="dialogType"
      :visible.sync="addDialogVisible"
      v-if="addDialogVisible"
      :dialogItem="dialogItem"
    >
    </add-dialog>
  </div>
</template>

<script>
  import { fetchProfileList, fetchProfileDelete } from 'api/profile';
  import AddDialog from './components/addDialog';

  export default {
    name: 'index',
    components: { AddDialog },
    data () {
      return {
        searchForm: {
          name: ''
        },
        tableData: [],
        tableLoading: false,
        addDialogVisible: false,
        dialogType: 'add',
        dialogItem: {},
        pageKey: {
          currentPage: 1,
          pageSize: 10,
          totalCount: 0
        }
      };
    },
    mounted () {
      this.getList();
    },
    methods: {
      getList () {
        this.tableLoading = true;
        const { totalCount, ...restPageKey } = this.pageKey;
        fetchProfileList({ ...restPageKey }).then(
          res => {
            this.tableLoading = false;
            this.tableData = res.data.data;
            this.pageKey.totalCount = res.data.totalCount;
            this.pageKey.currentPage = res.data.currentPage;
          },
          () => this.tableLoading = false
        );
      },
      onAdd () {
        this.dialogType = 'add';
        this.addDialogVisible = true;
        this.dialogItem = {};
      },
      onEdit (row) {
        this.dialogType = 'edit';
        this.addDialogVisible = true;
        this.dialogItem = row;
      },
      onDelete (row) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', { type: 'warning' })
          .then(() => {
            fetchProfileDelete({ id: row.id })
              .then(
                res => {
                  this.$message({
                    type: 'success',
                    message: res.msg
                  });
                  this.getList();
                }
              );
          });
      },
      onOkClick () {
        this.getList();
      },
      onCurrentChange (page) {
        this.pageKey.currentPage = page;
        this.getList();
      }
    }
  };
</script>

<style lang="scss" scoped>
  .list {
    .el-pagination {
      white-space: nowrap;
      padding: 4px 0;
      font-weight: 700;
      display: flex;
      justify-content: flex-end;
    }
  }
</style>
