<template>
  <ToDo v-bind:todos="todos" @del-todo="deleteTodo" />
</template>

<script>
import ToDo from './components/toDo.vue';

export default {
  name: 'App',
  components: {
    ToDo,
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          title: 'Todo One',
          completed: false,
        },
        {
          id: 2,
          title: 'Todo Two',
          completed: false,
        },
        {
          id: 3,
          title: 'Todo Three',
          completed: false,
        },
      ],
    };
  },
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
