<template>
    <div class="chat row">
        
        
            <div v-if="mostrar" class="container">
                <div v-for="mensaje in conversacion" v-bind:key="mensaje.txt" class="chatbox">

                {{ mensaje }}
                <br>
                </div>
                
                <div class="d-flex">
                    <input type="text" placeholder="Escribe un mensaje" v-model="mensaje" >
                    <button v-on:click="enviar()"><i class="material-icons-round">send</i></button>
                </div>
            
                   
            </div> 
        <div>
            <button  v-on:click="Mostrar" class="click material-icons-round">chat</button> 
        </div>
        
    </div>
    

</template>

<script>
    
    export default {
        name: 'ChatComp',
        data(){
            return{
                mensaje:null,
                conversacion:['You: Hola','Aurora: Hola, Como estas'],
                mostrar:null
            }
        },
        methods:{
          enviar(){
            this.conversacion.push('You: '+this.mensaje)
          },
          Mostrar(){
            if (this.mostrar) {
					this.mostrar = false;
				} else {
					this.mostrar = true;
				}
          }

        }
    }

    
</script>
    

<style scoped>

    .container {
        display: table;
        background-color: var(--color-nav);
        position: absolute;
        bottom: 0px;
		justify-content: space-between;
		justify-content: center;
        align-items: center;
        border-radius: 10px;
        width: 200px;
        color: var(--color-font);
        box-shadow: 0px 12px 7px rgba(0, 0, 0, 0.1);
        
    }

    .chat{
        position: fixed;
        bottom: 20px;
        right: 60px;
        height: 300px;
        width: 280px;
        transition: 300ms ease;

    }
    input{
        width: 200px;
    }
    .click{
        bottom: 5px;
        position:absolute;
        right:-30px;
        font-size: 50px;
        color:var(--color-font)
    }
    .chatbox{
        text-align: left;
    }
    

</style>
