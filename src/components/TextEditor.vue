<template>
  <div class="editor">
      <div class="card">
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
      
  </div>
</template>

<script>
  import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
  import CardComp from '../components/CardComp.vue'

  export default {
      name: 'TextEditor',
      data() {
          return {
              editor: ClassicEditor,
              editorData: '<p></p>',
              editorConfig: {
                  // The configuration of the editor.
              },
              publicar:false
          };
      },
      components: {
        CardComp
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
<style>
  h4,h5{
		color: #FFDFDF;
		text-decoration:none;
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

