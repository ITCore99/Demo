<template>
    <div class="login-wrap">
        <div class="wrap">
          <h3 class="title">党建E家后台管理系统</h3>
          <el-form ref="form" :model="form">
            <el-form-item label="用户名：">
              <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="密码：">
              <el-input v-model="form.password" type="password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" class="btn">登陆</el-button>
            </el-form-item>
          </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data()
        {
          return{
            form:{
              username:"admin",
              password:"password",
            }
          }
        },
    }
</script>

<style scoped lang="scss">
.login-wrap
{
  width: 100%;
  height: 100vh;
  background: #304156;
  overflow: hidden;

  .wrap
  {
    width: 400px;
    height: 350px;
    margin: 180px auto;
    box-sizing: border-box;
    border-radius: 6px;
    border: 1px solid #fff;
    padding: 30px;

  }
  .title
  {
    color:#fff;
    font-weight: 400;
    text-align: center;
  }
  .btn
  {
    width: 100%;
    margin-top:22px;
  }
  /deep/ .el-form-item__label
  {
    color:#fff;
  }
}

</style>
