<template>
    <div class="wraper">
      <div class="container" id="container">
         <label class="label" id="label">
           <input type="file" class="input" @change="upLoad" />
           <i class="icon"></i>
         </label>
         <div class="img"></div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ImgUpLoadStyle2",
        methods: {
            upLoad(event)
            {
              let file=event.target.files[0];
              let size=event.size;
              if(size>2101440)
              {
                console.log("图片太大无法上传");
                return;
              }
              let reader=new FileReader();
              reader.readAsDataURL(file);
              reader.onload=(e)=>{
                let _this=this;
                let imgBase64=e.target.result;
                let formData=new FormData();
                formData.append("myFile",imgBase64.split(",")[1]);
                this.axios.post("/hhdj/image/uploadBase64.do",formData).then(res=>{
                  if(res.error==200)
                  {
                    let img=document.createElement('img');
                    img.setAttribute("src",imgBase64);
                    img.style.width="2.1rem";
                    img.style.height="2.1rem";
                    img.style.marginTop="15px";
                    let div=document.getElementById('container');
                    let label=document.getElementById("label")
                    div.insertBefore(img,label);
                    console.log(res.url);
                    _this.$emit("upLoadSuccess",res.url);
                  }else
                  {
                    console.log("上传出现错误！")
                  }
                })

              }

            }
          }
    }
</script>

<style scoped>
.wraper
{
  width: 100%;
}
.container
{
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.input
{
  display: none;
}
.label
{
  display:inline-block;
  vertical-align: middle;
  width:2.1rem;
  height: 2.1rem;
  border: 1px solid #f1f1f1;
  position: relative;
  margin-top: 15px;
  margin-left: 5px;
}
.icon
{
  display: block;
  width: 80px;
  height: 80px;
  background: url("../image/images/加号（添加）.png");
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);

}
</style>
