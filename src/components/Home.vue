<template>
  <div class="hello">
    <h2>Home</h2>
    <h2>{{ count }}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
  import { mapState, mapMutations } from "vuex";
  export default {
    name: "Home",
    props: {
      msg: String
    },
    computed: mapState({
      count: state => state.home.count
    }),
    methods: {
      ...mapMutations("home", ["increment"])
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
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
