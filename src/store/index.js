import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    points: 0,
    products: [],
    todos: [],
    user: null,
  },
  getters: {
    points: (state) => {
      return state.points;
    },
    getProducts: (state) => {
      return state.products;
    },
    getTodos(state) {
      return state.todos;
    },
  },
  mutations: {
    increase: (state) => {
      state.points++;
    },
    updatePoints: (state, payload) => {
      state.points = state.points + payload;
    },
    decrease(state, payload) {
      state.points = state.points + payload;
    },
    addProducts(state, payload) {
      state.products = payload;
    },
    addTodos(state, payload) {
      state.todos = payload;
    },
    setUser(state, payload) {
      state.user = payload;
      console.log(state.user);
    },
  },
  actions: {
    async productsData(context) {
      const res = await axios.get("https://fakestoreapi.com/products");
      const data = res.data;
      context.commit("addProducts", data);
    },

    async todosData(context) {
      const res = await axios.get("https://jsonplaceholder.cypress.io/todos");
      context.commit("addTodos", res.data);
    },

    register(context, { email, password }) {
      console.log("register action running!");
      setTimeout(() => {
        context.commit("setUser", { email, password });
      }, 2000);
    },
  },
  modules: {},
});
