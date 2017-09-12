import Vue from 'vue';
import Vuex from 'vuex';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import TodoBasicAdd from '@/components/TodoBasicAdd';

Vue.use(Router);
Vue.use(Vuex);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/todo',
      name: 'TodoBasicAdd',
      component: TodoBasicAdd,
    },
  ],
});
