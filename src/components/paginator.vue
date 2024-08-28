<template>
  <div class="pagination">
    <button :disabled="currentPage === 1" @click="changePage(currentPage - 1)">
      <i class="bi bi-chevron-left"></i>
    </button>
    <span>{{ currentPage }} de {{ totalPages }}</span>
    <button
      :disabled="currentPage === totalPages"
      @click="changePage(currentPage + 1)"
    >
      <i class="bi bi-chevron-right"></i>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
  },
  methods: {
    changePage(page) {
      this.$emit('page-changed', page);
    },
  },
};
</script>

<style scoped lang="scss">
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;

  button {
    margin: 0 10px;
    padding: 5px 10px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    font-size: 12px;
    width: 36px;
    height: 36px;
    box-shadow: 0 0 4px 0px #b5b1b145;
    background-color: #fdfdfd;

    .bi {
      color: #0e58b9;
      font-size: 16px;
      font-weight: 600;
    }

    &.disabled {
      cursor: not-allowed;
      opacity: 0.3;
      &:hover {
        background-color: #fdfdfd;
      }
    }

    &:hover {
      transition: all 1s ease;
      background-color: #dedbdb;
    }
  }
  span {
    margin: 0 10px;
  }
}
</style>
