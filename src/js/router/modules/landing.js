/**
 * The internal dependencies.
 */
import fetch from 'router/middlewares/fetch';
import Landing from 'components/pages/Landing.vue';

export default {
	name: 'landing',
	path: '/',
	component: Landing,
	meta: {
		middlewares: {
			guards: [],
			providers: []
		},
		actions: [],
		title: ''
	}
};
