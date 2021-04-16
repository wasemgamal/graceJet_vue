import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'fullpage.js/vendors/scrolloverflow'; // Optional. When using scrollOverflow:true
import VueFullPage from 'vue-fullpage.js';
import VueResource from 'vue-resource';
import './assets/css/fontawesome.min.css';
import './assets/sass/style.scss';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css';


Vue.use(VueResource);
Vue.config.productionTip = false;
Vue.use(VueFullPage);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
