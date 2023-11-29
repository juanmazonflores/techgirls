<template>

	<CardList :busqueda="resultado" titulo="Resultados de Busqueda"></CardList>
</template>

<script>
	import CardList from '../components/CardList.vue'
	
	export default {
		name: 'SearchView',
		props:{
			titulo:null,
			'texto':String
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
                resultado:[]
             
			}
		},

        
		components: {
			CardList,
		},methods:{
			imprimir:function(){
				console.log(this.busqueda)
			},
            buscar(){
                this.users.forEach(user => {
                    if (user.name.includes(this.texto)) {
                        console.log("entre")
                        this.resultado.push(user)
                    }
                });
            }
        
		},
		mounted() {

this.buscar()
},
	}

	
	
</script>

<style scoped>

</style>