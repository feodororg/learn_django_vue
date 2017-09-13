<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
    <input class="new-todo"
        autofocus autocomplete="off"
        placeholder="What needs to be done?"
        v-model="newTodo"
        @keyup.enter="addTodo">
      
    <div is="TodoBasicList">
    
    </div>
  </div>
    
    
</template>

<script>
import store from '../store';
import TodoBasicList from './TodoBasicList';

export default {
  name: 'TodoBasicAdd',
  data() {
    return {
      newTodo: '',
      msg: 'This is Todo Basic Add',
    };
  },
  computed: {
    todos() {
      return store.state.todos.todos;
    },
  },
  components: {
    TodoBasicList,
  },
  created: function created() {
    store.dispatch('todos/loadTodos', { title: 'test too' });
  },
  methods: {
    addTodo: function addTodo() {
      console.log('add todo');
      store.dispatch('todos/addTodo', {
        title: this.newTodo.trim(),
        completed: false,
        // time: '',
      });
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
