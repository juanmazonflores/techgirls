<template>
	<div class="profile">

		<CardUser
		nombre="Teresa Chavez"
		bio="Apasionada por la programacion y el mundo de los videojuegos"
		imagen='https://randomuser.me/api/portraits/women/95.jpg'
		user="teresa"
		/>
		
		<TextEditor></TextEditor>
		
		<CardComp
				class="mt-2 mx-auto single-spot"
				picture="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
				parrafo="Hola esta es mi primera publicacion"
				:header="{
					name: 'Teresa Chavez',
					picture: 'https://randomuser.me/api/portraits/women/95.jpg',
				}"
				
				:likes="true" 
				:comment="{
					name: 'Aurora Alcazar',
					picture: 'https://randomuser.me/api/portraits/women/85.jpg',
					text:'Hola Teresa, mi nombre es Aurora'
				}"
				:answer="{
					name: 'Teresa Chavez',
					picture: 'https://randomuser.me/api/portraits/women/95.jpg',
					text:'Hola, te dare follow'
				}"/>

	</div>
	
	
</template>

<script>
	import TextEditor from '../components/TextEditor.vue'
	import CardComp from '../components/CardComp.vue'
	import CardUser from '../components/CardUser.vue'
	export default {
		name: 'ProfileView',
		components: {
			CardComp,
			CardUser,
			TextEditor
		},
	}

	
	
</script>
