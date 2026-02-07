<template>
  <div class="container mt-5">
    <div class="card p-4 shadow-sm" style="max-width: 400px;">
      <h3 class="mb-3">Nhập điểm của bạn:</h3>
      
      <input 
        type="number" 
        v-model.number="score" 
        class="form-control mb-2" 
        placeholder="Nhập ĐTB"
        min="0"
        max="10"
        step="0.1"
      />

      <div v-if="score !== null && score !== ''" class="mt-2">
        <strong class="text-primary">Xếp loại: {{ grade }}</strong>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Khởi tạo biến reactive cho điểm trung bình
const score = ref(null);

// Sử dụng computed để tự động tính toán xếp loại dựa trên điểm số
const grade = computed(() => {
  if (score.value === null || score.value === '') return '';
  
  // Logic xếp loại dựa trên yêu cầu
  if (score.value < 5.0) return 'Yếu';
  if (score.value < 6.5) return 'Trung bình';
  if (score.value < 8.0) return 'Khá';
  if (score.value < 9.0) return 'Giỏi';
  return 'Xuất sắc'; // ĐTB >= 9.0
});
</script>

<style scoped>
.container {
  display: flex;
  justify-content: flex-start;
}
input {
  width: 100px;
}
</style>