<template>
  <div class="main">
    <div class="titleDiv"><img src="http://111.231.84.129/images/xncw.png" class="title"></div>
    
    <div class="button-group">
      <div>
        <img src="http://111.231.84.129/images/button1.png">
        <router-link to="/guide"><img src="http://111.231.84.129/images/button2.png"></router-link>
      </div>
      <div>
        <router-link to="/cosplay"><img src="http://111.231.84.129/images/button3.png" style="padding-left:95px"></router-link>
        <img src="http://111.231.84.129/images/button4.png">
      </div>
      <div>
        <img src="http://111.231.84.129/images/button5.png">
        <router-link to="/learning"><img src="http://111.231.84.129/images/button6.png"></router-link>
      </div>   
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '虚拟宠物医院'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main{
    background: url(http://111.231.84.129/images/background.jpeg) no-repeat;
    background-size: cover;
    position:absolute;
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    padding-left: 25px;
  }
  .titleDiv{
  }
  .title{
    height: 80px;
  }
  .button-group{
    display: flex;
    flex-direction: column;
  }
  .button-group img{
    width: 120px;
  }

</style>
