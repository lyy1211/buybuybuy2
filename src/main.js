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
axios.defaults.withCredentials = true;
Vue.prototype.axios=axios
Vue.use(VueLazyload, {
  loading: require('./assets/hoverNav20151228/images/01.gif')
})
Vue.use(iView);


Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.config.productionTip = false;
import index from './components/index.vue';
import goodsdetail from './components/goodsdetail.vue';
import shopcar from './components/shopcar.vue';
import payOrder from './components/payOrder.vue';
import login from './components/login.vue';
import orderInfo from './components/orderInfo.vue';
import paysuccess from './components/paysuccess.vue';
import memberCenter from './components/memberCenter.vue';
import tradeorder from './components/tradeorder.vue';
import checkorder from './components/checkorder.vue';
const router = new VueRouter({
  routes :[
    { path: '/', redirect: '/index' },
    { path: '/index', component: index },
    { path: '/goodsdetail/:id', component: goodsdetail },
    { path: '/shopcar', component: shopcar },
    { path: '/payorder/:ids', component: payOrder, meta: { islogin: true }},
    { path: '/login', component: login },
    { path: '/orderInfo/:orderid', component: orderInfo,meta: { islogin: true }},
    { path: '/paysuccess', component: paysuccess,meta: { islogin: true }},
    { path: '/memberCenter', component: memberCenter,meta: { islogin: true }},
    { path: '/tradeorder', component: tradeorder,meta: { islogin: true }},
    { path: '/checkorder/:orderid', component: checkorder,meta: { islogin: true }}
  ]
})
let buyList=JSON.parse(window.localStorage.getItem('buyList'))||{}
const store = new Vuex.Store({
  state: {
    buyList,
    frompath:'/', 
    islogin:false
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
        //跟踪新增属性的后续更改
        Vue.set(state.buyList, info.goodId, info.goodNum);
      }
    },
    changebuycoutById(state,changeinfo){
      state.buyList[changeinfo.goodId]=changeinfo.buycount;
    },
    delGood(state,delId){
      //不用再跟踪这个属性了
     Vue.delete(state.buyList,delId)
    },
    changeLogin(state,login){
      state.islogin=login
    },
    changepath(state,path){
      state.frompath=path;
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
router.beforeEach((to, from, next) => {
  //保存数据,更改frompath
  store.commit('changepath',from.path)
  ////console.log(to.path.indexOf('/payorder')!=-1);
  if(to.meta.islogin){
    axios.get('site/account/islogin').then(response=>{
      //console.log(response)
      if(response.data.code=="nologin"){
        next('/login');
      }else{
        //console.log(from);
        //继续执行
        next();
      }
    }).catch(err=>{
      //console.log(err)
    })
  }else{
    // 如果去的不是订单支付页与支付详情 直接可以访问
    next()
  }
})


Vue.filter('cutTime',function(value,rules){
  if(rules){
    return moment(value).format(rules);
  }else{
    return moment(value).format('YYYY-MM-DD');
  }
})

new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate(){
    axios.get('site/account/islogin').then(response=>{
      //console.log(response)
      if(response.data.code=="nologin"){
        store.state.islogin=false
      }else{
        //console.log(from);
        //继续执行
        store.state.islogin=true
      }
    }).catch(err=>{
      ////console.log(err)
    })
  }
}).$mount('#app')
window.onbeforeunload=function(){
  window.localStorage.setItem('buyList',JSON.stringify(store.state.buyList))
}