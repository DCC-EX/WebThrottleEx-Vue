import * as VueRouter from 'vue-router'
const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("./views/Throttle.vue" /* webpackChunkName: 'home.chunk' */),
    },
    {
        path: "/locos",
        name: "locos",
        component: () => import("./views/Locos.vue" /* webpackChunkName: 'home.chunk' */),
    },
    {
        path: "/functions",
        name: "functions",
        component: () => import("./views/Functions.vue" /* webpackChunkName: 'home.chunk' */),
    },
    {
        path: "/settings",
        name: "settings",
        component: () => import("./views/Settings.vue" /* webpackChunkName: 'home.chunk' */),
    }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
})

export default router