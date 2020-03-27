<template>
  <div class="container">
    <div style="list-style: none; display: flex; margin: 20px; width: 300px">
      <el-input
        placeholder="请输入搜索值"
        v-model="conditions.value"
        class="input-with-select"
      >
        <el-button
          slot="append"
          icon="el-icon-search"
          @click="fetchList()"
        ></el-button>
      </el-input>
    </div>

    <el-table :data="listData" style="width: 100%">
      <el-table-column prop="key" label="日期" width="180"> </el-table-column>
      <el-table-column prop="value" label="姓名"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="gotoDetail(scope.row)" type="text" size="small">
            查看
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :pageSize="pagination.size"
      :total="pagination.amount"
    >
    </el-pagination>
  </div>
</template>
<script>
  import baseList from "../../base/BaseList";

  export default {
    extends: baseList,
    data() {
      return {
        moduleType: "students",
        conditions: {
          value: "123"
        }
      };
    }
  };
</script>
