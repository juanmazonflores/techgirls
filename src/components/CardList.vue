<template>
    <div class="list">
        
        
        <div class="card">
            <h4>{{ titulo }}</h4>
            <div v-if="busqueda.length!=0">
        
                <div v-for="user in busqueda" :key="user.txt" class="user d-flex align-items-center gap-2 px-0">
                    <img
                        class="avatar-img"
                        :src="user.picture"
                        alt="Avatar"/>
                    <h4 class="card-header-title ">
                        <router-link style="text-decoration: none; color: inherit;"  :to="{ name: 'profile', params: { user: user.user } }">
                            {{ user.name }}
                        </router-link>
                    </h4>
                </div>
            </div>
            <div v-else>
                <h4>No se encontraron resultados</h4>
            </div>
        </div>
       
	</div>
</template>


<script>

export default {
		name: 'CardList',
        props: ['titulo','busqueda']
        
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

	.container{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		justify-content: center;
	}

    .list {

        max-width: 895px;
        margin: auto;
        margin-bottom: 0;
       
    }
    .user{
        padding: 1rem;
    }
    ul{
        text-decoration: none;
    }
    h4{
        color: var(--color-font);
		text-decoration:none;
	
    }

</style>

