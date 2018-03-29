<template>
	<div class="blur">
    	<div class="titleDiv"><img src="http://111.231.84.129/images/xncw2.png" class="title"></div>

    	<div class="button-group2">
			<div>
				<img src="http://111.231.84.129/images/button13.png">
				<router-link to="/learning/case"><img src="http://111.231.84.129/images/button14.png"></router-link>
			</div>
			<div>
				<router-link to="/learning/test"><img src="http://111.231.84.129/images/button15.png" style="padding-left:115px"></router-link>
				<img src="http://111.231.84.129/images/button16.png">
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
.blur{
	background:rgba(255,255,255,0.5); 	
	filter:alpha(opacity:50); 
  	flex-grow: 2;
  	height: 100%;
  }

.titleDiv{
 }
.button-group2{
    display: flex;
    flex-direction: column;
}
.button-group2 img{
	width: 160px;
}

</style>
