<template>
  <!--此组件是用来封装图片上传的功能-->
  <label class="upload-wrap">
    <i class="el-icon-plus" v-if="!img"></i>
    <input type="file" style="display:none" @change="upload"/>
    <img :src="img" v-if="img" class="IMg"/>
  </label>
</template>
<script>
  import axios from "axios";
  export default {
    name: "UpLoadViews",
    props:{
      img:{
        type:String,
      }
    },
    data()
    {
      return{
        token:"",
        imgUrl:"",
      }
    },
    methods:{
      getToken()
      {
        axios.get("http://upload.yaojunrong.com/getToken").then(res=>{
          if(res.data.code==200)
          {
            this.token=res.data.data; /**保存token*/
          }
        }).catch(err=>{
          console.log(err);
        })
      },
      upload(event)
      {
        // console.log(event);
        // /*创建一个表单对象*/
        // let formData =new FormData();
        // formData.append("file",event.target.files[0]);
        // formData.append("token",this.token)
        // axios.post("https://upload-z1.qiniup.com",formData,{header:{"Conent-type":"multipart/form-data"}}).then(res=>{
        //   this.$emit("uploadSuccess",res.data.url )
        // }).catch(err=>{
        //   console.log(err);
        // })
        /**转base64进行上传*/
        // 利用fileReader对象获取file
        let _this=this;
        var file = event.target.files[0];
        var filesize = file.size;
        if (filesize > 2101440)
        {
          // 图片大于2MB
        }
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (e)
        {
          // 读取到的图片base64 数据编码 将此编码字符串传给后台即可
          var imgcode = e.target.result;
          var nativeCode=imgcode;
          imgcode=imgcode.split(",")[1];
          let formData=new FormData();
          formData.append("myFile",imgcode);
          _this.axios.post("/hhdj/image/uploadBase64.do",formData).then(res=>{
           if(res.error==200)
           {
             _this.$emit("uploadSuccess",res.url);
             _this.$emit("Base64",nativeCode);
           }
          })
        }

      }
    },
    created()
    {
      this.getToken();
    }
  }
</script>

<style scoped lang="scss">
  .upload-wrap
  {
    position:relative;
    display:block;
    width:45px;
    height:45px;
    border: 1px solid #e8e8e8;
    border-radius:6px;
    cursor:pointer;

    .el-icon-plus{
      position:absolute;
      top:50%;
      left:50%;
      transform: translate(-50%,-50%);
    }
    .IMg
    {
      width:45px;
      height:45px;
    }
  }
</style>
