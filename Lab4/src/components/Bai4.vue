<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Kiến thức sức khỏe cộng đồng</h1>
    <div class="row">
      <div v-for="(item, index) in items" :key="index" class="col-sm-4 mb-4">
        <div class="card h-100">
          <img :src="item.image" class="card-img-top" alt="Hình ảnh minh họa" />
          <div class="card-body">
            <h3 class="card-title">{{ item.title }}</h3>
            <p class="card-text">{{ item.content }}</p>
            <button class="btn btn-info">Xem chi tiết</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Nhập ảnh từ thư mục assets (Đảm bảo bạn đã có ảnh trong thư mục này)
import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';

const items = [
  { title: '8 loại rau củ quả giàu canxi', content: 'Canxi là...', image: img1 },
  { title: 'Các loại gia vị tốt cho sức khỏe', content: 'Một số loại...', image: img2 },
  { title: '9 loại đậu bổ dưỡng nên dùng nhiều', content: 'Đậu lăng...', image: img3 },
];
</script>

<style scoped>
/* Giúp ảnh không bị méo và đều nhau */
.card-img-top {
  height: 200px;
  object-fit: cover;
}
</style>