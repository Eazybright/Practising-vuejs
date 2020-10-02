import Vue from 'vue'
import Router from 'vue-router'
import Skills from './components/Skills.vue'
import About from './components/About.vue'
import LifeCycle from './components/LifeCycle.vue'
import Counter from './components/Counter.vue'
import VModel from './components/VModel.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'skills',
      component: Skills
    },
    {
      path: '/about/:name',
      name: 'about',
      component: About
    },
    {
      path: '/lifecycle',
      name: 'lifecycle',
      component: LifeCycle
    },
    {
      path: '/counter',
      name: 'counter',
      component: Counter
    },
    {
      path: '/v-model',
      name: 'v-model',
      component: VModel
    }
  ]
})
