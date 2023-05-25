<template>
  <div class="main-container">
  <NavBar></NavBar>
  <div class="login-container">
    <h2 class="login-title">Inciar sesión</h2>
    <form @submit.prevent="login" class="login-form">
      <div class="form-group">
        <label for="username" class="form-label">Username:</label>
        <input type="text" id="username" v-model="username" class="form-input" placeholder="correo@gmail.com" required>
      </div>
      <div class="form-group">
        <label for="password" class="form-label">Password:</label>
        <input type="password" id="password" v-model="password" class="form-input" placeholder="Contraseña" required>
      </div>
      <div class="form-group">
        <button type="submit" class="login-button">Inciar sesión</button>
      </div>
    </form>
    <div v-if="error" class="error">{{ error }}</div>
  </div>
</div>
</template>

<script>
import NavBar from '../navbar.vue'
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

      // si en el server valida lo del login, aqui lo puede llamar y pasarle los datos
      //para eso se hace con services. Es otra carpeta que quedaria en 'src/services/login.services.js'
      // y asi con cada consulta al backend
    }
  },
  components: {
    NavBar
  }
};
</script>

<style scoped>

.main-container {
  position: relative;
}

.login-container {
  max-width: 400px;
  margin: 80px auto; 
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f5f5f5;
  position: absolute;
  top: 0; 
  left: 0; 
  right: 0; 
}

.login-title {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.login-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

.form-label {
  font-weight: bold;
  margin-bottom: 5px;
  color: #555;
}

.form-input {
  margin-left: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  box-sizing: border-box;
}

button {
  padding: 15px 25px;
  border: unset;
  border-radius: 15px;
  color: #233b73;
  z-index: 1;
  background: #f8f2ee;
  position: relative;
  font-weight: 1000;
  font-size: 17px;
  -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
  box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
  transition: all 250ms;
  overflow: hidden;
}

button::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0;
  border-radius: 15px;
  background-color: #212121;
  z-index: -1;
  -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
  box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
  transition: all 250ms
}

button:hover {
  color: #f2f2f7;
}

button:hover::before {
  width: 100%;
}

.error {
  color: red;
  margin-top: 10px;
}
</style>
