import Vue from 'vue';
import VueRouter from 'vue-router';
import Welcome from 'pages/Welcome.vue';

Vue.use(VueRouter);

const routes = [
	{
		path     : '/',	
		name     : 'index',
		component: Welcome
	}
];

const router = new VueRouter({ routes });

const app = new Vue({
	router
}).$mount('#app');
