import Vue from 'vue'
import Vuex from 'vuex';
// import $ from 'jquery';

Vue.use(Vuex);

const store = new Vuex.Store({


  state: {
    device: {mode: ''},
    page: '',
    user: { name: 'user-name' },
    login: false,
  },

  mutations: {
    device (state, val) {state.device = val; },
    page (state, val) {state.page = val; }
  },

  getters: {
    device (state) {return state.device; },
    mode (state) {return state.device.mode; },
    page (state) {return state.page; },
    user (state) { return state.user; }
  },

  actions: {

  }

})

export default store;