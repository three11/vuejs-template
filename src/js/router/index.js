/**
 * The external dependencies.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

/**
 * The internal dependencies.
 */
//import modules here

/**
 * Install the plugins.
 */
Vue.use(VueRouter);

/**
 * Setup the router.
 */
const router = new VueRouter({
	routes: [],
	linkActiveClass: '',
});

/**
 * Attach the middlewares.
 */
router.beforeEach((to, from, next) => {
	const { providers, guards } = to.meta.middlewares;

	if (!isEmpty(guards)) {
		for (let i = 0; i < guards.length; i++) {
			const result = guards[i]();

			if (!result.passed) {
				next(result.redirect);
				return;
			}
		}
	}

	if (!isEmpty(providers)) {
		Promise.all(providers.map((provider) => provider(to, from, next))).then(() => next());
	} else {
		next();
	}
});

/**
 * Attach events on router hook.
 */
router.afterEach((to, from) => {
	document.title = to.meta.title;
});

export default router;
