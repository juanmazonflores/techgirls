<template>
	<div class="posts container">
		<img alt="mazebook" src="../assets/img/wordmark.svg" class="logo" />
		<CardComp
			class="mt-2 mx-auto single-spot"
			picture="https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
			parrafo="Hola esta es mi primera publicacion"
			:header="{
				name: 'Teresa Chavez',
				picture: 'https://randomuser.me/api/portraits/women/95.jpg',
			}"
			
			:likes="true" 
			:comment="{
				name: 'Teresa Chavez',
				picture: 'https://randomuser.me/api/portraits/women/95.jpg',
			}"
			:answer="{
				name: 'Teresa Chavez',
				picture: 'https://randomuser.me/api/portraits/women/95.jpg',
			}"/>
			
		<CardComp
			class="mt-2 mx-auto single-spot"
			picture="https://www.hausmanmarketingletter.com/wp-content/uploads/2023/05/64063dbcad97bd421b437096_chatgpt.jpg"
			parrafo="Conoce a la nueva CEO de OpenAI: Mira Murati"
			:header="{
				name: 'Expansion.mx',
				picture: 'https://www.eleconomista.com.mx/__public/ac558515aae5b22f/images/social/logo_organization.png',
			}"
			:likes="true" 
			:comment="{
				name: 'Teresa Chavez',
				picture: 'https://randomuser.me/api/portraits/women/95.jpg',
			}"
			:answer="{
				name: 'Teresa Chavez',
				picture: 'https://randomuser.me/api/portraits/women/95.jpg',
			}"
			
			/>
		<CardComp
			class="mt-2 mx-auto single-spot"
			picture="https://www.meganoticias.mx/uploads/noticias/sonora-presentan-plan-hidrico-para-los-proximos-30-anos-478409.jpeg"
			parrafo="Presentan plan hidrico para los proximos 30 años"
			:header="{
				name: 'El imparcial',
				picture: 'https://www.elimparcial.com/__export/1557412405886/sites/elimparcial/arte/apps/precomposed_20190509.png_285119621.png',
			}"
			:likes="true" 
			:comment="{
				name: 'Teresa Chavez',
				picture: 'https://randomuser.me/api/portraits/women/95.jpg',
			}"
			:answer="{
				name: 'Teresa Chavez',
				picture: 'https://randomuser.me/api/portraits/women/95.jpg',
			}"/>
	</div>
</template>
<script>
	import CardComp from '../components/CardComp.vue'
	export default {
		name: 'PostsView',
		components: {
			CardComp,
		},
	}
</script>
<style scoped>
	.posts {
		min-height: 60vh;
		max-width: 895px;
		margin: auto;
	}
	.single-spot {
		max-width: 550px;
	}
	.logo {
		max-width: 115px;
		padding: 0.2rem;
	}
</style>