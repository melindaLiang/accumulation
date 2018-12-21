import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import index from '@/components/index/index.vue';
import aboutEle from '@/components/aboutEle/aboutEle.vue';
import aboutVue from '@/components/aboutVue/aboutVue.vue';
import vueModifier from '@/components/aboutVue/vueModifier/vueModifier.vue';
import aboutAxios from '@/components/aboutVue/aboutAxios/aboutAxios.vue';
import aboutCss from '@/components/aboutCss/aboutCss.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      redirect: 'aboutEle',
      children: [{
        path: 'aboutEle',
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
        path: 'aboutVue/',
        name: 'aboutVue',
        component: aboutVue,
        redirect: 'aboutVue/vueModifier',
        meta: {
          need_login: true,
          show_menu: true
        },
        children: [{
            path: 'vueModifier',
            name: 'vueModifier',
            component: vueModifier,
            meta: {
              need_login: true,
              show_menu: true
            }
          }, {
            path: 'aboutAxios',
            name: 'aboutAxios',
            component: aboutAxios,
            meta: {
              need_login: true,
              show_menu: true
            }
          }],
      }, {
        path: '/aboutCss',
        name: 'aboutCss',
        component: aboutCss,
        meta: {
          need_login: true,
          show_menu: true
        }
      }]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
});
