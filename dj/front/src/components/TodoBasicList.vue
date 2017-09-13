<template>
  <div id="todolist">
    <ul>
      <todo-basic-element v-for="todo in todos"
            v-bind:todo="todo" 
            v-bind:key="todo.id">
      </todo-basic-element>
    </ul>
  </div>
</template>

<script>
import TodoBasicElement from './TodoBasicElement';
import store from '../store';

export default {
  components: {
    TodoBasicElement,
  },
  computed: {
    todos() {
      return store.state.todos.todos;
    },
  },
};
</script>