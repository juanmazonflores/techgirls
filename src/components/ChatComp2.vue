<template>
    <div id="app" class="app-container">
      <div class="contacts-container">
        <h4>Contactos</h4>
        <div v-for="(contact, index) in contacts" :key="index" @click="selectContact(contact)" class="contact">
          {{ contact.name }}
        </div>
      </div>
      <div v-if="selectedContact" class="chat-container">
        <div class="chat-header">{{ selectedContact.name }}</div>
        <div class="chat-messages">
          <div v-for="(message, index) in selectedContact.messages" :key="index" class="message" :class="{ 'my-message': message.from === 'me' }">
            <div class="message-content">{{ message.content }}</div>
          </div>
        </div>
        <div class="chat-input">
          <input v-model="newMessage" @keyup.enter="sendMessage" placeholder="Escribe...">
          <button @click="sendMessage"> Enviar </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        contacts: [
        { id: 1, name: 'Sofia Martinez', messages: [
          { content: 'Hola! Que tal?', from: 'other' },
          { content: 'Ando bien, gracias!', from: 'me' },
        ] },
        { id: 2, name: 'Carla Sanchez'},
        { id: 2, name: 'Alexa Carranza'},
        { id: 2, name: 'Paula Cordova'},
        { id: 2, name: 'Diana Morales'},
      ],
        selectedContact: null,
        newMessage: '',
      };
    },
    methods: {
      selectContact(contact) {
        this.selectedContact = contact;
      },
      sendMessage() {
  if (this.selectedContact && this.newMessage.trim() !== '') {
    this.selectedContact.messages.push({ content: this.newMessage, from: 'me' });
    this.newMessage = '';
  }
},



    },
  };
  </script>
  
  <style scoped>
  .app-container {
    display: flex;
    background-color: #FFDFDF;
    margin: 40px;
    padding: 30px;
  }
  
  .contacts-container {
    min-width: 300px;
    max-width: 400px;
    margin: 20px;
    color: #CE5A67;
  }

  .contacts-container h4 {
    font-weight: 600;
  }
  
  .contact {
    padding: 10px;
    border-bottom: 1px solid #CE5A67;
    cursor: pointer;
  }
  
  .chat-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
    background-color: #fff;
  }
  
  .chat-header {
    background-color: #CE5A67;
    color: #fff;
    padding: 10px;
    text-align: center;
  }
  
  .chat-messages {
    flex: 1;
    max-height: 300px;
    overflow-y: auto;
    padding: 10px;
  }
  
  .message {
    margin-bottom: 10px;
    padding: 8px;
    border-radius: 8px;
    text-align: left;
  }
  
  .my-message {
    background-color: #FFDFDF;
    color: #860A35;
    text-align: right;
  }
  
  .chat-input {
    display: flex;
    padding: 10px;
    align-items: flex-end;
  }
  
  .chat-input input {
    flex: 1;
    padding: 8px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .chat-input button {
    background-color: #CE5A67;
    color: #fff;
    padding: 8px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>