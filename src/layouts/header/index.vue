<template>
  <div class="base-header">
    <div @click="CHANGE_NAV(!isCollapsed)" class="base-header-icon" :class="{collapsed:isCollapsed}">
      <admin-icon icon="menu"></admin-icon>
    </div>
    <div class="base-header-user">
      <span class="base-header-user-name">{{userInfo.username}}</span>
      <el-dropdown @command="onCommand">
        <img
          class="base-header-user-avatar"
          :src="userInfo.avatar"
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
  import { mapState, mapMutations } from 'vuex';
  import { fetchLogout } from 'api/user';
  import { goLogin } from 'utils/user';

  export default {
    name: 'BaseHeader',
    computed: {
      ...mapState('user', ['userInfo']),
      ...mapState(['isCollapsed'])
    },
    methods: {
      ...mapMutations(['CHANGE_NAV']),
      onCommand (command) {
        command = command[0].toUpperCase() + command.slice(1);
        console.log('command', command);
        this[`on${command}`]();
      },
      onLogout () {
        fetchLogout().then(
          () => goLogin(),
          err => console.log(err)
        );
      },
      onPersonal () {
        console.log('个人中心');
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
    &-icon {
      margin-left: 20px;
      font-size: 24px;
      cursor: pointer;
      transition: all .4s;
      color: $white;
      &.collapsed {
        transform: rotate(90deg);
      }
    }
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
