<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Kiến thức sức khỏe cộng đồng</h1>
    <div class="row">
      <div v-for="(item, index) in items" :key="index" class="col-sm-4 mb-4">
        <div class="card h-100 shadow-sm">
          <img :src="item.image" class="card-img-top img-fluid" style="height: 200px; object-fit: cover;" alt="Hình ảnh" />
          <div class="card-body">
            <h3 class="card-title h5">{{ item.title }}</h3>
            <p class="card-text text-muted">{{ item.content }}</p>
            <button class="btn btn-info text-white">Xem chi tiết</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Import ảnh trực tiếp (Đảm bảo file ảnh tồn tại trong src/assets/images/)
import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';

const items = ref([
  { title: '8 loại rau củ quả giàu canxi', content: 'Canxi là khoáng chất thiết yếu...', image: img1 },
  { title: 'Các loại gia vị tốt cho sức khỏe', content: 'Một số loại gia vị có lợi...', image: img2 },
  { title: '9 loại đậu bổ dưỡng nên dùng nhiều', content: 'Đậu cung cấp protein thực vật...', image: img3 },
]);
</script>