<template>
  <div class="admin-login">
    <el-card class="admin-login-card">
      <div class="admin-login-card-title">系统登录</div>
      <el-form :model="formItem" :rules="rules" class="admin-login-form" ref="formItem" label-width="80px">
        <el-form-item label="用户名" prop="username">
          <el-col :span="20">
            <el-input v-model="formItem.username" placeholder="请输入用户名"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-col :span="20">
            <el-input v-model="formItem.email" type="email" placeholder="请输入用邮箱"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-col :span="20">
            <el-input v-model="formItem.password" type="password" placeholder="请输入密码"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-col class="admin-login-form-register" :span="20">
            <el-col>已经有账号了？去
              <router-link to="/register">注册</router-link>
            </el-col>
            <el-button type="primary" @click="onSubmit" :loading="loginLoading">登录</el-button>
          </el-col>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import regExpConfig from 'utils/regExpConfig';

  export default {
    name: 'AdminLogin',
    data () {
      return {
        formItem: {
          username: '',
          email: '',
          password: '',
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名' },
          ],
          email: [
            { required: true, message: '请输入正确的邮箱', pattern: regExpConfig.email }
          ],
          password: [
            { required: true, message: '请输入密码' }
          ]
        },
        loginLoading: false
      };
    },
    methods: {
      ...mapActions('user', ['SET_USER_INFO']),
      ...mapActions('router', ['GET_MENUS']),
      onSubmit () {
        this.$refs.formItem.validate((valid) => {
          if (valid) {
            this.loginLoading = true;
            this.SET_USER_INFO({ params: this.formItem })
              .then(
                () => {
                  this.loginLoading = false;
                  return this.GET_MENUS();
                },
                () => this.loginLoading = false
              )
              .then(
                res => console.log(res)
              );
          }
        });
      },
    }
  };
</script>

<style lang="scss" scoped>
  .admin-login {
    display: flex;
    justify-content: center;
    /*未设置或者子元素高度为auto的话，子元素默认会占满屏幕*/
    margin-top: -10vh;
    align-items: center;
    height: 100%;
    &-card {
      width: 480px;
    }
    &-card-title {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      margin-bottom: 20px;
    }
    &-form {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    &-form-register {
      display: flex;
      justify-content: flex-end;
    }
  }
</style>
