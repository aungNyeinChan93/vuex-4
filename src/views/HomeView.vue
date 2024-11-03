<template>
  <div class="home">
    <div>Points : {{ getterPoints }}</div>
    <button class="btn btn-danger mx-1" @click="increase">Increase</button>
    <button class="btn btn-danger mx-1" @click="updatePoints(10)">
      Plus 10
    </button>
    <button class="btn btn-success mx-1" @click="decrease(-1)">Decrease</button>
    <button @click="productsData" class="btn btn-primary">Fetch Data</button>

    <!-- Card -->
    <div class="row mt-2 p-3">
      <div class="col-4" v-for="product in getProducts" :key="product.id">
        <div class="card my-2 customeCard">
          <div class="card-header">
            {{ product.title }}
          </div>
          <div class="card-body">
            <p class="text-muted p-1">
              {{ product.description.substring(0, 75) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import store from '@/store';

import { computed, onMounted } from "vue";
import { useStore } from "vuex";

export default {
  name: "HomeView",
  components: {},
  setup() {
    const store = useStore();

    const productsData = () => {
      store.dispatch("productsData");
    };

    onMounted(() => {
      // console.log(store.state.points);
      // console.log(store.state.products);
      productsData();
    });

    return {
      productsData,
      // productsData: () => store.dispatch("productsData"),
      getterPoints: computed(() => store.getters.points),
      getProducts: computed(() => store.getters.getProducts),
      increase: () => store.commit("increase"),
      updatePoints: (point) => store.commit("updatePoints", point),
    };
  },

  methods: {
    decrease(point) {
      this.$store.commit("decrease", point);
    },
  },
  computed: {
    points() {
      return this.$store.state.points;
    },
  },
};
</script>

<style scoped>
.customeCard {
  width: 400px;
  height: 170px;
}
</style>
