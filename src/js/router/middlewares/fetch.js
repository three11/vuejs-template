/**
 * The internal dependencies.
 */
import store from 'store';

export default function fetch(to, from, next) {
	return Promise.all(to.meta.actions.map((action) => {
		if (typeof(action) === 'object') {
			return store.dispatch(action.action, to.params[action.param]);
		}

		return store.dispatch(action);
	}));
}
