<template>
	<div id="secondcomponent">
		<h1>我是一个标题</h1>
		<a>作者{{ author }}</a>
		<p>知道</p>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				author:"邹海洋",
				articles:[]
			}
		}
	}
</script>

<style>
</style>