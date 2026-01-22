<template>
  <div class="row justify-content-center mt-5">
    <div class="col-md-4">
      <div class="card shadow border-0">
        <div class="card-body p-4 text-center">
          <h2 class="mb-4">Đăng nhập</h2>
          <form @submit.prevent="handleLogin">
            <div class="mb-3 text-start">
              <label class="form-label">Email</label>
              <input v-model="email" type="email" class="form-control" required>
            </div>
            <div class="mb-4 text-start">
              <label class="form-label">Mật khẩu</label>
              <input v-model="password" type="password" class="form-control" required>
            </div>
            <button type="submit" class="btn btn-primary w-100 py-2">Vào hệ thống</button>
          </form>
          <p class="mt-3 mb-0 small">Chưa có tài khoản? <router-link to="/register">Đăng ký ngay</router-link></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const router = useRouter()

const handleLogin = () => {
  const registeredUser = JSON.parse(localStorage.getItem('user_account'))

  if (registeredUser && registeredUser.email === email.value && registeredUser.password === password.value) {
    localStorage.setItem('user', JSON.stringify(registeredUser))
    window.location.href = '/' // Load lại trang để cập nhật Navbar
  } else {
    alert('Email hoặc mật khẩu không chính xác!')
  }
}
</script>