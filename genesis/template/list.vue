<template>
  <div class="container" />
</template>
<script>
  import baseList from "../base/baseList";

  export default {
    methods: {
      initialize() {
        this.moduleType = "home";
        this.fetchList();
      }
    }
  };
</script>
