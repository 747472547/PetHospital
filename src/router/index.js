import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/pages/home";
import Guide from "@/pages/guide/guide";
import Cosplay from "@/pages/cosplay/cosplay";
import Learning from "@/pages/learning/learning";



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    	path: '/guide',
    	name: 'Guide',
    	component: Guide
    },
    {
        path: '/cosplay',
        name: 'Cosplay',
        component: Cosplay
    },
    {
    	path: '/learning',
    	name: 'Learning',
    	component: Learning
    }
  ]
})
