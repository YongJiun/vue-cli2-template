<template>
  <div id="app" :class="[mode, page]">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import './script/device.js';

export default {
  name: 'App',

  computed: {
    ...mapGetters(['mode', 'page'])
  },

  created () {
    this.$store.commit('device', window.device);
  }
}
</script>

<style lang="scss">
  @import './style/fonts.scss';
  @import './style/global.scss';
  @import './style/reset.scss';
  @import './style/unit.scss';
</style>
