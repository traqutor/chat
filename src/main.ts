import Vue from 'vue';
import PerfectScrollbar from 'vue2-perfect-scrollbar';
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import filters from './filters';
import vuetify from './plugins/vuetify';
import ChatHub from './chat-hub';

Vue.use(PerfectScrollbar);
Vue.use(ChatHub);
Vue.use(filters);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
