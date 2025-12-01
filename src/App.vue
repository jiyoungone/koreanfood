<template>
  <div class="app">
    <header>
      <RouterLink to="/"><h1 class="logo">Korean Food</h1></RouterLink>
      <nav class="nav">
        <!-- RouterLink로 각 페이지 연결 -->
        <RouterLink to="/about">About K-Food</RouterLink>
        <RouterLink to="/globalization">Globalization</RouterLink>
        <RouterLink to="/recipes">Recipes & Academy</RouterLink>
        <RouterLink to="/culture">Culture & Stories</RouterLink>
      </nav>
      <a href="mailto:12506426@iscu.ac.kr" class="icon-email">
        <img src="/email.png" alt="">
      </a>
    </header>

    <main>
      <!-- 여기 안에 현재 선택된 페이지 컴포넌트가 표시됨 -->
      <RouterView />
    </main>

    <footer>
      <p>@2025 yoonjiyoung</p>
    </footer>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
</style>
