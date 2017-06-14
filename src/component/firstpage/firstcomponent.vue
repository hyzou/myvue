<template>
	<div id="firstcomponent">
		<img src="../../static/assets/logo.png"/>
	    <h1>{{ msg }}</h1>
	    <span v-bind:title="message">
	    	鼠标悬停几秒钟查看此处动态绑定的提示信息！
	    </span>
	    <div v-if='seen'>
	    	你能看到我吗
	    </div>
	    <div>
	    	<ul>
	    		<li v-for='it in todos'>{{ it.text }}</li>
	    	</ul>
	    </div>
	    <div>
			<p>{{ message }}</p>
			<button v-on:click="reverseMessage">逆转消息</button>
		</div>
		<input v-model="message" v-on:change="changeVal">
		<ul>
		    <li v-for="article in articles">
		        {{article.title}}
		    </li>
	    </ul>	
      	<ul>
        	<li><router-link :to="{ name: 'first', params: { userId: 123 }}">/</router-link></li>
        	<li><router-link :to="{ name: 'pageone', params: { userId: 123 }}">/第一页123</router-link></li>
        	<li><router-link :to="{ name: 'pagetwo', params: { userId: 123 }}">/第二页223</router-link></li>
      	</ul>
      	<router-view class="view"></router-view>
	</div>
</template>

<script>
	export default{
	    data () {
		    return {
		      msg: 'Welcome to Your Vue.js App',
		      message: '页面加载于 ' + new Date(),
		      seen:false,
		      todos: [
			      { text: '学习 JavaScript' },
			      { text: '学习 Vue' },
			      { text: '整个牛项目' }
			    ],
			    groceryList: [
			      { text: '蔬菜' },
			      { text: '奶酪' },
			      { text: '随便其他什么人吃的东西' }
			    ]
		    }
	    },
	    mounted: function() {
		    this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
		        headers: {
		
		        },
		        emulateJSON: true
		    }).then(function(response) {
		      // 这里是处理正确的回调
		
		        this.articles = response.data.subjects
		        // this.articles = response.data["subjects"] 也可以
		
		    }, function(response) {
		        // 这里是处理错误的回调
		        console.log(response)
		    });
	    },
		methods: {
		    reverseMessage: function () {
		      	this.message = this.message.split('').reverse().join('')
		    },
		    changeVal: function(){
		    	console.log(this);
		    	alert(this.message);
		    }
		}
	}
</script>

<style>
</style>