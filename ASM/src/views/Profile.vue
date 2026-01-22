<template>
  <div class="row justify-content-center mt-5">
    <div class="col-md-6">
      <div class="card shadow border-0">
        <div class="card-header bg-dark text-white text-center py-4">
          <div class="position-relative d-inline-block">
            <img 
              :src="user.avatar || 'https://via.placeholder.com/150'" 
              class="rounded-circle img-thumbnail shadow" 
              style="width: 150px; height: 150px; object-fit: cover;"
              alt="Avatar"
            >
            <span class="position-absolute bottom-0 end-0 badge rounded-pill bg-primary border border-2 border-white p-2">
              <i class="bi bi-camera-fill"></i>
            </span>
          </div>
          <h3 class="mt-3 mb-0">{{ user.name }}</h3>
          <p class="text-light opacity-75 small">{{ user.email }}</p>
        </div>

        <div class="card-body p-4">
          <h5 class="card-title mb-4 text-primary fw-bold border-bottom pb-2">Chỉnh sửa thông tin</h5>
          
          <form @submit.prevent="handleUpdate">
            <div class="mb-3">
              <label class="form-label fw-bold">Họ và tên</label>
              <div class="input-group">
                <span class="input-group-text"><i class="bi bi-person"></i></span>
                <input v-model="user.name" type="text" class="form-control" required>
              </div>
            </div>

            <div class="mb-3">
              <label class="form-label fw-bold">Email</label>
              <div class="input-group">
                <span class="input-group-text"><i class="bi bi-envelope"></i></span>
                <input v-model="user.email" type="email" class="form-control" required>
              </div>
            </div>

            <div class="mb-3">
              <label class="form-label fw-bold">Mật khẩu mới</label>
              <div class="input-group">
                <span class="input-group-text"><i class="bi bi-key"></i></span>
                <input v-model="user.password" type="password" class="form-control" placeholder="Để trống nếu không muốn đổi">
              </div>
            </div>

            <div class="mb-4">
              <label class="form-label fw-bold">Link ảnh đại diện (URL)</label>
              <div class="input-group">
                <span class="input-group-text"><i class="bi bi-image"></i></span>
                <input v-model="user.avatar" type="text" class="form-control" placeholder="https://link-anh.png">
              </div>
            </div>

            <div class="d-grid gap-2">
              <button type="submit" class="btn btn-primary btn-lg">
                <i class="bi bi-save me-2"></i>Lưu thay đổi
              </button>
              <button type="button" @click="$router.push('/')" class="btn btn-outline-secondary">
                Quay lại Trang chủ
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const user = ref({
  name: '',
  email: '',
  password: '',
  avatar: ''
})

// Khi trang vừa load, lấy dữ liệu từ localStorage
onMounted(() => {
  const savedUser = JSON.parse(localStorage.getItem('user'))
  if (savedUser) {
    user.value = { ...savedUser }
    // Lưu ý: Không hiển thị mật khẩu cũ vì lý do bảo mật, 
    // người dùng chỉ nhập nếu muốn đổi mật khẩu mới.
    user.value.password = '' 
  }
})

const handleUpdate = () => {
  // Lấy dữ liệu cũ để giữ lại mật khẩu nếu người dùng không nhập mật khẩu mới
  const oldData = JSON.parse(localStorage.getItem('user'))
  
  const updatedUser = {
    ...user.value,
    password: user.value.password || oldData.password // Dùng pass mới hoặc giữ pass cũ
  }

  // Cập nhật lại localStorage (cả phiên đăng nhập và tài khoản đã đăng ký)
  localStorage.setItem('user', JSON.stringify(updatedUser))
  localStorage.setItem('user_account', JSON.stringify(updatedUser))

  alert('Cập nhật thông tin thành công!')
  
  // Tải lại trang để Navbar cập nhật tên/ảnh mới
  window.location.reload()
}
</script>

<style scoped>
.card {
  border-radius: 20px;
  overflow: hidden;
}
.card-header {
  border: none;
}
.input-group-text {
  background-color: #f8f9fa;
  border-right: none;
}
.form-control {
  border-left: none;
}
.form-control:focus {
  box-shadow: none;
  border-color: #dee2e6;
}
</style>