<template>
  <div class="container">
    {{ detail }}
  </div>
</template>
<script>
  import BaseDetail from "../../base/BaseDetail";

  export default {
    extends: BaseDetail,
    methods: {
      initialize() {
        this.moduleType = "school";
        this.fetchDetail();
      }
    }
  };
</script>
