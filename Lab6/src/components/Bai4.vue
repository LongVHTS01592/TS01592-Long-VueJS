<template>
  <div class="container mt-4">
    <div class="row">
      <form @submit.prevent="submitForm" class="col-sm-4 shadow-sm p-3 bg-light rounded">
        <h3>{{ isEditing ? 'Cập nhật thông tin' : 'Thêm học sinh' }}</h3>
        
        <div class="mb-3 mt-3">
          <label for="name">Họ tên:</label>
          <input type="text" class="form-control" v-model="student.name" id="name" required />
        </div>

        <div class="mb-3">
          <label for="score">Điểm:</label>
          <input type="number" max="10" min="0" class="form-control" v-model="student.score" id="score" required />
        </div>

        <div class="mb-3">
          <label for="dob">Ngày sinh:</label>
          <input type="date" class="form-control" v-model="student.dob" id="dob" required />
        </div>

        <button type="submit" class="btn" :class="isEditing ? 'btn-warning' : 'btn-success'">
          {{ isEditing ? 'Cập nhật' : 'Thêm' }}
        </button>
        <button v-if="isEditing" type="button" class="btn btn-secondary ms-2" @click="resetForm">Hủy</button>
      </form>

      <div class="col-sm-8">
        <h3>Danh sách học sinh</h3>
        <table class="table table-hover border">
          <thead>
            <tr>
              <th>Họ và tên</th>
              <th>Điểm</th>
              <th>Ngày sinh</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(stu, index) in students" :key="index">
              <td>{{ stu.name }}</td>
              <td>{{ stu.score }}</td>
              <td>{{ stu.dob }}</td>
              <td>
                <button class="btn btn-warning btn-sm" @click="editStudent(index)">Sửa</button>
              </td>
              <td>
                <button class="btn btn-danger btn-sm" @click="deleteStudent(index)">Xóa</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 1. Dữ liệu mẫu ban đầu
const students = ref([
  { name: 'Nguyễn Chí Hùng', score: 8, dob: '2006-01-01' },
  { name: 'Phạm Thị Lan', score: 9, dob: '2006-05-15' }
]);

// 2. Biến quản lý trạng thái form
const student = ref({
  name: '',
  score: null,
  dob: ''
});

let isEditing = ref(false);
let editingIndex = ref(null);

// 3. Hàm xử lý gửi Form (Thêm hoặc Cập nhật)
function submitForm() {
  if (isEditing.value) {
    // Cập nhật thông tin học sinh
    students.value[editingIndex.value] = { ...student.value };
    isEditing.value = false;
    editingIndex.value = null;
  } else {
    // Thêm học sinh mới
    students.value.push({ ...student.value });
  }
  resetForm();
}

// 4. Hàm chọn học sinh để sửa
function editStudent(index) {
  student.value = { ...students.value[index] };
  isEditing.value = true;
  editingIndex.value = index;
}

// 5. Hàm xóa học sinh
function deleteStudent(index) {
  if (confirm("Bạn có chắc chắn muốn xóa học sinh này?")) {
    students.value.splice(index, 1);
  }
}

// 6. Hàm reset form về trạng thái trống
function resetForm() {
  student.value = {
    name: '',
    score: null,
    dob: ''
  };
  isEditing.value = false;
  editingIndex.value = null;
}
</script>

<style scoped>
/* Bạn có thể thêm CSS tùy chỉnh ở đây nếu cần */
.table th {
  background-color: #f8f9fa;
}
</style>