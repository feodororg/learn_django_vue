import Vue from 'vue';

// import _ from 'lodash';

export default {
  namespaced: true,
  strict: true,
  state: {
    todos: [
      { title: 'Learn Vue.' },
      { title: 'Do hard things.' },
    ],
  },
  mutations: {
    LOAD_TODOS(state, response) {
      // Vue.set(state.todos, hash(q), results);
      const todos = state.todos;
      todos.splice(0, todos.length);
      Array.prototype.push.apply(state.todos, response.body.results);
      // state.todos = response.body.results;
    },
    ADD_TODO(state, response) {
      state.todos.push(response.body);
    },
    REMOVE_TODO(state, todo) {
      state.todos.splice(state.todos.indexOf(todo), 1);
    },
    EDIT_TODO(state, response) {
      console.log('EDIT_TODO mutation');
      state.todos.splice(state.todos.indexOf(response), 1, response.body);
    },
/*
    REMOVE_ALL(state) {
      const todos = state.todos;
      todos.splice(0, todos.length);
    },
*/
  },
  actions: {

    loadTodos(store) {
      return Vue.http.get('http://127.0.0.1:8000/todos/todos/')
        .then(response => store.commit('LOAD_TODOS', response));
    },

    addTodo(store, todo) {
      return Vue.http.post('http://127.0.0.1:8000/todos/todos/', todo)
        .then(response => store.commit('ADD_TODO', response));
    },
    removeTodo(store, todo) {
      const path = `http://127.0.0.1:8000/todos/todos/${todo.id}/`;
      return Vue.http.delete(path)
        .then(store.commit('REMOVE_TODO', todo));
    },
    editTodo(store, todo) {
      const path = `http://127.0.0.1:8000/todos/todos/${todo.id}/`;
      return Vue.http.patch(path, todo)
        .then(response => store.commit('EDIT_TODO', response));
    },
/*
    removeTodo(store, todo) {
      const path = `/todos/todos/${todo.id}/`;
      return Vue.http.delete(path)
        .then(response => store.commit('REMOVE_TODO', todo));
    },
    removeAll(store) {
      return Vue.http.delete('/todos/todos/remove_all/')
        .then(response => store.commit('REMOVE_ALL'));
    },
*/
  },

};

