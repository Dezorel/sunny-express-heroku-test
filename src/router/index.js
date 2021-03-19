import Vue from 'vue'
import VueRouter from 'vue-router'
import Instruction from '../views/Instruction.vue'
import Auth from '../views/Auth.vue'
import Data from '../views/Data.vue'
import Trekking from '../views/Trekking.vue'
import History from '../views/History.vue'
import Report from '../views/Report.vue'
import MyAccount from '../views/MyAccount.vue'
import Temp from '../views/Temp.vue'
import Register from '../views/Register.vue'
import RestorePass from "@/views/RestorePass";

Vue.use(VueRouter)

const routes = [
  {
    path: '/auth',
    name: 'Auth',
    component: Auth
  },
  {
    path: '/instruction',
    name: 'Instruction',
    component: Instruction
  },
  {
    path: '/shop',
    name: 'Shop',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Shop.vue')
  },
  {
    path: '/data',
    name: 'Data',
    component: Data
  },
  {
    path: '/trekking',
    name: 'Trekking',
    component: Trekking
  },
  {
    path: '/history',
    name: 'History',
    component: History
  },
  {
    path: '/',
    name: 'User',
    component: MyAccount
  },
  {
    path: '/report',
    name: 'Report',
    component: Report
  },
  {
    path: '/temp',
    name: 'Temp',
    component: Temp
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/restore',
    name: 'RestorePass',
    component: RestorePass
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
if(localStorage.token == undefined){
  router.push({path: '/auth'})
}
if(localStorage.user && localStorage.user.toLowerCase() == 'operator'){
  router.push({path: '/report'})
}
else if((window.location.pathname == '/report') && ((localStorage.user.toLowerCase() != 'operator') ||(localStorage.user.toLowerCase() != 'admin') || (localStorage.user == undefined) ) /*Добавлять через или*/ ){
  if(localStorage.token != undefined) {
    router.push({path: '/'})
  }
}
//
// if(window.location.pathname === '/instruction'){
//   router.push({path: '/instruction'})
// }
// if(window.location.pathname === '/shop'){
//   router.push({path: '/shop'})
// }
// if(window.location.pathname === '/data'){
//   router.push({path: '/data'})
// }
// if(window.location.pathname === '/trekking'){
//   router.push({path: '/trekking'})
// }
// if(window.location.pathname === '/history'){
//   router.push({path: '/history'})
// }
// if(window.location.pathname === '/'){
//   router.push({path: '/'})
// }
// if(window.location.pathname === '/register'){
//   router.push({path: '/register'})
// }
// if(window.location.pathname === '/auth'){
//   router.push({path: '/auth'})
// }
// if(window.location.pathname === '/restore'){
//   router.push({path: '/restore'})
// }

//старый роутинг
// if(localStorage.token){
//   router.push({ path: '/' })
// }
// else if(window.location.pathname != '/register' ){
//   router.push( {path: '/auth'} )
// }

export default router
