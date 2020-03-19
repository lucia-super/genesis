<template>
  <div class="container" />
</template>
<script>
  import baseList from "../base/BaseList";

  export default {
    methods: {
      initialize() {
        this.moduleType = "home";
        this.fetchList();
      }
    }
  };
</script>
