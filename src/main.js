import Vue from 'vue'
import App from './App.vue'
import router from './router'

import bootstrapCss from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Jquery from 'jquery'
window.$=window.jQuery=Jquery
import popper from 'popper.js'
import bootstrapJss from '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import iziToastCss from '../node_modules/izitoast/dist/css/iziToast.min.css'
import iziToastJs from '../node_modules/izitoast/dist/js/iziToast.min.js'
window.iziToast=iziToastJs

import axios from 'axios'
window.axios=axios
axios.defaults.baseURL = 'http://localhost/restfullapi/public/api';

window.token=localStorage.getItem('AToken');
axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
axios.defaults.headers.post['Content-Type'] = 'application/json';

import { Form, HasError, AlertError } from 'vform'
window.Form=Form
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
