<template>
  <section>
    <div class="container-sm p-2 rounded">
      <form @submit.prevent="loginSubmit">
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
          <button class="btn btn-sm btn-primary">Login</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const email = ref("");
    const password = ref("");

    const loginSubmit = () => {
      console.log(email.value, password.value);
    };
    return {
      email,
      password,
      loginSubmit,
    };
  },
};
</script>

<style lang="stylus" scoped></style>
