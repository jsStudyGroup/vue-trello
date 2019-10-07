import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/Home.vue'
import Login from '@/components/Login.vue'
import pageNotFound from '@/components/pageNotFound.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes : [
        {
            path: '/',
            component: Home
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '*',
            component: pageNotFound
        }
    ]
})

export default router