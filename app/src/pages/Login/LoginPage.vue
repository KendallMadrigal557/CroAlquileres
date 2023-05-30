<template>
  <NavBar></NavBar>
  <div class="container">
    <div class="form-container">
      <h2 class="input-label">Iniciar sesión</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="username" class="input-label">Username:</label>
          <input type="text" id="username" v-model="username" placeholder="correo@gmail.com" required>
        </div>
        <div class="form-group">
          <label for="password" class="input-label">Password:</label>
          <input type="password" id="password" v-model="password" placeholder="Contraseña" required>
        </div>
        <div class="form-group">
          <button type="submit" class="submit-button">Iniciar sesión</button>
        </div>
      </form>
      <div v-if="error" class="error">{{ error }}</div>
    </div>
  </div>
  <footerComponent></footerComponent>
</template>

<script>
import NavBar from '../navbar.vue'
import footerComponent from '../footer.vue'
export default {
  data() {
    return {
      username: '',
      password: '',
      error: ''
    };
  },
  methods: {
    login() {

      if (!this.username || !this.password) {
        this.error = 'Por favor, ingresa tu nombre de usuario y contraseña';
        return;
      }

    }
  },
  components: {
    NavBar,
    footerComponent
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding-top: 50px;
}

.form-container {
  width: 400px;
  padding: 30px;
  margin-top: 40px;
  border-radius: 30px;
  background-color: #fff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.75);
}

.input-label {
  font-weight: bold;
  margin-bottom: 8px;
  display: block;
}

input[type="text"],
input[type="number"],
input[type="password"],
textarea,
select {
  border: none;
  outline: none;
  width: 100%;
  padding: 16px 10px;
  background-color: rgb(247, 243, 243);
  border-radius: 10px;
  box-shadow: 12.5px 12.5px 10px rgba(0, 0, 0, 0.015), 100px 100px 80px rgba(0, 0, 0, 0.03);
  margin-bottom: 10px;
}

.submit-button {
  margin-top: 12px;
  padding: 16px 10px;
  background: rgb(80,106,131);
  background: linear-gradient(90deg, rgba(80,106,131,1) 0%, rgba(99,131,80,1) 50%, rgba(80,106,131,1) 100%);
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  outline: none;
  width: 100%;
  border-radius: 10px;
  cursor: pointer;
}

.submit-button:hover {  
  background: rgb(80,106,131);
  background: linear-gradient(90deg, rgba(80,106,131,1) 0%, rgba(99,131,80,1) 50%, rgba(80,106,131,1) 100%);
}

.error {
  color: red;
}
</style>
