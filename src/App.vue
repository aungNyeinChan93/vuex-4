<template>
  <section>
    <div class="container-fluid">
      <NavbarComponent />
      <router-view></router-view>
    </div>
  </section>
</template>

<script>
import NavbarComponent from "./components/Navbar-Component.vue";

export default {
  components: {
    NavbarComponent,
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
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
