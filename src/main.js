import Vue from 'vue'
import App from './App.vue'

import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(Element)
import VueRouter from 'vue-router'

import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.use(MintUI);

import Button from 'mint-ui/lib/button';
import 'mint-ui/lib/button/style.css';

Vue.component(Button.name, Button);

import GetData from './service/getData';
import Toast from "./js/Toast.js";

import axios from 'axios'
Vue.prototype.$http = axios

Vue.use(Toast);
//element-ui
// import Element from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'
// Vue.use(Element)

//动态数据
import VueResource from 'vue-resource'

// import IScrollView from 'vue-iscroll-view'
// import IScroll from 'iscroll'
// Vue.use(IScrollView,IScroll)

import $ from 'jquery'
import VIscroll from 'viscroll'
import './config/rem'

import store from './store/'

Vue.use(VIscroll, {
  mouseWheel: true,
  click: false,
  preventDefault: true,
  tap: false,
  bounce: false,
  disableMouse: false,
  disablePointer: true,
  disableTouch: false
})
// import Secondcomponent from './component/secondcomponent.vue'
// import Firstcomponent from './component/firstcomponent.vue'
// import Demo from './component/demo.vue'
// import Parent from './parent.vue'

// import Index from './component/index.vue'
// import Calc from './component/calc.vue'

// import MintUiBotton from './mint-ui/botton.vue'

// import elementUi from './elementUi.vue'
// import elementUiDemo from './element-ui/demo.vue'

// import mintUiDemo from './mint-ui/demo.vue'
// import iscroll from './mint-ui/iscroll.vue'

// import bootstrapTest from './bootstrap/test1.vue'

// Vue.use(Calc)

import vuex_store from './js/vuex.js' 
import './css/animate.css'

import routes from './router/router'
import {routerMode} from './config/env'

VueRouter.prototype.goBack = function () {
  window.history.go(-1)
}
Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(VueResource);

// const router = new VueRouter({
//   mode: 'history',
//   base: __dirname,
//   // linkActiveClass:'hover',
//   routes: [
//     { path: '/', component: App},
//     { path: '/parent', component: Parent,
//       children: [
//         { path: '', component: Index },
//         { path: 'foo', component: Secondcomponent},
//         { path: 'bar', component: Firstcomponent },
//         { path: 'calc', component: Calc },
//         // { path: 'mituibotton',component:MintUiBotton},
//         //{ path: 'demo',component:Demo}
//       ]
//     },{ path: '/mintUi', component: Parent,
//       children: [
//         {path:'',component:mintUiDemo},
//         {path:'iscroll',component:iscroll},
//         { path:'mituibotton',component:MintUiBotton},
//         {path:'bootstraptest',component:bootstrapTest},
//       ]
//     },{ path: '/elementUi', component: Parent,
//       children: [
//         { path:'',component:elementUiDemo,name:'elementUiDemo'},
//         { path:'mituibotton',component:MintUiBotton}
        
//       ]
//     }
//   ]
// })
const router = new VueRouter({
  routes,
  mode: routerMode,
  strict: process.env.NODE_ENV !== 'production',
  scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop;
      }
        return { x: 0, y: to.meta.savedPosition ||0}
    }
  }
})

new Vue({
  router,
  store:store,
}).$mount('#app')
// new Vue({
//   router,
//   store:vuex_store,
//   render: h => h(App)
// }).$mount('#app')


// const index = new Vue({
//   router: router,
//   render: h => h(Index)
// }).$mount('#index')


// new Vue({
//   el: '#app',
//   render: h => h(App)
// })
