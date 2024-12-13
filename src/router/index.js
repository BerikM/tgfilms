import FilmPage from '@/views/FilmPage.vue';
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ListView from '../views/ListView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/list/:type',
            name: 'List',
            component: ListView,
        },
        {
            path: '/film/:id',
            name: 'FilmPage',
            component: FilmPage,
        },
    ],
});

export default router;
