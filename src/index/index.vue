<template>
	<div class="index">
		<md-theme>
			<h1>首页</h1>
			<div class="info">{{ msg }}</div>
			<router-link :to="{ name: 'Test', params: { title: linkTitle.btn1 } }" class="link">{{linkTitle.btn1}}</router-link>
			<router-link :to="{ name: 'Hello', params: { title: linkTitle.btn2 } }" class="link ">{{linkTitle.btn2}}</router-link>
			<!-- <a href="javascript:;" @click="getTestDetail('Test', linkTitle.btn1)" class="link" title="">{{linkTitle.btn1}}</a> -->
			<!-- <a href="javascript:;" @click="getTestDetail('Hello', linkTitle.btn2)" class="link" title="">{{linkTitle.btn2}}</a> -->
			<router-view></router-view>
		</md-theme>
	</div>
</template>


<script>
export default {
  name: 'index',
  data () {
    return {
      linkTitle: {
        btn1: 'test',
        btn2: 'Hello'
      },
      msg: 'Welcome to Your Home.js App'
    };
  },
  methods: {
    getTestDetail (name, title) {
      this.$router.push({name: name, params: { title }});
    }
  },
  components: {
    // headerBack
  }
};
</script>

<style scoped>
	.index{
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

	.md-theme-default.md-toolbar {
    background-color: #2196f3;
    color: rgba(255, 255, 255, .87);
	}
</style>
