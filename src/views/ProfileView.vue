<template>
	<div class="profile">

		<CardUser
		:nombre="users[user].name"
		:bio="users[user].bio"
		:imagen="users[user].picture"
		:user="user"
		/>
		
		<div v-if="users[user].user===0">
			<TextEditor></TextEditor>
		</div>
	
		
		<CardComp
				class="mt-2 mx-auto single-spot"
				picture="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
				parrafo="Hola esta es mi primera publicacion"
				:header="{
					name: users[user].name,
					picture: users[user].picture,
					user:users[user].user
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
		props:{'user': Number},
		components: {
			CardComp,
			CardUser,
			TextEditor
		},
		data() {
			return {
				users:[{
                    name:"Teresa Chavez",
                    picture:"https://randomuser.me/api/portraits/women/95.jpg",
					bio:"Apasionada por la programacion y el mundo de los videojuegos",
					user:0
                    },
                    {
                    name:"Aurora Alcazar",
                    picture:"https://randomuser.me/api/portraits/women/85.jpg",
					bio:"Arriba Taylor Swift",
					user:1
                    },
                    {
                    name:"Aida Magana",
                    picture:"https://randomuser.me/api/portraits/women/80.jpg",
					bio:"Inserte frase matadora",
					user:2
                    }
                ]
                
                    
			}
		},
	}

	
	
</script>
