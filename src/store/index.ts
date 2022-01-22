import Vue from "vue";
import Vuex from "vuex";

import todo from "./modules/TodoModule";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  modules: {
    todo,
  },
});

export default store;
