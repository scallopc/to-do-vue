<template>
  <div class="container-main">
    <Header />
    <AddToDo v-on:add-todo="addTodo" />
    <ToDo v-bind:todos="paginatedTodos" @del-todo="deleteTodo" />
    <Paginator
      :currentPage="currentPage"
      :totalPages="totalPages"
      @page-changed="changePage"
    />
  </div>
</template>

<script scope>
import ToDo from './components/toDo.vue';
import Header from './components/header.vue';
import AddToDo from './components/addToDo.vue';
import axios from 'axios';
import Paginator from './components/paginator.vue';

export default {
  name: 'App',
  components: {
    ToDo,
    Header,
    AddToDo,
    Paginator,
  },
  data() {
    return {
      todos: [],
      currentPage: 1,
      todosPerPage: 10,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.todos.length / this.todosPerPage);
    },
    paginatedTodos() {
      const start = (this.currentPage - 1) * this.todosPerPage;
      const end = start + this.todosPerPage;
      return this.todos.slice(start, end);
    },
  },
  methods: {
    deleteTodo(id) {
      axios
        .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(
          (res) => (this.todos = this.todos.filter((todo) => todo.id !== id))
        )
        .catch((err) => console.log(err));
    },
    addTodo(newTodo) {
      const { title, completed } = newTodo;

      axios
        .post('https://jsonplaceholder.typicode.com/todos', {
          title,
          completed,
        })
        .then((res) => (this.todos = [...this.todos, res.data]))
        .catch((err) => console.log(err));
    },
    changePage(page) {
      this.currentPage = page; // Atualiza a página atual ao clicar no paginador
    },
  },
  created() {
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then((res) => (this.todos = res.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Poppins, sans-serif;
  font-size: 14px;
  line-height: 1.4;
}

.container-main {
  margin: auto;
  max-width: 100%;
  width: 640px;
  box-shadow: 0 0 4px 0px #b5b1b145;

  .btn {
    display: inline-block;
    border: none;
    background: #555;
    color: #fff;
    padding: 7px 20px;
    cursor: pointer;
    &:hover {
      background: #666;
    }
  }
}
</style>
