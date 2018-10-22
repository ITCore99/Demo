<template>
  <div class="header-wrap">
     <div class="header cleaFix">
          <div class="fll left">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>活动管理</el-breadcrumb-item>
              <el-breadcrumb-item>活动列表</el-breadcrumb-item>
              <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <div class="flr right">
            <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>黄金糕</el-dropdown-item>
                <el-dropdown-item>狮子头</el-dropdown-item>
                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                <el-dropdown-item>双皮奶</el-dropdown-item>
                <el-dropdown-item>蚵仔煎</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
     </div>
  </div>
</template>

<script>
    import "../stytle/index.scss"
    export default {
        name: "headerNav"
    }
</script>

<style scoped lang="scss">
.header
{
  height:50px;
  line-height: 50px;
  border-bottom: 1px solid #ddd;
  padding:0px 25px;

 .left
 {
   margin-top: 15px;
 }

}

</style>
