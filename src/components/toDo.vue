<template>
  <div v-for="todo in todos" v-bind:key="todo.id">
    <ToDoItem v-bind:todo="todo" @del-todo="$emit('del-todo', todo.id)" />
  </div>
</template>

<script>
import ToDoItem from './toDoItem.vue';

export default {
  name: 'ToDo',
  components: {
    ToDoItem,
  },
  props: ['todos'],
};
</script>
