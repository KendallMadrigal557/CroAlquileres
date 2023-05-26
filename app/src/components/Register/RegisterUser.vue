<template>
    <div class="main-container">
        <form @submit="registerUser">
            <label for="name" class="form-label">Nombre:</label>
            <input v-model="name" type="text" placeholder="Joe Doe" required>
            <label for="email" class="form-label">Correo electrónico:</label>
            <input v-model="email" type="email" placeholder="correo@example.com" required>
            <label for="password" class="form-label">Contraseña:</label>
            <input v-model="password" type="password" placeholder="8 caracteres requeridos" required>
            <label for="confirm_password" class="form-label">Confirmar contraseña:</label>
            <input v-model="confirm_password" type="password" placeholder="8 caracteres requeridos" required>
            <button type="submit">Registrarse</button>
        </form>
    </div>
</template>
  
<script>
import UserService from '@/services/user.service';

export default {
    name: 'RegisterUser',
    data() {
        return {
            name: '',
            email: '',
            password: '',
            confirm_password: ''
        };
    },
    methods: {
        async registerUser(event) {
            event.preventDefault();

            // Validar el nombre
            const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/;
            if (!nameRegex.test(this.name)) {
                console.error('Error: El nombre solo puede contener letras y espacios.');
                return;
            }

            // Validar que la contraseña y la confirmación sean iguales
            if (this.password !== this.confirm_password) {
                console.error('Error: Las contraseñas no coinciden.');
                return;
            }

            try {
                const userService = new UserService();
                const newUser = {
                    name: this.name,
                    email: this.email,
                    password: this.password
                };
                const createdUser = await userService.createUser(newUser);
                console.error('User registered:', createdUser);

            } catch (error) {
                console.error('Error registering user:', error);
            }
        }
    }
};
</script>

<style scoped>
.main-container {
    position: relative;
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


form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

input {
    margin-bottom: 10px;
    padding: 5px;
    width: 200px;
}

button {
    padding: 8px 20px;
    background-color: #4caf50;
    color: white;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}

button:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
}
</style>
