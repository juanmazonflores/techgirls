<template>
	<div class="posts">
		
		<div class="card2">
        <h5>Crea un nuevo post</h5>
        <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
		<button v-on:click="Mostrar" class="btn btn-primary" >Publicar</button>
      </div>
		
		<CardComp v-if="publicar"
			class="mt-2 mx-auto single-spot"
			picture="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
			:parrafo="editorData"
			:header="{
				name: 'Teresa Chavez',
				picture: 'https://randomuser.me/api/portraits/women/95.jpg',
				user:0
		}"/>
		<CardComp
			class="mt-2 mx-auto single-spot"
			picture="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
			parrafo="Hola esta es mi primera publicacion"
			:header="{
				name: 'Teresa Chavez',
				picture: 'https://randomuser.me/api/portraits/women/95.jpg',
				user:0
			}"
			
			:likes="true" 
			:comment="{
				name: 'Aurora Alcazar',
				picture: 'https://randomuser.me/api/portraits/women/85.jpg',
				text:'Hola Teresa, mi nombre es Aurora',
				user:1
			}"
			:answer="{
				name: 'Teresa Chavez',
				picture: 'https://randomuser.me/api/portraits/women/95.jpg',
				text:'Hola, te dare follow',
				user:0
			}"/>
			
		<CardComp
			class="mt-2 mx-auto single-spot"
			picture="https://www.hausmanmarketingletter.com/wp-content/uploads/2023/05/64063dbcad97bd421b437096_chatgpt.jpg"
			parrafo="Conoce a la nueva CEO de OpenAI: Mira Murati"
			:header="{
				name: 'Expansion.mx',
				picture: 'https://www.eleconomista.com.mx/__public/ac558515aae5b22f/images/social/logo_organization.png',
				user:0
			}"
			:likes="true" 
			:comment="{
				name: 'Aida Magana',
				picture: 'https://randomuser.me/api/portraits/women/80.jpg',
				text:'Excelente',
				user:2
			}"
			:answer="{
				name: 'Teresa Chavez',
				picture: 'https://randomuser.me/api/portraits/women/95.jpg',
				text:'Opino lo mismo',
				user:0
			}"/>
		<CardComp
			class="mt-2 mx-auto single-spot"
			picture="https://www.meganoticias.mx/uploads/noticias/sonora-presentan-plan-hidrico-para-los-proximos-30-anos-478409.jpeg"
			parrafo="Presentan plan hidrico para los proximos 30 años"
			:header="{
				name: 'El imparcial',
				picture: 'https://www.elimparcial.com/__export/1557412405886/sites/elimparcial/arte/apps/precomposed_20190509.png_285119621.png',
				user:0
			}"
			:likes="true" 
			:comment="{
				name: 'Aurora Alcazar',
				picture: 'https://randomuser.me/api/portraits/women/85.jpg',
				text:'Espero que funcione este plan',
				user:1
			}"
			:answer="{
				name: 'Aida Magana',
				picture: 'https://randomuser.me/api/portraits/women/80.jpg',
				text:'x2',
				user:2
			}"/>
	</div>
</template>
<script>
	import CardComp from '../components/CardComp.vue'
	import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
	export default {
		name: 'PostsView',
		components: {
			CardComp
		},
		data() {
          return {
				editor: ClassicEditor,
				editorData: null,
				editorConfig: {
					// The configuration of the editor.
					},
				publicar:false
           };
		},
		methods:{
			Mostrar: function(){
				if (this.publicar) {
					this.publicar = false;
				} else {
					this.publicar = true;
				}
			},
		}
	}
</script>
<style scoped>
	.posts {
		min-height: 60vh;
		max-width: 895px;
		margin: auto;
	}
	.single-spot {
		max-width: 550px;
	}
	.logo {
		max-width: 115px;
		padding: 0.2rem;
		
	}

	h4,h5{
		color: var(--color-font);
		text-decoration:none;
	}

	.card2 {
		border: none;
		box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
		text-align: center;
		background-color: var(--color-container);
		margin: 2rem;
		padding: 1rem;
	}
	.pad{
		margin-top: 100px;
	}

	.btn-primary{
		margin-top: 1rem;
		background-color: var(--color-font);
		border: none;
	}
	.btn-primary:hover{
		margin-top: 1rem;
		background-color: var(--color-nav);
		border: none;
		color:black
	}
</style>