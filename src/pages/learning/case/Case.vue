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

    <div class="blur">
      <div class="titleDiv"><img src="http://111.231.84.129/images/xncw2.png" class="title"></div>
      <el-select v-model="value1" placeholder="请选择病种">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
      </el-select>
    	<el-select v-model="value2" placeholder="请选择病名">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
      </el-select>
      <el-table :data="tableData" border class="table">
        <el-table-column prop="date" label="日期" ></el-table-column>
        <el-table-column prop="name" label="姓名" ></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import ElementUI from 'element-ui';
import { Select } from "element-ui";
import { Option } from "element-ui";
import { Table } from "element-ui";
import { TableColumn } from "element-ui"


import 'element-ui/lib/theme-chalk/index.css';


export default {
  name: 'HelloWorld',
  components: { 'el-select': Select ,'el-option': Option, 'el-table': Table, 'el-table-column': TableColumn },
  data () {
    return {
      options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value1: '',
        value2: '',
        tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
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
    justify-content: space-around;
  }
  .title{
    height: 150px;
  }
  .table{
    width: 100%;
    height: 100%;
    text-align: left;
    background: rgba(255,255,255,0.5);
  }
  .table .cell{
    background: rgba(255,255,255,0.5);
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
