import CustomerHome from '../views/customer/CustomerHome.vue'
import SignIn from "../views/SignIn.vue";
import Register from "../views/Register.vue";
import Cart from "../views/Cart.vue";
import CheckOut from "../views/CheckOut.vue";
import VueRouter from 'vue-router';




const routes = [
    { path: '/', component: CustomerHome },
    { path: '/signin', component: SignIn},
    { path: '/signup', component: Register},
    { path: '/cart', component: Cart},
    { path: '/checkout', component: CheckOut}



];

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router