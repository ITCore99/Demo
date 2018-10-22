<template>
    <div class="layout-wrap">
      <el-row>
        <el-col :span="4">
          <sliderNav></sliderNav>
        </el-col>
        <el-col :span="20">
          <headerNav></headerNav>
        </el-col>
      </el-row>
    </div>
</template>

<script>
    import headerNav from "@/components/headerNav";
    import sliderNav from "@/components/sliderNav";
    export default {
        name: "index",
        components:{
          "headerNav":headerNav,
          "sliderNav":sliderNav,
        }
    }
</script>

<style scoped>

</style>
