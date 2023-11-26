<template>
	<div class="card">
		<CardHeader v-if="header" :header="header" />
		<div class="card-body">
			<h5 v-if="title" class="card-title">{{ title }}</h5>
			<p v-if="parrafo" class="card-text mb-1">
				{{ parrafo }}
			</p>
			<img v-if="picture" :src="picture" alt="post img" class="post-img" />
			<ListGroup v-if="likes" />
			<slot></slot>
			<div class="d-grid gap-2">
				<button
					v-for="btn in btns"
					:key="btn.txt"
					class="btn"
					:class="btn.class">
					{{ btn.txt }}
				</button>

				<slot name="footer"></slot>
			</div>
			<CardComent v-if="comment" :comment="comment" :answer="answer">
			</CardComent>

			
		</div>
		
	</div>
	

</template>

<script>
	import CardHeader from './CardHeader.vue'
	import ListGroup from './ListGroup.vue'
	import CardComent from './CardComent.vue'
	export default {
		components: { CardHeader, ListGroup, CardComent },
		name: 'CardComp',
		props: ['title', 'parrafo', 'btns', 'picture', 'header', 'likes','comment','answer'],
	}
</script>

<style scoped>
	.card {
		border: none;
		box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
		text-align: left;
		background-color: var(--color-container);
	}
	.post-img {
		max-width: 100%;
		
	}
	.btn-primary{
		background-color: #860A35;
	}

	.btn:hover {
		color: var(--color-font);
	}
</style>