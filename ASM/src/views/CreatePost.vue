<template>
  <div class="row justify-content-center mt-5">
    <div class="col-md-8">
      <div class="card shadow-sm">
        <div class="card-header bg-primary text-white">
          <h4 class="mb-0"><i class="bi bi-pencil-square me-2"></i>Đăng bài viết mới</h4>
        </div>
        <div class="card-body p-4">
          <form @submit.prevent="submitPost">
            <div class="mb-3">
              <label class="form-label fw-bold">Tiêu đề</label>
              <input 
                v-model="post.title" 
                type="text" 
                class="form-control" 
                placeholder="Nhập tiêu đề ấn tượng..." 
                required
              >
            </div>

            <div class="mb-3">
              <label class="form-label fw-bold">Link hình ảnh minh họa (Không bắt buộc)</label>
              <input 
                v-model="post.image" 
                type="text" 
                class="form-control" 
                placeholder="https://example.com/image.jpg"
              >
            </div>

            <div class="mb-3">
              <label class="form-label fw-bold">Nội dung bài viết</label>
              <textarea 
                v-model="post.content" 
                class="form-control" 
                rows="8" 
                placeholder="Viết nội dung bài viết tại đây..." 
                required
              ></textarea>
            </div>

            <div class="d-flex justify-content-end gap-2">
              <button type="button" @click="$router.push('/')" class="btn btn-secondary">Hủy bỏ</button>
              <button type="submit" class="btn btn-success px-4">Đăng bài ngay</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Khởi tạo đối tượng bài viết
const post = ref({
  title: '',
  image: '',
  content: ''
})

const submitPost = () => {
  // 1. Lấy thông tin người dùng đang đăng nhập
  const currentUser = JSON.parse(localStorage.getItem('user'))
  
  if (!currentUser) {
    alert('Vui lòng đăng nhập để đăng bài!')
    router.push('/login')
    return
  }

  // 2. Tạo đối tượng bài viết hoàn chỉnh
  const newPost = {
    id: Date.now(), // Tạo ID duy nhất bằng timestamp
    title: post.value.title,
    image: post.value.image || 'https://via.placeholder.com/800x400',
    content: post.value.content,
    author: currentUser.name,
    date: new Date().toLocaleString('vi-VN'),
    comments: []
  }

  // 3. Lấy danh sách bài viết cũ từ LocalStorage
  const existingPosts = JSON.parse(localStorage.getItem('all_posts') || '[]')

  // 4. Thêm bài mới vào đầu danh sách
  existingPosts.unshift(newPost)

  // 5. Lưu lại vào LocalStorage
  localStorage.setItem('all_posts', JSON.stringify(existingPosts))

  // 6. Thông báo và chuyển về trang chủ
  alert('Chúc mừng! Bài viết của bạn đã được đăng thành công.')
  router.push('/')
}
</script>

<style scoped>
.card {
  border: none;
  border-radius: 15px;
}
.card-header {
  border-radius: 15px 15px 0 0 !important;
}
input, textarea {
  border-radius: 8px;
}
</style>