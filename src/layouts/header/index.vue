<template>
  <div class="base-header">
    <div class="base-header-user">
      <span class="base-header-user-name">{{userInfo.username}}</span>
      <el-dropdown @command="onCommand">
        <img
          class="base-header-user-avatar"
          :src="userInfo.email"
          alt="">
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="personal">个人中心</el-dropdown-item>
          <el-dropdown-item command="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'BaseHeader',
    computed: {
      ...mapState(['userInfo'])
    },
    methods: {
      onCommand (command) {
        console.log('command', command);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .base-header {
    display: flex;
    align-items: center;
    height: 60px;
    background-color: $blue;
    &-user {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: auto;
    }
    &-user-name {
      color: $white;
    }
    &-user-avatar {
      margin-left: 6px;
      margin-right: 20px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      cursor: pointer;
    }
  }
</style>
