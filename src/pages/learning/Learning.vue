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
    	<div class="titleDiv"><img src="http://111.231.84.129/images/xncw2.png" class="title"></div>

    	<div class="button-group2">
			<div>
				<img src="http://111.231.84.129/images/button13.png">
				<router-link to="/case"><img src="http://111.231.84.129/images/button14.png"></router-link>
			</div>
			<div>
				<router-link to="/test"><img src="http://111.231.84.129/images/button15.png" style="padding-left:115px"></router-link>
				<img src="http://111.231.84.129/images/button16.png">
			</div>
		</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'this is cosplay'
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
  	flex-grow: 1;
  }
  .blur{
	background:rgba(255,255,255,0.5); 	
	filter:alpha(opacity:50); 
  	flex-grow: 3;
  	height: 100%;
  }
  
  .titleDiv{
  }
  .title{
    height: 150px;
  }
  .button-group{
    display: flex;
    flex-direction: column;
  }
  .button-group img{
    width: 120px;
  }
  .button-group2{
    display: flex;
    flex-direction: column;
  }
  .button-group2 img{
    width: 160px;
  }




</style>
