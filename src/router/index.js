import Vue from 'vue';
import VueRouter from 'vue-router';

const bookMark = () => import('../components/content/BookMark');
const index = () => import('../views/index');
const group = () => import('../components/content/UnitGroup');

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: bookMark,
    children: [
      {
        path: '',
        redirect: 'index'
      },
      {
        path: 'index',
        components: {
          index
        }
      },
      {
        path: 'group',
        components: {
          group
        }
      }
    ]
  },
  {
    path: '/index',
    component: index
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router
