import CustomerHome from '../views/customer/CustomerHome.vue'
import VueRouter from 'vue-router';


const routes = [
    { path: '/', component: CustomerHome },

];

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router