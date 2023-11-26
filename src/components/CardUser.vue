<template>
    <div class="profile">
		<div class="user-info">
		<div class="card">
			<div class="row">
			<div class="col-xs-12 col-md-10 offset-md-1">
				<img :src="imagen" class="user-img" />
				<h4>{{ nombre }}</h4>
				<p>{{ bio }}</p>


				<div class="container">
					<div  class="pad">
						<h5 class="">Seguidores {{ contador }}</h5>
					</div>
                    
					<div class="pad">
						<router-link
							class="btn btn-sm btn-outline-secondary action-btn"
							to="/friends">
							<i class="ion-gear-a"></i> See Followers
						</router-link>
					</div>

					<div v-if="!isCurrentUser()" class="pad">
                        <span @click="increment"  v-if="!follow" class="btn btn-sm btn-outline-secondary action-btn material-icons-round"> person_add </span>
						<span @click="decrement" v-else class="btn btn-sm btn-outline-secondary action-btn material-icons-round"> person_remove </span>
					</div>

					<div v-if="isCurrentUser()" class="pad">
						<router-link
							class="btn btn-sm btn-outline-secondary action-btn"
							to="/settings">
							<i class="ion-gear-a"></i> Configuracion de Privacidad
						</router-link>
					</div>

					<div v-if="isCurrentUser()" class="pad">
						<router-link
							class="btn btn-sm btn-outline-secondary action-btn"
							to="/settings">
							<i class="ion-gear-a"></i> Editar Perfil
						</router-link>
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
        props: {'nombre':String, 'bio':String, 'imagen':String,'user':String},
        data() {
			return {
				contador: 0
			}
		},
		methods:{
			isCurrentUser() {
				if (this.user=='teresa') {
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

	.container{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		justify-content: center;
	}

	.pad{
		padding: 1rem;
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