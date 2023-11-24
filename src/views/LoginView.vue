<template>
	<div class="home">
		<div class="row mx-0">
			<div class="col-lg-6">
				<div class="img-cont">
					<img alt="Vue logo" src="../assets/img/wordmark.svg" />
					<h2 class="text-center text-lg-start">
						Comunicate e informate sobre las mujeres en el mundo de la tecnologia
					</h2>
				</div>
			</div>
			<div class="col-lg-6">
				<card-comp :btns="btnArray" class="mx-auto card-comp">
					<template #default>
						<form>
							<div class="mb-3 mt-2">
								<input
									type="email"
									class="form-control"
									placeholder="Ingresa tu email" />
							</div>
							<div class="mb-3 mt-2">
								<input
									type="password"
									class="form-control"
									placeholder="Contraseña" />
							</div>
						</form>
							
						<div >
							<button class="btn btn-primary">Iniciar Sesion</button>
					
						</div>
						<div>
							<button class="btn">Recuperar Contraseña</button>
					
						</div>
					
					</template>
					<template v-slot:footer>
						<hr />
						<button class="btn btn-success">Registrate</button>
						
					</template>
				</card-comp>
				<card-comp :btns="btnArray" class="mx-auto card-comp">
					<template #default>
						<h4>Registro</h4>
						<form>
							<div class="mb-3 mt-2">
								<input
									type="email"
									class="form-control"
									placeholder="Ingresa tu email" />
							</div>
							<div class="mb-3 mt-2">
								<input
									type="password"
									class="form-control"
									placeholder="Escribe tu contrasena" required/>
							</div>
							<button class="btn btn-success">Registrate</button>
						</form>
					</template>

				</card-comp>

			</div>
		</div>
	</div>
</template>

<script>
	// @ is an alias to /src
	import CardComp from '../components/CardComp.vue'

	export default {
		name: 'HomeView',
		components: {
			CardComp,
		},

	}
</script>

<style scoped>
	.btn-success{
		background-color: #860A35;
		border: none;
	}


	.btn-primary,.btn-success{
		background-color: #860A35;
		border:none;
	}
	h2 {
		max-width: 470px;
		margin: auto;
		font-size: 1.8rem;
	}
	.home {
		max-width: 895px;
		
	}
	.img-cont {
		display: flex;
		flex-direction: column;
	}

	img {
		max-width: 315px;
		margin: 1em auto 0 auto;
	}

	.card-comp {
		max-width: 398px;
	
	}

	button{
		width: 100%;
	}
	.btn-success {
		margin: auto;
		min-width: 195px;
		align-items: center;
	}

	@media (min-width: 992px) {
		.home {
			margin: 4em auto;
		}
		img {
			margin: 0;
			margin-top: 5.6em;
		}
		h2 {
			margin: 0;
			margin-top: -0.8em;
			margin-left: 0.8em;
		}
		.card-comp {
			margin-top: 3rem;
		}
	}
</style>