<template>
  <NavComp />
	<div class="pad">
		<router-view v-slot="{ Component }">
			<transition name="fadeUp" mode="out-in">
				<component :is="Component" :key="$route.path"></component>
			</transition>
		</router-view>
	</div>

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
 @import url('../public/styles.css');

	#app {
		font-family: var(--font-family);
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #860A35;
		background-size: cover;
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

	.pad{
		margin-top: 80px;
	}

</style>
