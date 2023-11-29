<template>
    <div class="profile">
		<div class="user-info">
		<div class="card">
			<div class="row">
			<div class="col-xs-12 col-md-10 offset-md-1">
				<img :src="imagen" class="user-img" />

				<div class="col-xs-12">
					<h4 v-if="!editar">{{ nombre2 }}</h4>
					<div class="espacio" v-else>
						<label for="">Nombre: </label>
						<input v-model="nombre3"  id="nombre" type="text">
					</div>
					
					<p v-if="!editar">{{ bio2 }}</p>
					<div class="espacio" v-else>
						<label for="">Biografia: </label>
						<input v-model="bio3"  id="bio" type="text">
					</div>
					
				</div>
				


				<div class="container2">
					<div  class="pad2">
						<h5 class="">Seguidores {{ contador }}</h5>
					</div>
                    
					<div class="pad2">
						<router-link
							class="btn btn-sm btn-outline-secondary action-btn"
							to="/friends">
							<i class="ion-gear-a"></i> See Followers
						</router-link>
					</div>

					<div v-if="!isCurrentUser()" class="pad2">
                        <span @click="increment"  v-if="!follow" class="btn btn-sm btn-outline-secondary action-btn material-icons-round"> person_add </span>
						<span @click="decrement" v-else class="btn btn-sm btn-outline-secondary action-btn material-icons-round"> person_remove </span>
					</div>

					<div v-if="isCurrentUser()" class="pad2">
						<router-link
							class="btn btn-sm btn-outline-secondary action-btn"
							to="/settings">
							<i class="ion-gear-a"></i> Configuracion de Privacidad
						</router-link>
					</div>

					<div v-if="isCurrentUser()" class="pad2">
						<div v-if="!editar"
							class="btn btn-sm btn-outline-secondary action-btn"
							@click="edit()">
							<i class="ion-gear-a"></i> Editar Perfil
						</div>
						<div v-else
							class="btn btn-sm btn-outline-secondary action-btn pad2"
							@click="edit()">
							<i class="ion-gear-a"></i> Guardar
						</div>
					</div>

				</div>

			</div>
			</div>
		</div>
		</div>
	</div>
</template>

<script setup>
import { ref} from "vue";

const contador = ref(0);
let follow = ref(false)

const increment = () => {
    contador.value++;
    follow=true;
};

const decrement = () => {
    contador.value--;
    follow=false;
};
</script>


<script>

export default {
		name: 'CardUser',
        props: {'nombre':String, 'bio':String, 'imagen':String,'user':Number},
        data() {
			return {
				contador: 0,
				editar:false,
				nombre2: this.nombre,
				bio2:this.bio,
			}
		},
		methods:{
			isCurrentUser() {
				if (this.user==0) {
					return true;
				}
				return false;
			},
            increment () {
                this.contador++;
                this.follow=false
            },
            decrement () {
                this.contador--;
                this.follow=false
            },
			edit(){
				if (this.editar) {
					console.log(this.editar)
					this.editar=false
					console.log(this.nombre3)
					if(typeof this.nombre3==='undefined'){
						
						this.nombre2=this.nombre;
					}
					else{
						this.nombre2=this.nombre3;	
					}
					if (typeof this.bio3==='undefined') {
						this.bio2=this.bio;
					} else {
						this.bio2=this.bio3;
					}
						
				} else {
					this.editar=true
				}
				
			}

		}
	}

</script>

<style>

	.card {
		border: none;
		box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
		text-align: center;
		background-color: var(--color-container);
		margin: 2rem;
		padding: 1rem;
	}

	CardComp{
		width: 895px;
	}

	.container2{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		justify-content: center;
	}

	.pad2{
		padding: 1rem;
	}

	.espacio{
		margin-bottom: 1rem;
	}

	.profile {

		max-width: 895px;
		margin: auto;
		margin-bottom: 0;
	}
	.user-img{
		width: 175px;
		height: 175px;
		object-fit: cover;
		border-radius: 50%;
		border-color: white;
		border-width: 10rem;
		padding: 0.5rem;
	}
	.single-spot {
		max-width: 550px;
	}
	.logo {
		max-width: 115px;
		padding: 0.2rem;
	}
	h4,h5{
		color: var(--color-font);
		text-decoration:none;
	}
	input{
		border-color:var(--color-font);
		margin-left:1rem
	}


</style>

<style scoped>
	.btn{
		color: var(--color-font);
		border-color: var(--color-font);
	}

	.btn:hover{
		background-color:  var(--color-font);
		border-color: var(--color-font);
		color: var(--color-font-hover);
	}

</style>