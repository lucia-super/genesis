@@ -1,34 +0,0 @@
<template>
  <div class="container">
    <el-table :data="listData" style="width: 100%">
      <el-table-column prop="key" label="日期" width="180" />
      <el-table-column prop="value" label="姓名" width="180" />
      <el-table-column prop="value" label="姓名" width="180" />
      <el-table-column prop="value" label="姓名" width="180" />
      <el-table-column prop="value" label="姓名" width="180" />
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >查看</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      small
      layout="prev, pager, next"
      :total="pagination.totalPages"
    >
    </el-pagination>
  </div>
</template>
<script>
  import baseList from "../../base/BaseList";

  export default {
    extends: baseList,
    methods: {
      initialize() {
        this.moduleType = "school";
        this.fetchList();
      },
      handleClick() {
        this.$router.push("schoolDetail");
      }
    }
  };
</script>
