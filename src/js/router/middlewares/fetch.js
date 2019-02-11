/**
 * The internal dependencies.
 */
import store from 'store';

/**
 * Executes all store actions in the route's meta.
 *
 * @return {Object<Promise>}
 */
export default function fetch(to) {
	return Promise.all(
		to.meta.actions.map(action => {
			if (typeof action === 'object') {
				return store.dispatch(action.action, to.params[action.param]);
			}

			return store.dispatch(action);
		})
	);
}
