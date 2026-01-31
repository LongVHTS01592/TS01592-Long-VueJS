<template>
  <div>
    <h2>Tạo bài viết mới</h2>
    <input v-model="title" placeholder="Tiêu đề bài viết" />
    <input v-model="author" placeholder="Tên tác giả" />
    <textarea v-model="content" placeholder="Nội dung bài viết"></textarea>
    
    <button @click="submitPost">Đăng bài</button>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

// Sử dụng defineEmits để emit sự kiện
const emit = defineEmits(['add-post']);

// Khởi tạo các biến reactive bằng ref
const title = ref('');
const content = ref('');
const author = ref('');

function submitPost() {
  // Kiểm tra điều kiện các trường không được để trống
  if (title.value && content.value && author.value) {
    const newPost = {
      title: title.value,
      content: content.value,
      author: author.value
    };

    // Gửi sự kiện 'add-post' với dữ liệu của bài viết lên component cha
    emit('add-post', newPost);

    // Reset các trường nhập liệu về trống (Reset fields)
    title.value = '';
    content.value = '';
    author.value = '';
  }
}
</script>

<style scoped>
input,
textarea {
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
}

button {
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #2980b9;
}
</style>