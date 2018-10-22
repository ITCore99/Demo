<template>
  <div class="sliderNav-wrap">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1-1">
        <span class="title">首页</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
          <el-menu-item index="1-3">选项3</el-menu-item>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
    export default {
        name: "sliderNav"
    }
</script>

<style scoped lang="scss">
.sliderNav-wrap
{
  width: 100%;
  height: 100vh;
  background: rgb(84, 92, 100);

  .title
  {
    margin-left: 10px;
  }
}

</style>
