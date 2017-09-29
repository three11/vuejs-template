/**
 * The external dependencies.
 */
import Vue from 'vue';

/**
 * The internal dependencies.
 */
import router from 'router';
import store from 'store';
import App from 'components/application/application.vue';

/**
 * Start the application.
 */
new Vue({ router, store, ...App }).$mount('.app');
