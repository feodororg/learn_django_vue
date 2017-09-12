<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
    <input class="new-todo"
        autofocus autocomplete="off"
        placeholder="What needs to be done?"
        v-model="newTodo"
        @keyup.enter="addTodo">
    </div>
</template>

<script>
import store from '../store';

export default {
  name: 'TodoBasicAdd',
  data() {
    return {
      newTodo: '',
      msg: 'This is Todo Basic Add',
    };
  },
  methods: {
    addTodo: function addTodo() {
      console.log('add todo');
      store.dispatch('todos/addTodo', { title: 'test too' });
      console.log(store);
/*
      var value = this.newTodo && this.newTodo.trim()
      if (!value) {
          return
      }
      // What the fuck?! Evidently, the main data-model of Todo is stored
      // just as an object being pushed in an array and nowhere else
      this.todos.push({
          id: todoStorage.uid++,
          title: this.newTodoTime + ' ' + value,
          completed: false,
          time: ''
      })
      this.extractTimeFromTitle(this.todos[this.todos.length - 1]);
      this.newTodo = '';
      this.newTodoTime = '';
      */
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
