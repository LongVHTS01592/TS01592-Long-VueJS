<template>
  <div class="hardware-manager">
    <h1>Quản Lý Linh Kiện Phần Cứng</h1>

    <div class="form-container">
      <h3>Thêm sản phẩm mới</h3>
      <div class="input-group">
        <input v-model="newItem.name" type="text" placeholder="Tên linh kiện" />
        <input v-model="newItem.description" type="text" placeholder="Mô tả ngắn" />
        <input v-model.number="newItem.price" type="number" placeholder="Giá tiền (VNĐ)" />
        <button @click="addProduct" :disabled="!isFormValid">Thêm vào danh sách</button>
      </div>
    </div>

    <hr />

    <table class="hardware-table">
      <thead>
        <tr>
          <th>Tên Sản Phẩm</th>
          <th>Mô tả</th>
          <th>Giá (VNĐ)</th>
          <th>Thao tác</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in hardwareList" :key="index">
          <td><strong>{{ item.name }}</strong></td>
          <td>{{ item.description }}</td>
          <td>{{ formatPrice(item.price) }}</td>
          <td>
            <button @click="removeProduct(index)" class="btn-delete">Xóa</button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="2" class="text-right"><strong>Tổng cộng:</strong></td>
          <td colspan="2" class="total-price">{{ formatPrice(totalPrice) }}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// 1. Khởi tạo danh sách bằng ref để có tính phản xạ (reactive)
const hardwareList = ref([
  {
    name: "CPU AMD Ryzen 9 7950X",
    description: "Vi xử lý 16 nhân 32 luồng, xung nhịp lên tới 5.7GHz.",
    price: 14500000,
  },
  {
    name: "Card đồ họa NVIDIA RTX 4090",
    description: "GPU mạnh mẽ nhất hiện nay với 24GB VRAM GDDR6X.",
    price: 52000000,
  },
  {
    name: "RAM Corsair Dominator 64GB DDR5",
    description: "Bộ nhớ RAM hiệu năng cao, bus 6000MHz.",
    price: 7800000,
  }
]);

// 2. Đối tượng để giữ dữ liệu từ Form
const newItem = ref({
  name: '',
  description: '',
  price: null
});

// 3. Tính tổng tiền tự động bằng Computed
const totalPrice = computed(() => {
  return hardwareList.value.reduce((sum, item) => sum + (item.price || 0), 0);
});

// 4. Kiểm tra form hợp lệ
const isFormValid = computed(() => {
  return newItem.value.name && newItem.value.price > 0;
});

// 5. Các phương thức xử lý
const addProduct = () => {
  if (isFormValid.value) {
    hardwareList.value.push({ ...newItem.value });
    // Reset form
    newItem.value = { name: '', description: '', price: null };
  }
};

const removeProduct = (index) => {
  if (confirm('Bạn có chắc muốn xóa linh kiện này?')) {
    hardwareList.value.splice(index, 1);
  }
};

const formatPrice = (value) => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
};
</script>

<style scoped>
.hardware-manager {
  max-width: 1000px;
  margin: 2rem auto;
  padding: 1rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.form-container {
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.input-group {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  flex: 1;
  min-width: 150px;
}

button {
  padding: 0.5rem 1rem;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:disabled {
  background-color: #ccc;
}

.hardware-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}

th, td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
}

th {
  background-color: #42b883;
  color: white;
}

.btn-delete {
  background-color: #ff4d4f;
}

.total-price {
  font-size: 1.2rem;
  font-weight: bold;
  color: #e63946;
}

.text-right {
  text-align: right;
}
</style>