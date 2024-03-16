import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import { Vue } from 'vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/Login',
  },
  {
    path: '/LogOut',
    component: () => import ('../views/Logout.vue'),
  },
  {
    path: '/Login',
    component: () => import ('../views/Login.vue'),
  },
  {
    path: '/Register',
    component: () => import ('../views/Register.vue'),
  },
  {
    path: '/Product',
    component: () => import ('../views/Product.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/Product/View/:productId',
    component: () => import ('../views/ProductView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/Spinner',
    component: () => import ('../views/Spinner.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token');

  if (!isAuthenticated && to.meta.requiresAuth) {
    next('/Login');
  } else {
    next();
  }
});

export default router
