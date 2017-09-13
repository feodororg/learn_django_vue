<template>
  <li>
    {{ todo.id }} {{ todo.title }} 
    <button v-on:click="removeTodo(todo)">X</button>
    <button v-on:click="editTodo(todo)">Edit</button>
  </li>
</template>

<script>
import store from '../store';

export default {
  props: ['todo'],
  methods: {
    removeTodo: function removeTodo(todo) {
      console.log('remove todo');
      store.dispatch('todos/removeTodo', todo);
    },
    editTodo: function editTodo(todo) {
      console.log('edit todo');
      store.dispatch('todos/editTodo', {
        id: todo.id,
        title: `${todo.title}, edited`,
      });
    },
  },
};
</script>

<style scoped>

li {
  display: block;
}

</style>
