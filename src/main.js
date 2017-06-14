import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import VueResource from 'vue-resource'
 
//开启debug模式
Vue.config.debug = true;
 
Vue.use(VueRouter);
Vue.use(VueResource);
 
// 定义组件, 也可以像教程之前教的方法从别的文件引入
const First = { template: '<div><h2>我是第 1 个子页面</h2></div>' }
import secondcomponent from './component/secondpage/secondcomponent.vue'
import firstcomponent from './component/firstpage/firstcomponent.vue'
const first = { template: '<div><h2>我是第 1个内部子页面</h2></div>' }
import pageone from './component/firstpage/pageone.vue'
import pagetwo from './component/firstpage/pagetwo.vue'
import './static/js/jquery.min.js'

// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
  //mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: First
    },
    {
      path: '/first',
      component: firstcomponent,
      children: [
        // 这也是个 route record
        {
	      path: '/first/',
	      name:'first',
	      component: first
	    },
        {
	      path: '/first/firstp',
	      name:'first',
	      component: first
	    },
	    {
	      path: '/first/pageone/:userId',
	      name:'pageone',
	      component: pageone
	    },
	    {
	      path: '/first/pagetwo/:userId',
	      name:'pagetwo',
	      component: pagetwo
	    }
      ]
    },
    {
      path: '/second',
      component: secondcomponent
    }
  ]
})
 
// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')