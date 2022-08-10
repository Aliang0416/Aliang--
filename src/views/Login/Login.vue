<template>
  <div class="login-continer">
    <div class="top">
      <h1>Login</h1>
    </div>
    <div class="input">
      <van-cell-group>
  <van-field
    v-model.trim="username"
    required
    clearable
    label="用户名"
    right-icon="question-o"
    placeholder="请输入用户名"
    @click-right-icon="$toast('question')"
  />

  <van-field
    v-model.trim="password"
    type="password"
    label="密码"
    placeholder="请输入密码"
    required
  />
</van-cell-group>
    </div>
    <div class="btn">
      <van-button type="info" @click="login">登录</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      if (this.username === 'Aliang' && this.password === '123') {
        localStorage.setItem('token', 'Bearer')
        this.$router.push('/user')
      } else {
        localStorage.removeItem('token')
        alert('登录失败')
      }
    }
  }
}
</script>

<style scoped lang="less">
.login-continer {
  background-color: antiquewhite;
  height: 800px;
  .top {
    margin-top: -21px;
    h1 {
      color: rgb(255, 255, 255);
    }
  }
  .input {
    margin-top: 150px;
  }
  .btn {
    margin: 50px 172px;
  }
  /deep/ .van-button--normal{
      padding: 0 20px;
    }
}
</style>
