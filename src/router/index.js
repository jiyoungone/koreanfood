import { createRouter, createWebHistory } from 'vue-router'

// 각 페이지 컴포넌트 import
import HomeView from '../views/HomeView.vue'
import BlogView from '../views/BlogView.vue'
import AuthorView from '../views/AuthorView.vue'
import VideosView from '../views/VideosView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  // GitHub Pages에서도 잘 동작하게 base 설정
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
    },
    {
      path: '/author',
      name: 'author',
      component: AuthorView,
    },
    {
      path: '/videos',
      name: 'videos',
      component: VideosView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
  ],
})

export default router
