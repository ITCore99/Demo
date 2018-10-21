<template>
   <div>
     <hNav options="信工新闻眼"></hNav>
     <div ref="wrapper" :style="{height: contentH + 'px',overflow:'scroll'}" >
       <Loadmore :top-method="loadTop" :bottom-method="loadBottom" ref="loadmore" :bottom-all-loaded="isBottomLoaded" >
          <showItem :options="datas" title="信工新闻眼"></showItem>
       </Loadmore>
     </div>
     <div class="Nothing"v-if="isShow">没有更多数据了</div>
   </div>
</template>

<script>
    import showItem from "@/components/showItem"
    import  hNav from "@/components/Hnav"
    import { Loadmore } from 'mint-ui';
    export default {
        name: "index",
        data()
        {
          return{
            datas:[],
            pn:1,
            isBottomLoaded:false,
            contentH:"",
            dataTotal:"",
            isShow:"false",
          }
        },
        components:{
          "showItem":showItem,
          "hNav":hNav,
          Loadmore,
        },
        methods:{
          getData()
          {
            this.isShow=true;
            this.axios.get("/hhdj/news/newsList.do",{"page":this.pn,"rows":10,"type":0}).then(res=>{
              console.log(res);
              if(res.code==1)
              {
                this.isShow=false;
                this.datas=[...this.datas,...res.rows];
                this.dataTotal=res.total;
              }
            })
          },
          loadTop()
          {
            this.pn=1;
            this.datas=[];
            this.getData();
            this.$refs.loadmore.onTopLoaded();
          },
          loadBottom()
          {
             console.log("我出发了",this.datas.length,this.dataTotal);
            if(this.datas.length<this.dataTotal)
            {
              this.pn=this.pn+1;
              this.getData();
              this.$refs.loadmore.onBottomLoaded();
            }else
            {
               this.isBottomLoaded = true; // 若数据已全部获取完毕
               this.isShow=true;
            }
          }
        },
        created()
        {
          this.getData();
        },
        mounted() {
          this.$nextTick(function () {
            this.contentH = document.documentElement.clientHeight -
              this.$refs.wrapper.getBoundingClientRect().top;
          })
        },

    }
    /*
    * loadmore配置说明
    * :auto-fill=”false” 意思是当你还没有滑到底部时（其实是与底部距离不超过最大:max-distance=”150”），不加载。
     * 如果不写的话，在手机端有问题，每上拉一次就会进行一次加载。
     * :bottom-all-loaded:表示数据已经加载完毕不许在触发上拉事件。
     * :overflow 注意这个属性必须要设置为auto;
     * 注意一定要给容器的最外层计算容器的高度。
     * this.$refs.loadmore.onTopLoaded()/ this.$refs.loadmore.onBottomLoaded();这两个方法是每次执行完上拉和下拉后关闭动画，在刷新函数和上拉函数最后一定要写这个这个方法
    * ****/
</script>

<style scoped>
  /deep/
.mint-loadmore-text
{
  font-size: 14px;
  font-weight: 500;
}
  /deep/
  .mint-loadmore-text{
    font-size: 14px;
    font-weight: 500;
  }
  .loading
  {
    text-align: center;
    width: 100%;
  }
  .loading img
  {
    width: 40px;
    height: 40px;
  }
  .Nothing{
    height: 1rem;
    font-size: 14px;
    font-weight: 400;
    color: #666;
    text-align: center;
    padding-top: 10px;
  }
</style>
