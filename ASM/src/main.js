import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Link tới file cấu hình router

// 1. Import Bootstrap CSS và Icons
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

// 2. Import Bootstrap JS (cần thiết để làm các chức năng như Modal, Dropdown, Toggle Navbar)
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// 3. Import CSS tùy chỉnh của cá nhân (nếu bạn có)
// import './assets/main.css' 

const app = createApp(App)

// 4. Sử dụng Router để chuyển trang
app.use(router)

// 5. Gắn ứng dụng vào thẻ div có id="app" trong file index.html
app.mount('#app')