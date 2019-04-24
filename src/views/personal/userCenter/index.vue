<template>
  <el-row type="flex" justify="center" class="user-center">
    <el-col :span="18">
      <el-card class="box-card">
        <el-row class="user-center-wrapper">
          <el-col class="user-center-item personal-avatar" :span="18">
            <img class="user-avatar" src="~img/defaultAvatar.png" alt="">
            <span class="user-name">
              wangkaiwd
            </span>
            <span class="user-motto">
              Enjoy what you are doing!
            </span>
          </el-col>
          <el-col
            class="user-center-item"
            :span="18"
            v-for="item in userJobInfo"
            :key="item.id"
          >
            <admin-icon :icon="item.icon"></admin-icon>
            <span class="detail-text" v-if="item.icon === 'github'">
              <a target="_blank" :href="item.text">前往github</a>
            </span>
            <span class="detail-text" v-else>{{item.text}}</span>
          </el-col>
        </el-row>
        <el-row class="user-center-wrapper">
          <el-col :span="18" class="user-center-tag-title">标签</el-col>
          <el-col class="user-center-tag-content" :span="18">
            <el-tag
              class="user-center-tag-item"
              :key="tag"
              v-for="tag in tags"
              size="small"
              closable
              @close="onTagClose(tag)">
              {{tag}}
            </el-tag>
            <el-input
              class="user-center-tag-item new-tag-input"
              v-if="inputVisible"
              v-model="inputValue"
              ref="saveTagInput"
              size="mini"
              @keyup.enter.native="onInputConfirm"
              @blur="onInputConfirm"
            >
            </el-input>
            <el-button
              v-else
              class="user-center-tag-item"
              size="mini"
              @click="showInput"
            >
              + New Tag
            </el-button>
          </el-col>
        </el-row>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
  const userJobInfo = [
    { icon: 'job', text: 'web前端工程师', id: 1, },
    { icon: 'department', text: '某某公司－某某某事业群－某某平台部－某某技术部－front developer', id: 2 },
    { icon: 'address', text: '浙江省 杭州市 萧山区', id: 3 },
    { icon: 'github', text: 'https://github.com/wangkaiwd', id: 4 }
  ];
  import AdminIcon from 'components/icon';

  export default {
    name: 'UserCenter',
    components: { AdminIcon },
    data () {
      return {
        userJobInfo,
        tags: ['很有想法的', '专注学习', '王者荣耀', '抖音', '乒乓球'],
        inputVisible: false,
        inputValue: ''
      };
    },
    methods: {
      onTagClose (tag) {
        const i = this.tags.findIndex(item => item === tag);
        this.tags.splice(i, 1);
      },
      onInputConfirm () {
        if (this.inputValue.trim() === '') {
          return this.$message.warning('请输入内容');
        }
        this.tags.push(this.inputValue);
        this.inputValue = '';
        this.inputVisible = false;
      },
      showInput () {
        this.inputVisible = true;
      }
    }
  };
</script>

<style lang="scss" scoped>
  .user-center {
    .box-card {
      .personal-avatar {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 10px;
      }
      .user-avatar {
        width: 200px;
        height: 200px;
        border-radius: 50%;
      }
      .user-name {
        display: inline-block;
        margin: 10px 0;
        font-size: 28px;
        font-weight: 500;
      }
    }
    &-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &-tag-title {
      margin: 20px 0;
    }
    &-tag-content {margin-left: -6px; margin-top: -6px;}
    &-tag-item {margin-left: 10px;margin-top: 10px;}
    &-item:not(:first-child) {margin: 6px 0;}
    .detail-text {
      margin-left: 6px;
      line-height: 1.2;
    }
    .new-tag-input {width: 80px;}
  }
</style>
