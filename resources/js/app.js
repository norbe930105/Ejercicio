require('./bootstrap');
import Vue from 'vue';
import Quasar from 'quasar';
import langQ from 'quasar/lang/es';


import App from './App.vue';
import router from './router/router';
import store from './store/index'

import utils from './config/utils';
import axios from './config/axios';
import Chart from 'highcharts-vue';

import Plugin from '@quasar/quasar-ui-qcalendar'
Vue.use(Plugin)

window._ = require('lodash');

Vue.use( Quasar, {
    lang: langQ,
    config: {
        brand: {
            primary: '#2E86C1',
            secondary: '#2E86C1',
            accent: '#2E86C1',

            dark: '#1d1d1d',

            positive: '#21BA45',
            negative: '#C10015',
            info: '#31CCEC',
            warning: '#F2C037'
        }
    }
});
Vue.use(Chart);
const moment = require('moment');
require('moment/locale/es');
window.app = new Vue({
    el: '#q-app',
    render: h => h(App),
    router,
    store
});
