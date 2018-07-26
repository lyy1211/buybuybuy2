import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import VueLazyload from 'vue-lazyload'
import path from 'path'
Vue.use(VueLazyload, {
  loading: require('./assets/hoverNav20151228/images/01.gif')
})


Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.config.productionTip = false
import index from './components/index.vue'
const router = new VueRouter({
  routes :[
    { path: '/', redirect: '/index' },
    { path: '/index', component: index },
  ]
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
