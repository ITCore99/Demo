<template>
    <div class="radio-wraper cleaFix">
      <label class="label  fll" v-for="(item,index) in options " :key="index">
        <input type="radio" class="input" v-model="current" :value="item._id"/>
        <div class="title">
          <span class="radios-title">{{item.label}}</span>
        </div>
      </label>
    </div>
</template>

<script>
    import "../stytle/index.scss"
    export default {
        name: "FuRadio",
        props:{
          options:{
            type:Array,
          },
          value:{
            type:String,
          }
        },
        data()
        {
          return{
            current:"",
          }
        },
        methods:{

        },
        watch:{
          current(value)
          {
            this.$emit("input",value);
            this.$emit("change",value);
          }
        }
    }
</script>

<style scoped lang="scss">
.radio-wraper
{
   margin-top: 6px;
  .input
  {
    display:none;
  }
  .label
  {
     display: block;
     border-radius: 5px;
     border: 1px solid #aaa;
     overflow: hidden;
     outline: none;
     height:30px;
     line-height: 30px;
     margin-right: 15px;
  }
  .title
  {
    font-size: 13px;
    text-align: center;
    color:#333;
    background: #f1f1f1;
    padding:0px 10px;
    cursor: pointer;
    background: #f1f1f1;
    height: 100%;
  }
  .input:checked +.title
  {
    background: #409eff;
    color:#fff;
  }
}
</style>
