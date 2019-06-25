import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueRouter from 'vue-router'

// component --**//
import home from './components/home.vue'
import login from './components/login.vue'
//--------------**

Vue.use(VueRouter)
Vue.use(Vuetify)

Vue.config.productionTip = false

const routes = [
  { path: '/', component: home },
  { path: '/login', component: login }
]


const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
