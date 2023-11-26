<template>
    <div class="list">
        
        
        <div class="card">
            <h4>Resultados</h4>
            <div v-for="user in users" :key="user.txt" class="user d-flex align-items-center gap-2 px-0">
                <img
                    class="avatar-img"
                    :src="user.picture"
                    alt="Avatar"/>
                <h4 class="card-header-title ">
                    <router-link style="text-decoration: none; color: inherit;" to="/profile">
                        {{ user.name }}
                    </router-link>
                </h4>
            </div>
        </div>
       
	</div>
</template>


<script>

export default {
		name: 'CardList',
        props: ['titulo'],
        data() {
			return {
				users:[{
                    name:"Teresa Chavez",
                    picture:"https://randomuser.me/api/portraits/women/95.jpg"
                    },
                    {
                    name:"Aurora Alcazar",
                    picture:"https://randomuser.me/api/portraits/women/85.jpg"
                    },
                    {
                    name:"Aida Magana",
                    picture:"https://randomuser.me/api/portraits/women/80.jpg"
                    }
                ]
                
                    
			}
		},
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

