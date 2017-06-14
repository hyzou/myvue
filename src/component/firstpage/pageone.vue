<template>
	<div id="pageone">
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

<style scoped>
.ul_se{ background: #fff; border: 1px solid #ccc; width: 100%;}
.ul_se li{list-style: none; height: 30px; line-height: 30px; cursor: pointer;}
.input_s{width: 400px; height: 30px; padding-left: 10px;}
.gray{background: deepskyblue; color: #fff;}
.ul_se li:hover{background: deepskyblue; color: #fff;}
</style>