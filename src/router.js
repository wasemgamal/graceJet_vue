import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Services from './views/Services.vue';
import Service1 from './views/services/Service1.vue';
import Service2 from './views/services/Service2.vue';
import Service3 from './views/services/Service3.vue';
import Service4 from './views/services/Service4.vue';
import Service5 from './views/services/Service5.vue';
import Service6 from './views/services/Service6.vue';
import Service7 from './views/services/Service7.vue';
import Contact from './views/Contact.vue';


Vue.use(Router);


export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/services',
      name: 'services',
      component: Services,
      children: [
        {
          path: 'service1',
          component: Service1,
        },
        {
          path: 'service2',
          component: Service2,
        },
        {
          path: 'service3',
          component: Service3,
        },
        {
          path: 'service4',
          component: Service4,
        },
        {
          path: 'service5',
          component: Service5,
        },
        {
          path: 'service6',
          component: Service6,
        },
        {
          path: 'service7',
          component: Service7,
        }
      ]
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
      // route level code-splitting
      // this generates a separate chunk (contacts.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    },
  ],
});
