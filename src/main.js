import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
Vue.use(VueRouter)
Vue.config.productionTip = false
import index from './components/index.vue'
const router = new VueRouter({
  routes :[
    { path: '/', component: index },
    { path: '/index', component: index },
  ]
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
