/**
 * The external dependencies.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import { isEmpty } from 'lodash';

/**
 * The internal dependencies.
 */
import Landing from 'router/modules/landing';

/**
 * Install the plugins.
 */
Vue.use(VueRouter);

/**
 * Setup the router.
 */
const router = new VueRouter({
	routes: [Landing],
	linkActiveClass: ''
});

/**
 * Attach the middlewares.
 *
 * @param  {Object}   to
 * @param  {Object}   from
 * @param  {Function} next
 */
router.beforeEach((to, from, next) => {
	if (!to.meta.middlewares) {
		next();
		return;
	}

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
		Promise.all(providers.map(provider => provider(to, from, next))).then(
			() => next()
		);
	} else {
		next();
	}
});

/**
 * Set the document title.
 * @param  {Object} to
 * @param  {Object} from
 * @return {Void}
 */
router.afterEach((to, from) => {
	document.title = to.meta.title;
});

export default router;
