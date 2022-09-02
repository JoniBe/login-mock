import {
    createRouter,
    createWebHistory,
    Router,
    RouteRecordRaw,
} from 'vue-router';

import MainRouter from './routes/main';

const routes: RouteRecordRaw[] = [
    ...MainRouter
];

const router: Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    history: createWebHistory(),
    routes,
});

export default router;