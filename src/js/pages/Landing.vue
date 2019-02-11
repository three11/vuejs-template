<template>
  <div id="example">
    <h1>Hello World</h1>

    <ul class="example-todos">
      <li v-for="(todo, key) in todos" :key="key">
        {{ todo.text }}
        <span @click="handleRemove(key)">X</span>
      </li>
    </ul>

    <a href="#" @click.prevent="handleNewTodo">Add Todo</a>
  </div>
  <!-- /#example -->
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

<style lang="scss">
body {
	background-color: red;
}
</style>

