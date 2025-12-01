import { createRouter, createWebHistory } from 'vue-router'

// 각 페이지 컴포넌트 import
import Home from '../views/Home.vue'
import Globalization from '../views/Globalization.vue'
import Culture from '../views/Culture.vue'
import Recipes from '../views/Recipes.vue'
import About from '../views/About.vue'

const router = createRouter({
  // GitHub Pages에서도 잘 동작하게 base 설정
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/globalization',
      name: 'globalization',
      component: Globalization,
    },
    {
      path: '/culture',
      name: 'culture',
      component: Culture,
    },
    {
      path: '/recipes',
      name: 'recipes',
      component: Recipes,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
})

export default router
