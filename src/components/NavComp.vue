<template>
	
	<nav class="navbar d-flex">
		<div class="container justify-content-evenly">
			<img alt="techgirls" src="../assets/img/techgirls2.png" class="logo" />
			<div class="d-flex">
			
					<input
					type="text"
					class="form-control"
					v-model="busqueda"
					placeholder="Buscar Usuario" required/>
					<button @click="Search" class="search material-icons-round"  >search</button>
                    
					
			</div>
			<router-link
				to="/"
				class="nav-link"
				:class="{ active: activePath.home }"
				aria-current="page">
				<span class="material-icons-round"> home </span>
			</router-link>


			<router-link
				to="/profile/0"
				class="nav-link"
				:class="{ active: activePath.profile }">
				<span class="material-icons-round"> face </span>
			</router-link>

			<router-link
				to="/chat"
				class="nav-link"
				:class="{ active: activePath.chat }">
				<span class="material-icons-round"> chat </span>
			</router-link>

			<router-link
				to="/login"
				class="nav-link"
				:class="{ active: activePath.login }">
				<span class="material-icons-round"> login </span>
			</router-link>
		</div>
	</nav>
</template>

<script>
	export default {
		name: 'NavComp',
		data(){
			return{
				busqueda:null,
				
			}
		},
		methods: {
			checkActive() {
				console.log(this.$route.path)
			},
			Search(){
				if(!this.busqueda==''){
					this.$router.push({name: 'search', params: { texto: this.busqueda }})
					console.log(this.busqueda)
				}
				
			}
		},
		created() {
			this.checkActive()
		},
		computed: {
			activePath() {
				if (this.$route.path === '/') {
					return {
						home: true,
						profile: false,
						chat: false,
						login: false
					}
				} else if (this.$route.path === '/profile/0') {
					return {
						home: false,
						profile: true,
						chat: false,
						login: false
					}
				}  else if (this.$route.path === '/chat') {
					return {
						home: false,
						profile: false,
						chat: true,
						login: false
					}
				} else if (this.$route.path === '/login') {
					return {
						home: false,
						profile: false,
						chat: false,
						login: true
					}
				}
				else {
					return {
						home: false,
						profile: false,
						chat: false,
						login: false
					}
				}
			},
		},
	}
</script>

<style scoped>
	.navbar{
		background-color: var(--color-nav);
		z-index: 1;
		position:fixed;
		top: 0;
		width: 100%;
	}

	.logo{
		height: 50px;
	}

	.material-icons-round {
		color: var(--color-font);
		font-size: 1.4em;
		background-color: rgba(218, 218, 218, 0.158);
		padding: 0.3em;
		border-radius: 50%;
		margin: 0.1em;
	}
	.active .material-icons-round {
		color: white;
		background-color: rgba(133, 128, 128, 0.158);
		border: 1px solid rgba(248, 244, 244, 0.342);
	}

	input,button{
		max-height: 50px;
		align-items: center;
	}
	.search:hover{
		color: white;
	}
</style>