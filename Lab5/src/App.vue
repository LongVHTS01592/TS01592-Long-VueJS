<template>
  <div id="app">
    <nav class="menu">
      <button @click="currentView = 'Blog'">Blog</button>
      <button @click="currentView = 'SanPham'">Sản Phẩm</button>
      <button @click="currentView = 'Bai1'">Bài 1</button>
      <button @click="currentView = 'Bai2'">Bài 2</button>
      <button @click="currentView = 'Bai3'">Bài 3</button>
    </nav>

    <main class="content-area">
      <div v-if="currentView === 'Blog'">
        <CreatePost @add-post="addPost" />
        <PostList :posts="posts" />
      </div>

      <div v-else-if="currentView === 'SanPham'">
        <NhapSanPham />
      </div>

      <div v-else-if="currentView === 'Bai1'">
        <Bai1 />
      </div>
      <div v-else-if="currentView === 'Bai2'">
        <Bai2 />
      </div>
            <div v-else-if="currentView === 'Bai3'">
        <Bai3 />
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CreatePost from './components/CreatePost.vue'
import PostList from './components/PostList.vue'
import NhapSanPham from './components/NhapSanPham.vue'

import Bai1 from './components/Bai1.vue' 
import Bai2 from './components/Bai2.vue' 
import Bai3 from './components/Bai3.vue' 

const currentView = ref('Blog')
const posts = ref([])

function addPost(post) {
  posts.value.push(post)
}
</script>