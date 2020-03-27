<template>
  <div class="container">
    <el-form :model="detail.data" label-width="100px" class="demo-dynamic">
      <el-form-item prop="name" label="姓名">
        <label>{{ detail.data.name }}</label>
      </el-form-item>
      <el-form-item prop="age" label="年龄">
        <label>{{ detail.data.age }}</label>
      </el-form-item>
      <el-form-item prop="address" label="地址">
        <label>{{ detail.data.address }}</label>
      </el-form-item>
      <el-form-item prop="comments" label="备注">
        <label>{{ detail.data.comments }}</label>
      </el-form-item>
      <el-form-item>
        <el-button @click="onBack()">编辑</el-button>
        <el-button @click="onBack()">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  import BaseDetail from "../../base/BaseDetail";

  export default {
    extends: BaseDetail,
    methods: {
      initialize() {
        this.moduleType = "students";
        this.fetchDetail();
      }
    }
  };
</script>
