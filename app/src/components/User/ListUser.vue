<template>
    <div>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Correo Electrónico</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cliente in clientes" :key="cliente.id">
            <td>{{ cliente.nombre }}</td>
            <td>{{ cliente.edad }}</td>
            <td>{{ cliente.correo }}</td>
            <td><router-link to="/detail-user" class="login-button">Detalles del usuario</router-link></td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        clientes: [
          { id: 1, nombre: 'Cliente 1', edad: 25, correo: 'cliente1@example.com' },
          { id: 2, nombre: 'Cliente 2', edad: 30, correo: 'cliente2@example.com' },
          { id: 3, nombre: 'Cliente 3', edad: 35, correo: 'cliente3@example.com' },
        ]
      };
    }
  };
  </script>
  