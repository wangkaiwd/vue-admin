<template>
  <div class="admin-login">
    <el-card class="admin-login-card">
      <el-form :model="formItem" :rules="rules" label-width="80px" status-icon>
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
            <el-input v-model="formItem.password" placeholder="请输入密码"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="确认密码" prop="confirmPassword">
          <el-col :span="20">
            <el-input v-model="formItem.confirmPassword" placeholder="请输入确认密码"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="活动区域" prop="role">
          <el-select class="admin-login-form-select" v-model="formItem.role" placeholder="请选择角色">
            <el-option label="管理员" value="manager"></el-option>
            <el-option label="员工" value="employee"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-col class="admin-login-form-register" :span="20">
            <el-button type="primary" @click="onSubmit">注册</el-button>
          </el-col>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'AdminLogin',
    data () {
      return {
        formItem: {
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
          role: ''
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名' },
          ],
          email: [
            { required: true, message: '请输入邮箱' }
          ],
          password: [
            { required: true, message: '请输入密码' }
          ],
          confirmPassword: [
            { required: true, message: '请输入确认密码' }
          ],
          role: [
            { required: true, message: '请至少选择一个角色' }
          ],
        }
      };
    },
    methods: {
      onSubmit () {
        console.log('submit');
      }
    }
  };
</script>

<style lang="scss" scoped>
  .admin-login {
    &-card {
      width: 480px;
    }
    &-form-register {
      display: flex;
      justify-content: flex-end;
    }
  }
</style>
