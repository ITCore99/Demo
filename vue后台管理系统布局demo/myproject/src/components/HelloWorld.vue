<template>
  <div class="hello">
    <h1 class="title">我是标题</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>


<style scoped lang="scss">
 .hello
 {
   .title
   {
     color:#f00;
   }
 }

</style>
