import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Test from '@/test/test';
import Index from '@/index/index';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
      // children: [
      //   {
      //     path: 'hello_page?title',
      //     name: 'Hello',
      //     component: Hello
      //   },
      //   {
      //     path: 'test_page?title',
      //     name: 'Test',
      //     component: Test
      //   }
      // ]
    },
    {
      path: '/Index/hello_page',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Index/test_page',
      name: 'Test',
      component: Test
    }
  ]
});
