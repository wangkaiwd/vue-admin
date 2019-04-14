<template>
  <div class="admin-main">
    <el-row :gutter="12" class="list-wrapper">
      <el-col :span="4" :lg="4" :md="8" :sm="12" class="list" v-for="list in cardList" :key="list.id">
        <el-card>
          <div class="left-icon" :style="{backgroundColor:list.color}">
            <admin-icon :icon="list.icon"></admin-icon>
          </div>
          <div class="right-text">
            <span class="right-text-count">
              <count-up :start-val="list.count"></count-up>
            </span>
            <span class="right-text-title">
              {{list.title}}
            </span>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row class="admin-main-charts">
      <el-row :gutter="12">
        <el-col :lg="8" :md="24">
          <el-card shadow="always">
            <admin-charts height="400px" width="100%" :options="options1"></admin-charts>
          </el-card>
        </el-col>
        <el-col :lg="16" :md="24">
          <el-card shadow="always">
            <admin-charts height="400px" width="100%" :options="options2"></admin-charts>
          </el-card>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-card shadow="always">
            <admin-charts height="400px" width="100%" :options="options3"></admin-charts>
          </el-card>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script>
  import CountUp from 'components/countUp';
  import AdminCharts from 'components/chart';
  import options1 from './options1';
  import options2 from './options2';
  import options3 from './options3';

  const CARD_CFG = [
    {
      id: '1',
      title: '新增用户',
      count: 803,
      icon: 'user',
      color: 'rgb(45, 140, 240)'
    },
    {
      id: '2',
      title: '累计点击',
      count: 232,
      icon: 'click',
      color: 'rgb(25, 190, 107)'
    },
    {
      id: '3',
      title: '新增问答',
      count: 142,
      icon: 'question',
      color: 'rgb(255, 153, 0)'
    },
    {
      id: '4',
      title: '分享统计',
      count: 657,
      icon: 'share',
      color: 'rgb(237, 63, 20)'
    },
    {
      id: '5',
      title: '新增互动',
      count: 12,
      icon: 'interactive',
      color: 'rgb(228, 108, 187)'
    },
    {
      id: '6',
      title: '新增页面',
      count: 14,
      icon: 'page',
      color: 'rgb(154, 102, 228)'
    }
  ];
  export default {
    name: 'AdminMain',
    components: {
      CountUp, AdminCharts
    },
    data () {
      return {
        cardList: CARD_CFG,
        options1,
        options2,
        options3
      };
    }
  };
</script>

<style lang="scss" scoped>
  .admin-main {
    .list-wrapper {
      margin-top: -10px;
    }
    &-charts {
      margin-top: -10px;
      .el-col {
        margin-top: 10px;
      }
    }
    .list {
      margin-top: 10px;
      /deep/ .el-card__body {
        display: flex;
        padding: 0;
      }
    }
    .left-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      height: 110px;
      color: $white;
      font-size: 36px;
    }
    .right-text {
      flex: 2;
    }
    .right-text-count {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 50px;
      height: calc(100% - 24px);
    }
    .right-text-title {
      display: inline-block;
      width: 100%;
      text-align: center;
    }
    .el-card {
      color: #515a6e;
    }
  }
</style>
