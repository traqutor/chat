import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Conversations from '../views/Conversations.vue';
import Login from '../views/Login.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Conversations',
    component: Conversations,
    beforeEnter(from, to, next) {
      next('/login');
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
