/**
 * The external dependencies
 */

/**
 * The internal dependencies
 */

/**
 * The initial state of the module.
 *
 * @type {Object}
 */
export const state = {
	requesting: false,
	data: {
		todos: []
	}
};

/**
 * The supported mutations types.
 *
 * @type {String}
 */
export const ADD_TODO = 'todo/add';
export const REMOVE_TODO = 'todo/delete';

/**
 * The supported actions.
 *
 * @type {Object}
 */
export const actions = {
	addTodo({ commit }, payload) {
		commit(ADD_TODO, payload);
	},
	removeTodo({ commit }, payload) {
		commit(REMOVE_TODO, payload);
	}
};

/**
 * The mutations of the state.
 *
 * @type {Object}
 */
export const mutations = {
	[ADD_TODO](state, todo) {
		state.data.todos.push(todo);
	},

	[REMOVE_TODO](state, index) {
		state.data.todos.splice(index, 1);
	}
};

/**
 * Get some information from the state.
 *
 * @type {Object}
 */
export const getters = {
	todos: state => {
		return state.data.todos;
	}
};
