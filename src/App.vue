<template>
  <NavComp />
	<router-view v-slot="{ Component }">
		<transition name="fadeUp" mode="out-in">
			<component :is="Component" :key="$route.path"></component>
		</transition>
	</router-view>
</template>

<script>
import NavComp from './components/NavComp.vue'

export default {
  name: 'App',
  components: {
    NavComp
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
#app {
		color: #860A35;
		background-color: #F4DFC8;
	}
	.fadeUp-enter-active,
	.fadeUp-leave-active {
		transition: opacity 0.25s, transform 0.25s;
	}
	.fadeUp-enter,
	.fadeUp-leave-to {
		opacity: 0;
		transform: translateY(30%);
	}
</style>
