<template>
  <section>
    <div class="container">
      <h1>Todos List</h1>
      <div class="container">
        <div class="row my-2">
          <div class="col-4 my-1" v-for="todo in getTodos" :key="todo.id">
            <div
              :class="{
                'bg-info ': !todo.completed,
                'bg-success text-decoration-line-through': todo.completed,
              }"
              @dblclick="todo.completed = !todo.completed"
              class="card text-white"
            >
              <div class="card-body">
                {{ todo.title }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

export default {
  name: "TodosView",
  setup() {
    const store = useStore();

    const todosData = () => {
      store.dispatch("todosData");
    };

    onMounted(() => {
      todosData();
      console.log(store.state.todos);
    });

    const getTodos = computed(() => {
      return store.getters.getTodos;
    });

    return { store, todosData, getTodos };
  },
};
</script>

<style scoped>
.card {
  width: 350px;
  height: 70px;
}
</style>
