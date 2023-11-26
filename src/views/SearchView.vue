<template>

	<CardList titulo="Resultados de Busqueda"></CardList>
</template>

<script>
	import CardList from '../components/CardList.vue'
	
	export default {
		name: 'SearchView',
		props:{
			titulo:null,
			busqueda:null
        },

        
		components: {
			CardList,
		},methods:{
			imprimir:function(){
				console.log(this.busqueda)
			}
		}
	}

	
	
</script>

<style scoped>

</style>