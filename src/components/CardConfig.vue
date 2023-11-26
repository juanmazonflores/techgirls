<template>
    <div class="config">
        
        
        <div class="card">
            <h4>Configuracion de Privacidad</h4>
            <div v-for="config in configs" :key="config.txt" class="user d-flex align-items-center gap-2 px-0">
                <h5 class="card-header-title ">{{ config.name }}</h5>
                <select name="" id="">
                    <option value="yo">Solo yo</option>
                    <option value="amigos">Mis amigos</option>
                    <option value="amigosamigos">Amigos de amigos</option>
                    <option value="amigosamigos">Todos</option>
                </select>
            </div>
            <div class="user d-flex align-items-center gap-2 px-0">
                <label for="checbox">Permitir que me agreguen </label>
                <input id="checkbox" type="checkbox">
            </div>
            <button @click="guardar" class="btn btn-primary">Guardar cambios</button>
        </div>
       
	</div>
</template>


<script>

export default {
		name: 'CardList',
        data() {
			return {
				configs:[{
                    name:"Quien puede encontrar mi perfil ",
                    },
                    {
                    name:"Quien puede ver mis publicaciones",
                    },
                    {
                    name:"Quien puede ver mi informacion personal",
                    }
                ]
                
			}
		},
        methods: {
	
			guardar(){
				this.$router.push('/')
                alert('Cambios guardados correctamente');

			},
	
		}
	}

</script>

<style>
    .config{
        align-items: left;
        max-width: 895px;
            margin: auto;
            margin-bottom: 0;
    }

	.card {
		border: none;
		box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
		text-align: center;
		background-color: var(--color-container);
		margin: 2rem;
		padding: 1rem;
        
	}

	.container{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		justify-content: center;
	}

    .user{
        padding: 1rem;
    }
    ul{
        text-decoration: none;
    }
    h5{
        color: black;
    }
    h4{
        color: var(--color-font);
		text-decoration:none;
	
    }
    label{
       
		text-decoration:none;
        font-size: larger;
    }
    select{
        background-color: var(--color-container);
        color: var(--color-font);
        font-size: larger;
        border-color: var(--color-font);
    }
    .btn-primary{
		background-color: #860A35;
		border:none;
	}

    .btn-primary:hover{
		background-color: var(--color-font);
		border:none;
	}

    .config{
		margin-top: 50px;
	}
</style>

