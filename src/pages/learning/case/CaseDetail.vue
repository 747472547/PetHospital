<template>
  <div class="main">
  	<div class="menu">
	    <div class="button-group">
	      <div>
	        <img src="http://111.231.84.129/images/button1.png">
	        <router-link to="/guide"><img src="http://111.231.84.129/images/button2.png"></router-link>
	      </div>
	      <div>
	        <img src="http://111.231.84.129/images/button4.png" style="padding-left:95px">
	        <router-link to="/cosplay"><img src="http://111.231.84.129/images/button3.png"></router-link>
	      </div>   
	      <div>
	        <router-link to="/"><img src="http://111.231.84.129/images/button32.png" ></router-link>
	        <img src="http://111.231.84.129/images/button31.png">
	      </div>
	    </div>
	  </div>
	<!-- <router-view></router-view> -->
    <div class="blur">

    	<h1>艾滋病{{$route.params.id}}</h1>
      <div class="content">
        <img src="./test.jpeg">
        <p>等待加载等待加载等待加载等待加载等待加载等待加载等待加载等待加载等待加载等待加载等待加载等待加载等待加载等待加载等待加载等待加载等待加载等待加载等待加载等待加载等待加载</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'this is cosplay',
    }
  }
}
</script>

<style scoped>
.main{
    background: url(http://111.231.84.129/images/background.jpeg) no-repeat;
    background-size: cover;
    position:absolute;
    width:100%;
    height:100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding-left: 25px;
    justify-content: space-around;
  }
  .menu{
  	flex: 1;
  }
  .blur{
	  background:rgba(255,255,255,0.5); 	
	  filter:alpha(opacity:50); 
  	flex: 3;
  	height: 100%;
    flex-wrap: wrap;
  }
  
  .button-group{
    display: flex;
    flex-direction: column;
  }
  .button-group img{
    width: 120px;
  }
  .content{
    overflow: hidden;
    font-family: microsoftYahei;
    font-size: 20px;
    padding-left: 50px;
    padding-right: 50px; 

  }

  .content img{
    height: 250px;
  }





</style>
