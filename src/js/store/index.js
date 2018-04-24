/**
 * The external dependencies.
 */
import Vue from 'vue';
import Vuex from 'vuex';

/**
 * The internal dependencies.
 */
import * as todo from 'store/modules/example';

/**
 * Install the plugins.
 */
Vue.use(Vuex);

/**
 * Setup the store.
 */
export default new Vuex.Store({
	modules: { todo }
});
