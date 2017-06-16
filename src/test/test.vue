<template>
	<div id="test" class="test">
		<headerBack :title="returnTitle()"></headerBack>
		<div class="">{{ msg }}</div>
	</div>
</template>

<script type="text/javascript">
import headerBack from '@/components/common/header_back.vue';

export default {
  name: 'test',
  data () {
    return {
      msg: 'Welcome to Your Test.js App'
    };
  },
  computed: {
    testFun () {
      const vm = this;

      console.log(vm);
    }
  },
  methods: {
    returnTitle () {
      return this.$route.params.title;
    }
  },
  components: {
    headerBack
  }
};
</script>

<style scoped>
	.test{
		background-color:#ccc;
		color:#000;
	}
	.md-icon {
    margin: 8px;
    color: rgba(0,0,0, .54) !important;
  }

  .md-button {
    border-radius: 2px !important;
  }
</style>

