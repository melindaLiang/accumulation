import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index/index.vue'
import aboutEle from '@/components/aboutEle/aboutEle.vue'
import aboutVue from '@/components/aboutVue/aboutVue.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [{
        path: '/aboutEle',
        name: 'aboutEle',
        component: aboutEle,
        meta: {
          need_login: true,
          show_menu: true
        }
      }, {
        path: '/HelloWorld',
        name: 'HelloWorld',
        component: HelloWorld,
        meta: {
          need_login: true,
          show_menu: true
        }
      }, {
        path: '/aboutVue',
        name: 'aboutVue',
        component: aboutVue,
        meta: {
          need_login: true,
          show_menu: true
        }
      }]
    }
  ]
})
