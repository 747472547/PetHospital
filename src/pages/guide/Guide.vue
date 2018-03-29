<template>
  <div class="obj">
    <model-obj src="static/model/testV4.obj" mtl="static/model/testV4.mtl"></model-obj>
  </div>
</template>

<script>
import { ModelObj } from 'vue-3d-model'

export default {
  components: { ModelObj },

  data () {
    return {
      msg: 'this is guide'
    }
  }
}
</script>

<style scoped>
	.obj {
		width: 100%;
		height: 100%;
	}

</style>
