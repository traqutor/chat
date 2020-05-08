import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import filters from './filters';
import vuetify from './plugins/vuetify';
import ChatHub from './chat-hub';

Vue.use(ChatHub);
Vue.use(filters);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
