<template>
	<div class="test">
		{{ msg }}
	</div>
</template>

<script type="text/javascript">
	export default {
  name: 'test',
  data () {
    return {
      msg: 'Welcome to Your Test.js App'
    }
  }
}
</script>

<style scoped>
	.test{
		background-color:#ccc;
		color:#000;
	}
</style>

