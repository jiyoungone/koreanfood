<template>
  <div class="app">
    <header>
      <h1 class="logo">Korean Food</h1>
      <nav class="nav">
        <!-- RouterLink로 각 페이지 연결 -->
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/blog">Blog</RouterLink>
        <RouterLink to="/author">Author</RouterLink>
        <RouterLink to="/videos">Videos</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
      <a href="mailto:abc@gmail.com" class="icon-email">
        <img src="/email.png" alt="">
      </a>
    </header>

    <main>
      <!-- 여기 안에 현재 선택된 페이지 컴포넌트가 표시됨 -->
      <RouterView />
    </main>

    <footer>
      <p>@2025 yoonjiyeong</p>
    </footer>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
</style>
