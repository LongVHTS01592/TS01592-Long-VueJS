<template>
  <div class="row justify-content-center mt-5">
    <div class="col-md-4">
      <div class="card shadow border-0">
        <div class="card-body p-4">
          <h2 class="text-center mb-4">Đăng ký</h2>
          <form @submit.prevent="handleRegister">
            <div class="mb-3">
              <label class="form-label">Họ tên</label>
              <input v-model="form.name" type="text" class="form-control" required>
            </div>
            <div class="mb-3">
              <label class="form-label">Email</label>
              <input v-model="form.email" type="email" class="form-control" required>
            </div>
            <div class="mb-3">
              <label class="form-label">Mật khẩu</label>
              <input v-model="form.password" type="password" class="form-control" required>
            </div>
            <button type="submit" class="btn btn-success w-100 py-2">Đăng ký tài khoản</button>
          </form>
          <p class="text-center mt-3 small">Đã có tài khoản? <router-link to="/login">Đăng nhập</router-link></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const form = ref({ name: '', email: '', password: '', avatar: '' })

const handleRegister = () => {
  localStorage.setItem('user_account', JSON.stringify(form.value))
  alert('Đăng ký thành công! Mời bạn đăng nhập.')
  router.push('/login')
}
</script>