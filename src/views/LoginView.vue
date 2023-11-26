<template>
	<div class="home">
		<div class="col ">
			<div class="col">
				<div class="">
					<img alt="TechGirls" src="../assets/img/techgirls2.png" />

				</div>
			</div>
			<div class="col">
				<card-comp :btns="btnArray" class="mx-auto card-comp">
	
						<h4>Iniciar Sesion</h4>
						<form>
							<div class="mb-3 mt-2">
								<input
									type="email"
									class="form-control"
									v-model="email"
									placeholder="Ingresa tu email" required/>
							</div>
							<div class="mb-3 mt-2">
								<input
									type="password"
									class="form-control"
									v-model="password"
									placeholder="Contraseña" required/>
							</div>
						
							<button v-on:click="Login" type="submit" class="btn btn-primary">Iniciar Sesion</button>
							<button v-on:click="Mostrar2" class="btn">Recuperar Contrasena</button>
						</form>

					<template v-slot:footer>
						<hr />
						<button   @click="Mostrar" class="btn btn-success">Registrate</button>
					</template>
				</card-comp>
				<card-comp v-if="mostrar" :btns="btnArray" class="mx-auto card-comp">
					
						<h4>Registro</h4>
						<form id="contacto-form"  @submit="checkForm">
							<div class="mb-3 mt-2">
								<input
									type="text"
									class="form-control"
									:model-value="nombre"
									placeholder="Nombre(s)" />
							</div>
							<div class="mb-3 mt-2">
								<input
									type="text"
									class="form-control"
									:model-value="apellido"
									placeholder="Apellido(s)" />
							</div>
							<div class="mb-3 mt-2">
								<input
									type="email"
									class="form-control"
									:model-value="correo"
									placeholder="Correo electronico"/>
							</div>
							<div class="mb-3 mt-2">
								<input
									type="password"
									class="form-control"
									:model-value="contrasena"
									placeholder="Escribe tu contrasena" />
							</div>
							<div class="mb-3 mt-2">
								<input
									type="password"
									class="form-control"
									:model-value="contrasena2"
									placeholder="Repite tu contrasena" />
							</div>
							<div class="mb-3 mt-2">
								<input
									type="date"
									class="form-control"
									:model-value="fecha"
									placeholder="Fecha de nacimiento" />
							</div>
							<button  type="submit" class="btn btn-success">Registrate</button>
						</form>
				

				</card-comp>
				<div  class="">
					<form v-if="mostrar2" @submit="Recuperar">
					<div class="mb-3 mt-2">
						<input
								type="email"
								class="form-control"
								v-model="correoRecuperacion"
								placeholder="Correo de Recuperacion" />
					</div>
					<button  type="submit" class="btn btn-success">Correo de Recuperacion</button>
				</form>
				</div>
			
			</div>
		</div>
	</div>
</template>

<script>
	// @ is an alias to /src
	import CardComp from '../components/CardComp.vue'


	export default {
		name: 'LoginView',
		components: {
			CardComp,
		},
		data() {
			return {
				form: {
					nombre: null,
					apellido: null,
					correo: null,
					contrasena: null,
					contrasena2: null,
					fecha:null,
					email:null,
					password:null,
					correoRecuperacion:null
				},
				errors: [],
				mostrar: false,
				mostrar2:false,
			}
		},
		methods: {
			checkForm: function (e) {
				this.errors = [];

				if (!this.nombre) {
					this.errors.push("El nombre es obligatorio.");
				}
				if (!this.apellido) {
					this.errors.push('El apellido es obligatorio.');
				} if (!this.correo) {
					this.errors.push('El correo electrónico debe ser válido.');
				} if (!this.contrasena) {
					this.errors.push('La contrasena debe ser válido.');
				} if (!this.contrasena2) {
					this.errors.push('Repita la contrasena');
				}
				if (!this.fecha) {
					this.errors.push('Ingresa fecha de nacimiento');
				}
				if (!this.errors.length) {
					alert('Favor de corregir lo siguiente:'+this.errors);
				}else{
					alert('Registro completado con exito, favor de iniciar sesion');
					this.mostrar=false;
				
					this.LimpiarFormulario();
					
					
				}
				e.preventDefault();
			},
			Mostrar: function(){
				if (this.mostrar) {
					this.mostrar = false;
				} else {
					this.mostrar = true;
				}
			},
			Mostrar2: function(){
				if (this.mostrar2) {
					this.mostrar2 = false;
				} else {
					this.mostrar2 = true;
				}
			},
			Login(){
				console.log(this.email);
				if (!this.email  || !this.password ) {
					this.$router.push('/')
				} else {
					alert('Completa los campos correctamente');
				}
				
			},
			Recuperar(){
				if (!this.correoRecuperacion) {
					alert('Llenar el campo');
				}else{
					alert('Se ha enviado un link de recuperacion ');
					this.mostrar=false;
				
					this.LimpiarFormulario();
					
				}
			},
			LimpiarFormulario: function(){
				this.nombre= '';
				this.apellido= '';
				this.correo= '';
				this.contrasena= '';
				this.contrasena2= '';
				this.fecha= '';
			}
		}
	}
</script>

<script setup>

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
		max-width: 600px;
		margin: auto;
		font-size: 1.8rem;
	}
	.home {
		max-width: 895px;
		min-height: 60vh;
		max-width: 895px;
		align-items: center;
		
	}
	.col{
		align-items: center;
	}
	.img-cont {
		display: flex;
		flex-direction: column;
	}

	img {
		max-width: 600px;
		
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

	.btn:hover{
		background-color: var(--color-font);
		border:none;
	}

	
	@media (min-width: 992px) {
		.home {
			margin: 4em auto;
		}
		img {
			margin: 0;
			
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