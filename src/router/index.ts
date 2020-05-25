import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Tasks from '@/views/Tasks.vue';
import Gallery from '@/views/Gallery.vue';
import Conversations from '@/views/Conversations.vue';
import Home from '@/views/Home.vue';
import Settings from '@/views/Settings.vue';
import Login from '@/views/Login.vue';
import store from '@/store';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter(from, to, next) {
      if (store.state.auth.authData.accessToken) {
        next();
      } else {
        next('/login');
      }
    },
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
    beforeEnter(from, to, next) {
      if (store.state.auth.authData.accessToken) {
        next();
      } else {
        next('/login');
      }
    },
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: Tasks,
    beforeEnter(from, to, next) {
      if (store.state.auth.authData.accessToken) {
        next();
      } else {
        next('/login');
      }
    },
  },
  {
    path: '/media',
    name: 'Media Library',
    component: Gallery,
    beforeEnter(from, to, next) {
      if (store.state.auth.authData.accessToken) {
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
      console.log('beforeEnter accessToken', store.state.auth.authData.accessToken);
      console.log('beforeEnter from', from);
      console.log('beforeEnter to', to);
      next();
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
