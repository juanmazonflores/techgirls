<template>
	
	<nav class="navbar d-flex">
		<div class="container justify-content-evenly">
			<img alt="techgirls" src="../assets/img/techgirls2.png" class="logo" />
			<div >
				<form class="d-flex">
					<input
					type="text"
					class="form-control"
					
					placeholder="Buscar Usuario" required/>
					<button v-on:click="Search" type="submit" class="search material-icons-round">search</button>
				</form>
				
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
		methods: {
			checkActive() {
				console.log(this.$route.path)
			},
			Search(){
				this.$router.push('/search')
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
						login: false
					}
				} else if (this.$route.path === '/profile') {
					return {
						home: false,
						profile: true,
						login: false
					}
				}  else if (this.$route.path === '/login') {
					return {
						home: false,
						profile: false,
						login: true
					}
				}
				else {
					return {
						home: false,
						profile: false,
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