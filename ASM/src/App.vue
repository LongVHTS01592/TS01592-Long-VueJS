<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm mb-4">
      <div class="container">
        <router-link class="navbar-brand fw-bold" to="/">
          <i class="bi bi- joysick-fill me-2"></i>MY BLOG
        </router-link>
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Trang chủ</router-link>
            </li>
            <li class="nav-item" v-if="isLoggedIn">
              <router-link class="nav-link" to="/create-post">Đăng bài</router-link>
            </li>
          </ul>

          <ul class="navbar-nav ms-auto">
            <template v-if="!isLoggedIn">
              <li class="nav-item">
                <router-link class="nav-link" to="/login">Đăng nhập</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link btn btn-primary btn-sm text-white ms-lg-2" to="/register">Đăng ký</router-link>
              </li>
            </template>

            <template v-else>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-bs-toggle="dropdown">
                  Chào, <strong>{{ currentUser.name }}</strong>
                </a>
                <ul class="dropdown-menu dropdown-menu-end">
                  <li><router-link class="dropdown-item" to="/profile">Hồ sơ cá nhân</router-link></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item text-danger" href="#" @click.prevent="handleLogout">Đăng xuất</a></li>
                </ul>
              </li>
            </template>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container">
      <router-view />
    </div>

    <footer class="text-center mt-5 py-4 border-top text-muted">
      &copy; 2026 - Dự án Blog VueJS - MSV: TS01592
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const currentUser = ref(null)

// Kiểm tra trạng thái đăng nhập từ localStorage
const checkAuth = () => {
  const user = localStorage.getItem('user')
  if (user) {
    currentUser.value = JSON.parse(user)
  } else {
    currentUser.value = null
  }
}

const isLoggedIn = computed(() => !!currentUser.value)

const handleLogout = () => {
  if (confirm('Bạn có chắc chắn muốn đăng xuất?')) {
    localStorage.removeItem('user')
    currentUser.value = null
    router.push('/login')
  }
}

// Lắng nghe sự thay đổi của localStorage (để cập nhật navbar ngay khi đăng nhập)
onMounted(() => {
  checkAuth()
  window.addEventListener('storage', checkAuth)
})
</script>

<style>
body {
  background-color: #f8f9fa;
}
.nav-link.router-link-active {
  color: #fff !important;
  font-weight: bold;
}
</style>