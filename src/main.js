import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueRouter from 'vue-router';
import router from './router/index.js';
import App from './App.vue';

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// import './assets/main.css'



Vue.use(VueRouter)
Vue.use(BootstrapVue)

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});