import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import workVue from './components/work.vue';
import commentVue from './components/comment.vue';
import login from './components/login.vue';
import about from './components/about.vue';

const routes = [    
    {
        path: '/',
        component: about
    },

    {
        path: '/works',
        component: workVue
    },

    {
        path: '/comments',
        component: commentVue
    },
    {
        path: '/login',
        component: login
    },        
];

export default new VueRouter({ routes });