import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const components=
  {
    login:()=>import('@/views/login'),
    layout:()=>import('@/views/layout')
  }
export default new Router({
  routes: [
    {
      path: '/',
      name: '登陆',
      component: components.login,
    },
    {
      path:'/layout',
      name:'布局页',
      component:components.layout,
      // redirect:'/layout/home',
      children:[
        {
          path:'home',
          name:'首页',
        },
      ]
    }
  ]
})
