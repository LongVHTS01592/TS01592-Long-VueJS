<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-sm-8">
        <h1 class="mb-4">Thông tin cá nhân</h1>
        
        <form @submit.prevent>
          <div class="mb-3">
            <label class="form-label">Họ và Tên:</label>
            <input 
              v-model="userInfo.name" 
              type="text" 
              class="form-control" 
              placeholder="Nhập họ và tên" 
            />
          </div>
          
          <div class="mb-3">
            <label class="form-label">Tuổi:</label>
            <input 
              v-model.number="userInfo.age" 
              type="number" 
              class="form-control" 
              placeholder="Nhập tuổi" 
            />
          </div>
          
          <div class="mb-3">
            <label class="form-label">Email:</label>
            <input 
              v-model="userInfo.email" 
              type="email" 
              class="form-control" 
              placeholder="anv@example.com" 
            />
          </div>
        </form>

        <div class="info-display mt-4 p-4 bg-dark text-white rounded shadow">
          <h2 class="h4 mb-3">Thông tin đã nhập:</h2>
          <p><strong>Họ và Tên:</strong> {{ userInfo.name }}</p>
          <p><strong>Tuổi:</strong> {{ userInfo.age }}</p>
          <p><strong>Email:</strong> {{ userInfo.email }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

// Khởi tạo đối tượng thông tin người dùng
// Sử dụng reactive là lựa chọn tối ưu cho object nhiều trường
const userInfo = reactive({
  name: 'Nguyen Van A', // Có thể để trống mặc định
  age: 18,
  email: 'anv@example.com'
});
</script>

<style scoped>
/* Bạn có thể thêm một chút custom style nếu cần */
.info-display p {
  margin-bottom: 8px;
  font-size: 1.1rem;
}
</style>