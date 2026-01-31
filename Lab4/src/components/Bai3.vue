<template>
  <div class="container mt-5 text-center">
    <h1 class="text-cyan">{{ greeting }}</h1>

   

    <button 
      class="btn btn-success" 
      v-bind:title="buttonTitle" 
      @click="changeGreeting"
    >
      Click để thay đổi
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      greeting: 'Xin chào bạn!',
      buttonTitle: 'Nhấn để thay đổi lời chào',
      
    };
  },
  methods: {
    changeGreeting() {
      this.greeting = 'Hello, World!';
      this.buttonTitle = 'Lời chào mới đã được cập nhật';
      
    }
  }
}
</script>

<style scoped>
.text-cyan {
  color: #00c4cc;
  font-weight: bold;
}
</style>