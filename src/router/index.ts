import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Conversations from '../views/Conversations.vue';
import Home from '../views/Home.vue';
import Settings from '../views/Settings.vue';
import Login from '../views/Login.vue';
import store from '../store';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter(from, to, next) {
      if (store.state.auth.authData?.accessToken) {
        next();
      } else {
        next('/login');
      }
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
    beforeEnter(from, to, next) {
      if (store.state.auth.authData?.accessToken) {
        next();
      } else {
        next('/login');
      }
    },
  },
  {
    path: '/conversations',
    name: 'Conversations',
    component: Conversations,
    beforeEnter(from, to, next) {
      if (store.state.auth.authData?.accessToken) {
        next();
      } else {
        next('/login');
      }
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
