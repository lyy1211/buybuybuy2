import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import VueLazyload from 'vue-lazyload'
import axios from "axios";
import moment from 'moment';
import iView from 'iview';
import '../node_modules/iview/dist/styles/iview.css';
import Vuex from 'vuex'

Vue.use(Vuex);
axios.defaults.baseURL = 'http://47.106.148.205:8899';
Vue.prototype.axios=axios
Vue.use(VueLazyload, {
  loading: require('./assets/hoverNav20151228/images/01.gif')
})
Vue.use(iView);


Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.config.productionTip = false
import index from './components/index.vue'
import goodsdetail from './components/goodsdetail.vue'
import shopcar from './components/shopcar.vue'
const router = new VueRouter({
  routes :[
    { path: '/', redirect: '/index' },
    { path: '/index', component: index },
    { path: '/goodsdetail/:id', component: goodsdetail },
    { path: '/shopcar', component: shopcar }
  ]
})
let buyList=JSON.parse(window.localStorage.getItem('buyList'))||{}
const store = new Vuex.Store({
  state: {
    buyList
  },
  mutations: {
    // info->{goodId:xx,goodNum:xxx}
    buygoods(state,info) {
      if(state.buyList[info.goodId]){
        let oldNum =state.buyList[info.goodId];
        oldNum +=info.goodNum;
        // 重新赋值
        state.buyList[info.goodId] = oldNum;
        // store.state.buyList.goodId+=info.goodNum
      }else{
        // 需要使用 Vue.set(obj, 'newProp', 123) 替代
        Vue.set(state.buyList, info.goodId, info.goodNum);
      }
    }
  },
  getters: {
    totalCount(state){
      let num=0;
      for (const key in state.buyList) {
        num+=state.buyList[key]
      }
      return num;
    }
  }
})

Vue.filter('cutTime',function(value){
  return moment(value).format('YYYY-MM-DD');
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
window.onbeforeunload=function(){
  window.localStorage.setItem('buyList',JSON.stringify(store.state.buyList))
}