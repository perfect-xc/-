import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import router from './router';
import app from './App.vue';

import axios from 'axios';
Vue.prototype.$axios=axios;

axios.defaults.headers.post['Content-type']='application/x-www-form-urlencoded'

const vm = new Vue({
  el:'#app',
  router,
  render:c=>c(app)
});