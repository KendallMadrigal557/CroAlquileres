<template>
    <div>
      <h2>Crear Usuario</h2>
      <form @submit="crearUsuario">
        <div>
          <label for="nombre">Nombre:</label>
          <input type="text" id="nombre" v-model="nuevoUsuario.nombre" required>
        </div>
        <div>
          <label for="correo">Correo Electrónico:</label>
          <input type="email" id="correo" v-model="nuevoUsuario.correo" required>
        </div>
        <div>
          <label for="contrasena">Contraseña:</label>
          <input type="password" id="contrasena" v-model="nuevoUsuario.contrasena" required>
        </div>
        <button type="submit">Crear</button>
      </form>
    </div>
  </template>
  
  <script>
  //import createUserService from "services/users" 
  export default {
    data() {
      return {
        nuevoUsuario: {
          nombre: '',
          correo: '',
          contrasena: ''
        }
      };
    },
    methods: {
      crearUsuario() {
        // Aquí puedes agregar la lógica para enviar los datos del nuevo usuario al servidor
        // por ejemplo, utilizando una API o una solicitud HTTP
        console.log('Nuevo usuario:', this.nuevoUsuario);
        
        // Luego puedes restablecer el formulario
        this.nuevoUsuario = {
          nombre: '',
          correo: '',
          contrasena: ''
        };

        // createUserService(contrasena, correo, nombre) {
            

       // }


      }
    }
  };
  </script>
  