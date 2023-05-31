<template>
    <div class="container">
        <div class="form-container">
            <form @submit="registerUser" class="register-form">
                <label for="name" class="input-label">Nombre:</label>
                <input v-model="name" type="text" placeholder="Joe Doe" required>
                <label for="email" class="input-label">Correo electrónico:</label>
                <input v-model="email" type="email" placeholder="correo@example.com" required>
                <label for="password" class="input-label">Contraseña:</label>
                <input v-model="password" type="password" placeholder="8 caracteres requeridos" required pattern=".{8,}">
                <label for="confirm_password" class="input-label">Confirmar contraseña:</label>
                <input v-model="confirm_password" type="password" placeholder="8 caracteres requeridos" required
                    pattern=".{8,}">
                <button type="submit" class="submit-button">Registrarse</button>
            </form>
        </div>
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

            const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/;
            if (!nameRegex.test(this.name)) {
                alert('Error: El nombre solo puede contener letras y espacios.');
                window.location.reload()
                return;
            }

            if (this.password !== this.confirm_password) {
                alert('Error: Las contraseñas no coinciden.');
                window.location.reload()
                return;
            }

            try {
                const userService = new UserService();

                const emailLowerCase = this.email.toLowerCase();

                const users = await userService.getUsers();
                const existingUser = users.find(user => user.email === emailLowerCase);
                if (existingUser) {
                    alert('Error: El correo electrónico ya está registrado.');
                    window.location.reload()
                    return;
                }

                const newUser = {
                    name: this.name,
                    email: emailLowerCase,
                    password: this.password
                };
                const createdUser = await userService.createUser(newUser);
                console.error('User registered:', createdUser);
                alert('Se registró correctamente.');
                window.location.reload()

            } catch (error) {
                console.error('Error registering user:', error);
                alert('Error: No se logró registrar. Por favor, revise sus datos.');
                window.location.reload()
            }
        }
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
    border-radius: 20px;
    background-color: #fff;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.75);
}

.input-label {
    font-weight: bold;
    margin-bottom: 8px;
    display: block;
}

input[type="text"],
input[type="password"],
input[type="email"],
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
    background: rgb(80, 106, 131);
    background: linear-gradient(90deg, rgba(80, 106, 131, 1) 0%, rgba(99, 131, 80, 1) 50%, rgba(80, 106, 131, 1) 100%);
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
    background: rgb(80, 106, 131);
    background: linear-gradient(90deg, rgba(80, 106, 131, 1) 0%, rgba(99, 131, 80, 1) 50%, rgba(80, 106, 131, 1) 100%);
}

input[type="file"] {
    display: none;
}

.file-input-container {
    position: relative;
}

.file-input-container input[type="file"] {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
}

.file-input-label {
    background-color: rgb(247, 243, 243);
    border-radius: 10px;
    padding: 16px 10px;
    text-align: center;
    cursor: pointer;
}

.file-input-label:hover {
    background-color: rgb(230, 230, 230);
}
</style>
