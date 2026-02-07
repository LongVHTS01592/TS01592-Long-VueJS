<template>
  <div class="p-3 border mt-3" style="width: 300px;">
    <h3>Nhập tháng của bạn:</h3>
    <input type="number" v-model.number="month" class="form-control" />
    <button>Enter</button>
    <div class="mt-2">
      <p v-if="month < 1 || month > 12" class="text-danger">
        Vui lòng nhập tháng từ 1 đến 12!
      </p>
      <p v-else-if="month >= 1 && month <= 3">Mùa Xuân</p>
      <p v-else-if="month >= 4 && month <= 6">Mùa Hạ</p>
      <p v-else-if="month >= 7 && month <= 9">Mùa Thu</p>
      <p v-else-if="month >= 10 && month <= 12">Mùa Đông</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const month = ref(1);
</script>