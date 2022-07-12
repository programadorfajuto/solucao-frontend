import Vue from 'vue';
import App from './App.vue';
import VueTheMask from 'vue-the-mask'
import VModal from 'vue-js-modal';
import Toasted from 'vue-toasted';
import Print from 'vue-print-nb'
import Multiselect from 'vue-multiselect'
import { ProgressPlugin } from 'bootstrap-vue'
import ViaCep from 'vue-viacep'
import money from 'v-money'

import store from './store';
import router from './router';

import Default from './layouts/Default.vue';
import SideAndNavbar from './layouts/SideAndNavbar.vue';

Vue.use(VModal, { dialog: true, dynamic: true, injectModalsContainer: true });
Vue.use(VueTheMask);
Vue.use(Toasted, { position: 'top-right', duration: 5000, theme: 'toasted-primary' });
Vue.use(Print);
Vue.use(ViaCep);
Vue.use(ProgressPlugin);
Vue.use(money, { precision: 2, prefix: "R$ " })

Vue.config.productionTip = false;

Vue.component('default-layout', Default);
Vue.component('side-and-navbar-layout', SideAndNavbar)
Vue.component('multiselect', Multiselect)

window._Vue = new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');