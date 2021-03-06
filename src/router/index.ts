import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Tasks from '@/views/Tasks.vue';
import MediaLibrary from '@/views/MediaLibrary.vue';
import Conversations from '@/views/Conversations.vue';
import Home from '@/views/Home.vue';
import Settings from '@/views/Settings.vue';
import Login from '@/views/Login.vue';
import AuthHelper from '@/helpers/AuthHelper';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter(from, to, next) {
      if (AuthHelper.isAuthenticated()) {
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
      if (AuthHelper.isAuthenticated()) {
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
      if (AuthHelper.isAuthenticated()) {
        next();
      } else {
        next();
      }
    },
  },
  {
    path: '/media',
    name: 'Media Library',
    component: MediaLibrary,
    beforeEnter(from, to, next) {
      if (AuthHelper.isAuthenticated()) {
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
      if (AuthHelper.isAuthenticated()) {
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
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
