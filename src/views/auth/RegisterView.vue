<template>
  <section>
    <div class="container-sm p-2 rounded">
      <form @submit.prevent="registerSubmit">
        <div class="my-2">
          <input
            type="text"
            class="form-control"
            placeholder="email"
            v-model="email"
          />
        </div>
        <div class="my-2">
          <input
            type="password"
            class="form-control"
            placeholder="password"
            v-model="password"
          />
        </div>
        <div class="my-2">
          <button class="btn btn-sm btn-primary">Register</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const email = ref("");
    const password = ref("");

    const registerSubmit = () => {
      // console.log(email.value, password.value);
      store.dispatch("register", {
        email: email.value,
        password: password.value,
      });
    };

    return {
      email,
      password,
      registerSubmit,
      store,
    };
  },
};
</script>

<style lang="stylus" scoped></style>
