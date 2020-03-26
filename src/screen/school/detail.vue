<template>
  <div class="container">
    详情页面
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
