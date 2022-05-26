<template>
  <div class="login-container">
    <el-form
      class="login-form"
      :rules="rules"
      ref="form"
      @submit.prevent="handleSubmit"
    >
      <div class="login-form-header">
        <img
          class="login-logo"
          src="@/assets/login_logo.png"
          alt="logo"
        >
      </div>
      <el-form-item prop="account">
        <el-input
          v-model="user.account"
          placeholder="请输入用户名"
        >
          <template #prefix>
            <i class="el-input_icon el-icon-user" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="pwd">
        <el-input
          v-model="user.pwd"
          placeholder="请输入密码"
        >
          <template #prefix>
            <i class="el-input__icon el-icon-lock" />
          </template>
        </el-input>
      </el-form-item>

      <el-form-item prop="imgcode">
        <div class="imgcode-wrap">
          <el-input
            v-model="user.imgcode"
            placeholder="请输入验证码"
          >
            <template #prefix>
              <i class="el-input_icon el-icon-key" />
            </template>
          </el-input>
          <img
            class="imgcode"
            alt="验证码"
            :src="captchaSrc"
            @click="loadCaptcha"
          >
        </div>
      </el-form-item>
      <el-form-item>
        <el-button
          class="submit-button"
          type="primary"
          :loading="loading"
          native-type="submit"
        >
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup lang="ts">
import { getCaptcha } from '@/api/common'
import type { ICaptchaInfo } from '@/api/types/common'
import { onMounted, reactive, ref } from 'vue'
const user = reactive({
  account: 'admin',
  pwd: '123456',
  imgcode: ''

})

const captchaSrc = ref <ICaptchaInfo['pic_path']>()
onMounted(() => {
  getCaptcha().then((res) => {
    console.log(res)

    captchaSrc.value = res.data.pic_path
  })
})

const loading = ref(false)
const rules = ref({
  account: [{ required: true, message: '请输入账号', trigger: 'change' }],
  pwd: [{ required: true, message: '请输入密码', trigger: 'change' }],
  imgcode: [{ required: true, message: '请输入验证码', trigger: 'change' }]
})

const handleSubmit = async () => {
  console.log('handleSubmit')
}

</script>

<style lang="scss" scoped>
.login-container {
  min-width: 400px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2d3a4b;
}

.login-form {
  padding: 30px;
  border-radius: 6px;
  background: #fff;
  min-width: 350px;
  .login-form__header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;
  }

  .el-form-item:last-child {
    margin-bottom: 0;
  }

  .login__form-title {
    display: flex;
    justify-content: center;
    color: #fff;
  }

  .submit-button {
    width: 100%;
  }

  .login-logo {
    width: 271px;
    height: 74px;
  }
  .imgcode-wrap {
    display: flex;
    align-items: center;
    .imgcode {
      height: 37px;
    }
  }
}
</style>
