<template>
  <div id="app">
    <el-container>
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['home']">
          <el-menu-item-group>
            <el-menu-item index="home" @click="linkTo('home')">主页</el-menu-item>
            <el-menu-item index="school" @click="linkTo('school')">学校</el-menu-item>
            <el-menu-item index="students" @click="linkTo('students')">学生</el-menu-item>
          </el-menu-item-group>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>demo头部</el-header>
        <el-main>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>当前项目</el-breadcrumb-item>
          </el-breadcrumb>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    linkTo(name) {
      this.$router.push({ name });
    }
  }
};
</script>

<style>
@import url("//unpkg.com/element-ui@2.13.0/lib/theme-chalk/index.css");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
