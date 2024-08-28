<template>
  <div class="todo-item" :class="{ 'is-complete': todo.completed }">
    <div class="item">
      <input type="checkbox" @change="markComplete" />
      {{ todo?.title }}
    </div>
    <button @click="delTodo(todo.id)" class="del">x</button>
  </div>
</template>

<script>
export default {
  name: 'ToDoItem',
  props: ['todo'],
  methods: {
    markComplete() {
      this.todo.completed = !this.todo.completed;
    },
    delTodo(id) {
      this.$emit('delTodo', id); // Emissão do evento personalizado
    },
  },
  emits: ['del-Todo'], // Declare the event here
};
</script>

<style scoped lang="scss">
.todo-item {
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #dddddd solid;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  gap: 10px;

  .item {
    display: flex;
    align-items: center;
    gap: 10px;
  }
}

.is-complete {
  text-decoration: line-through;
}

.del {
  background: #ff0000;
  color: #fff;
  border: none;
  padding: 5px 9px;
  border-radius: 50%;
  cursor: pointer;
  float: right;
}
</style>
