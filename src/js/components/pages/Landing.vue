<template>
	<div id="example">
		<h1>Hellow World</h1>

		<ul class="example-todos">
			<li v-for="(todo, key) in todos">
				{{todo.text}}

				<span @click="handleRemove(key)">X</span>
			</li>
		</ul>

		<a @click.prevent="handleNewTodo" href="#">Add Todo</a>
	</div><!-- /#example -->

</template>

<script>
/**
 * The exterla dependencies
 */
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

export default {
	computed: {
		...mapGetters(['todos'])
	},
	methods: {
		...mapActions(['addTodo', 'removeTodo']),

		handleNewTodo() {
			this.addTodo({ text: 'Text' });
		},
		handleRemove(index) {
			this.removeTodo(index);
		}
	}
};
</script>
