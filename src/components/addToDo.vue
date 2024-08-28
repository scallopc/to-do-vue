<template>
  <div>
    <form @submit.prevent="addTodo">
      <input
        type="text"
        v-model="title"
        name="title"
        id=""
        placeholder="Add to do"
      />
      <button>Add</button>
    </form>
  </div>
</template>

<script>
import uuid from 'uuid';

export default {
  data() {
    return {
      title: '',
    };
  },
  methods: {
    addTodo(e) {
      e.preventDefault();

      const newTodo = {
        title: this.title,
        completed: false,
      };
      // Send up to parent
      this.$emit('add-todo', newTodo);

      this.title = '';
    },
  },
};
</script>

<style scoped lang="scss">
form {
  display: flex;
}

input[type='text'] {
  flex: 10;
  padding: 5px;
}

button {
  flex: 2;
}
</style>
