import Vue from 'vue'
import Router from 'vue-router'
import test from '../components/view/Study.vue'
Vue.use(Router)

const router = new Router({
    mode: 'history',
    scrollBehavior: () => {
        return { x: 0, y: 0}
    },
    routes: [
        {
            path: '/test',
            name: 'test',
            component: () => import('src/components/view/Study')
            

        }
    ]
})
export default router