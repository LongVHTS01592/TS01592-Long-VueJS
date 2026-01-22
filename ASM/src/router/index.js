import { createRouter, createWebHistory } from 'vue-router'

// Định nghĩa các route
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue'),
    meta: { requiresAuth: true } // Đánh dấu trang cần đăng nhập
  },
  {
    path: '/create-post',
    name: 'CreatePost',
    component: () => import('../views/CreatePost.vue'),
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// HÀM KIỂM TRA QUYỀN TRUY CẬP (Navigation Guard)
router.beforeEach((to, from, next) => {
  const user = JSON.parse(localStorage.getItem('user'))
  
  if (to.meta.requiresAuth && !user) {
    // Nếu trang yêu cầu đăng nhập mà chưa có user trong localStorage
    alert('Vui lòng đăng nhập để tiếp tục!')
    next('/login')
  } else {
    next()
  }
})

export default router