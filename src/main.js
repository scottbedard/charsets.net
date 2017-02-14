import Vue from 'vue';
import VueRouter from 'vue-router';

// set up our global plugins and utilities
require('./app/boot');

// set up the router
import routes from './app/routes';
import { beforeEach, afterEach } from './app/router_events';

const router = new VueRouter({
    base: __dirname,
    mode: 'history',
    routes,
});

router.beforeEach(beforeEach);
router.afterEach(afterEach);

// instantiate our application and mount it to the dom
/* eslint-disable no-new */
new Vue({
    render: h => h(require('./root')),
    el: '#app',
    router,
});
