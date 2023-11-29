<template>

    <CardList :busqueda="users" titulo="Seguidores"></CardList>
</template>

<script>
    import CardList from '../components/CardList.vue'
    
    export default {
        name: 'ProfileView',
        components: {
            CardList,
        },
        data() {
			return {
				users:[{
                    name:"Teresa Chavez",
                    picture:"https://randomuser.me/api/portraits/women/95.jpg",
                    user:0
                    },
                    {
                    name:"Aurora Alcazar",
                    picture:"https://randomuser.me/api/portraits/women/85.jpg",
                    user:1
                    },
                    {
                    name:"Aida Magana",
                    picture:"https://randomuser.me/api/portraits/women/80.jpg",
                    user:2
                    }
                ],
             
			}
		},
    }

    
</script>
    
