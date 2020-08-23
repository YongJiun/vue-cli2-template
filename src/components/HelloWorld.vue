<template>
  <div class="hello">
    <h1>{{ msg }}</h1><br>
    {{ user.name }}<br>
    <router-link to="/about">about</router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome Vue.js'
    }
  },
  computed: {
    ...mapGetters(['user']), 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$red: #ff1122;
h1, h2 {
  font-weight: normal;
  color: $red;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
