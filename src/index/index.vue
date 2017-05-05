<template>
	<div class="index">
		<h1>首页</h1>
		<div class="info">{{ msg }}</div>
		<router-link :to="{ name: 'Test' }" class="link">Test</router-link>
		<router-link :to="{ name: 'Hello' }" class="link ">Hello</router-link>
	</div>
</template>


<script>
	export default {
	  name: 'index',
	  data () {
	    return {
	      msg: 'Welcome to Your Home.js App'
	    }
	  }
	}
</script>

<style scoped>
	.index{
		/*background-color: #f00;*/
		overflow: hidden;
		padding:20px;
	}
	.index .link{
		border: 1px solid #ddd;
		border-radius: 5px;
		padding: 5px 15px;
		margin: 0 20px;
	}
	.index .link:hover{
		color: #000;
		border-color: #f00;
	}
</style>
