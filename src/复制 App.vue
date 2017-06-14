<template>
  <div id="app">
  	<div v-if="loaded">
	  	<div class="header">
	  		<div class="headlogo"></div>
	  	</div>
	  	<div class="container">
	  		<div class="sider">
		      <ul>
		        <li><router-link to="/">/</router-link></li>
		        <li><router-link to="/first">/第一页1</router-link></li>
		        <li><router-link to="/second">/第二页2</router-link></li>
		      </ul>
	  		</div>
	  		<div class="main">
		      <router-view class="view"></router-view>
	  		</div>
	  	</div>
  	</div>
  	<div v-else>
  		<div class="loadpage" v-on:click="checkInfo">
  			123
  		</div>
  	</div>
  </div>
</template>
<script>
	export default{
    data () {
	    return {
	      loaded: false
	    }
    },
    /*mounted: function() {
	    this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
	        headers: {
	
	        },
	        emulateJSON: true
	    }).then(function(response) {
	        this.loaded = true
	    }, function(response) {
	        console.log(response)
	    });
    },*/
		methods: {
	    reverseMessage: function () {
	      	this.message = this.message.split('').reverse().join('')
	    },
	    changeVal: function(){
	    	console.log(this);
	    	alert(this.message);
	    },
	    checkInfo:function() {
		    this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
	        headers: {
	
	        },
	        emulateJSON: true
		    }).then(function(response) {
		        this.loaded = true
		    }, function(response) {
		        console.log(response)
		    });
	    }
		}
	}
</script>

<style scoped>
  @import './static/css/main.css';
</style>