<template>
  <div class="home-container">
    <div class="row">
      <div class="col-md-8">
        <h2 class="mb-4 border-bottom pb-2">Bảng tin mới nhất</h2>
        
        <div v-if="posts.length === 0" class="alert alert-info">
          Chưa có bài viết nào. Hãy là người đầu tiên đăng bài!
        </div>

        <div v-for="(post, index) in posts" :key="post.id" class="card mb-4 shadow-sm border-0">
          <img :src="post.image" class="card-img-top" style="max-height: 300px; object-fit: cover;">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-start">
              <h3 class="card-title text-primary">{{ post.title }}</h3>
              <button v-if="currentUser && post.author === currentUser.name" 
                      @click="deletePost(index)" class="btn btn-outline-danger btn-sm">
                <i class="bi bi-trash"></i>
              </button>
            </div>
            <p class="text-muted small">
              <i class="bi bi-person"></i> {{ post.author }} | 
              <i class="bi bi-calendar"></i> {{ post.date }}
            </p>
            <p class="card-text">{{ post.content }}</p>
            
            <hr>
            <h6 class="fw-bold mb-3"><i class="bi bi-chat-left-dots me-2"></i>Bình luận ({{ post.comments.length }})</h6>
            
            <div class="comments-list mb-3">
              <div v-for="c in post.comments" :key="c.time" class="p-2 mb-2 bg-light rounded border-start border-primary border-3">
                <div class="d-flex justify-content-between">
                  <span class="fw-bold small text-primary">{{ c.user }}</span>
                  <span class="text-muted" style="font-size: 0.7rem;">{{ c.time }}</span>
                </div>
                <div class="small">{{ c.text }}</div>
              </div>
            </div>

            <div v-if="currentUser" class="input-group">
              <input v-model="commentTexts[index]" type="text" class="form-control" placeholder="Viết bình luận...">
              <button @click="submitComment(index)" class="btn btn-primary">Gửi</button>
            </div>
            <div v-else class="text-center py-2 bg-light rounded small text-muted">
              Vui lòng <router-link to="/login">đăng nhập</router-link> để bình luận.
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card shadow-sm border-0 bg-primary text-white p-3 mb-4">
          <h5>Xin chào!</h5>
          <p class="small">Chào mừng bạn đến với hệ thống quản lý Blog cá nhân được xây dựng bằng VueJS và Bootstrap.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const posts = ref([])
const currentUser = ref(JSON.parse(localStorage.getItem('user')))
const commentTexts = ref([])

onMounted(() => {
  const savedPosts = JSON.parse(localStorage.getItem('all_posts') || '[]')
  posts.value = savedPosts
})

const submitComment = (postIdx) => {
  if (!commentTexts.value[postIdx]) return

  const newComment = {
    user: currentUser.value.name,
    text: commentTexts.value[postIdx],
    time: new Date().toLocaleString('vi-VN')
  }

  posts.value[postIdx].comments.push(newComment)
  localStorage.setItem('all_posts', JSON.stringify(posts.value))
  commentTexts.value[postIdx] = '' // Reset input
}

const deletePost = (index) => {
  if (confirm('Bạn có chắc chắn muốn xóa bài viết này?')) {
    posts.value.splice(index, 1)
    localStorage.setItem('all_posts', JSON.stringify(posts.value))
  }
}
</script>