<template>
  <div class="container" />
</template>
<script>
  import baseList from "../../base/BaseDetail";

  export default {
    methods: {
      initialize() {
        this.moduleType = "home";
        this.fetchDetail();
      }
    }
  };
</script>
