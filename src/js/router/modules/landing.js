/**
 * The internal dependencies.
 */
import fetch from 'router/middlewares/fetch';
import Landing from 'components/pages/Landing.vue';

export default {
	/**
	 * Route name.
	 *
	 * @type {String}
	 */
	name: 'landing',

	/**
	 * Route path.
	 *
	 * @type {String}
	 */
	path: '/',

	/**
	 * Route component.
	 *
	 * @type {Object}
	 */
	component: Landing,

	/**
	 * Route meta data
	 *
	 * @type {Object}
	 */
	meta: {
		/**
		 * Route middlewares.
		 *
		 * @type {Object}
		 */
		middlewares: {
			/**
			 * Determine route accessibility.
			 *
			 * @type {Array}
			 */
			guards: [],

			/**
			 * Set up the state for the route.
			 *
			 * @type {Array}
			 */
			providers: []
		},

		/**
		 * Store's actions. Should be used by the providers middlewares.
		 *
		 * @type {Array}
		 */
		actions: [],

		/**
		 * The title that should be set to the document.
		 *
		 * @type {String}
		 */
		title: 'Landing Page'
	}
};
