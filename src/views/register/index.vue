<template>
  <div class="admin-register">
    <el-card class="admin-register-card">
      <div class="admin-register-card-title">系统注册</div>
      <el-form :model="formItem" :rules="rules" class="admin-register-form" ref="formItem" label-width="80px">
        <el-form-item label="用户名" prop="username">
          <el-col :span="20">
            <el-input v-model="formItem.username" placeholder="请输入用户名"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-col :span="20">
            <el-input v-model="formItem.email" placeholder="请输入用邮箱"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-col :span="20">
            <el-input v-model="formItem.password" type="password" placeholder="请输入密码"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="确认密码" prop="confirmPassword">
          <el-col :span="20">
            <el-input v-model="formItem.confirmPassword" type="password" placeholder="请输入确认密码"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="活动区域" prop="role">
          <el-select class="admin-register-form-select" v-model="formItem.role" placeholder="请选择角色">
            <el-option label="管理员" value="manager"></el-option>
            <el-option label="员工" value="employee"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-col class="admin-register-form-register" :span="20">
            <el-col>已经有账号了？去
              <router-link to="/login">登录</router-link>
            </el-col>
            <el-button type="primary" @click="onSubmit" :loading="registerLoading">注册</el-button>
          </el-col>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  import regExpConfig from 'utils/regExpConfig';
  import { fetchRegister } from 'api/user';

  export default {
    name: 'AdminRegister',
    data () {
      return {
        formItem: {
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
          role: 'manager'
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名' },
          ],
          email: [
            { required: true, message: '请输入正确的邮箱', pattern: regExpConfig.email }
          ],
          password: [
            { required: true, message: '请输入密码' },
            { validator: this.validatePassword }
          ],
          confirmPassword: [
            { required: true, message: '请输入确认密码' },
            { validator: this.validateConfirmPassword }
          ],
          role: [
            { required: true, message: '请至少选择一个角色' }
          ],
        },
        registerLoading: false
      };
    },
    methods: {
      onSubmit () {
        console.log('submit');
        this.$refs.formItem.validate((valid) => {
          if (valid) {
            const { confirmPassword, ...restParams } = this.formItem;
            this.registerLoading = true;
            fetchRegister(restParams).then(
              res => {
                this.registerLoading = false;
                this.$message.success(res.msg);
                this.$router.replace('/login');
              },
              err => {
                this.registerLoading = false;
                console.log(err);
              }
            );
          }
        });
      },
      validatePassword (rule, value, callback) {
        const { password, confirmPassword } = this.formItem;
        if (password !== confirmPassword && confirmPassword !== '') {
          this.$refs.formItem.validateField(['confirmPassword']);
        }
        callback();
      },
      validateConfirmPassword (rule, value, callback) {
        const { password, confirmPassword } = this.formItem;
        if (password !== confirmPassword) {
          callback('俩次输入的密码不一致');
        }
        callback();
      }
    }
  };
</script>

<style lang="scss" scoped>
  .admin-register {
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
