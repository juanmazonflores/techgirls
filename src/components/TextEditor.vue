<template>
  <div class="editor">
      <div class="card">
        <h5>Crea un nuevo post</h5>
        <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
      </div>
      
  </div>
</template>

<script>
  import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

  export default {
      name: 'TextEditor',
      data() {
          return {
              editor: ClassicEditor,
              editorData: '<p></p>',
              editorConfig: {
                  // The configuration of the editor.
              }
          };
      }
  }
</script>
<style>
  h4,h5{
		color: #FFDFDF;
		text-decoration:none;
	}
  

</style>

