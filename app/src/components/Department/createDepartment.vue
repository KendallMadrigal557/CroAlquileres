<template>
    <div class="container">
        <div class="form-container">
            <form class="form" @submit.prevent="handleSubmit">
                <div class="form-group">
                    <label for="place" class="input-label">Nombre del lugar:</label>
                    <input type="text" id="place" v-model="department.place" required>
                </div>
                <div class="form-group">
                    <label for="price" class="input-label">Precio por mes: </label>
                    <input type="number" id="price" v-model="department.price" required>
                </div>
                <div class="form-group">
                    <label for="rooms" class="input-label">Habitaciones:</label>
                    <input type="number" id="rooms" v-model="department.rooms" required>
                </div>
                <div class="form-group">
                    <label for="location" class="input-label">Localización:</label>
                    <input type="text" id="location" v-model="department.location" required>
                </div>
                <div class="form-group">
                    <label for="features" class="input-label">Características:</label>
                    <textarea id="features" v-model="department.features" required></textarea>
                </div>
                <div class="form-group">
                    <label for="status" class="input-label">Estado:</label>
                    <select id="status" v-model="department.status" required>
                        <option value="true">Disponible</option>
                        <option value="false">Ocupado</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="description" class="input-label">Descripción:</label>
                    <textarea id="description" v-model="department.description" required></textarea>
                </div>
                <div class="form-group">
                    <label for="services" class="input-label">Servicios:</label>
                    <textarea id="services" v-model="department.services" required></textarea>
                </div>
                <div class="form-group">
                    <label for="phone" class="input-label">Teléfono:</label>
                    <input type="text" id="phone" v-model="department.phone" required>
                </div>
                <div class="form-group">
                    <label for="image" class="input-label">Imagen del lugar:</label>
                    <div class="file-input-container">
                        <input type="file" id="image" @change="handleImageChange" accept="image/jpeg, image/png, image/jpg" required>
                        <div class="file-input-label">Seleccionar archivo</div>
                    </div>
                </div>
                <button class="submit-button" type="submit">Registrar departamento</button>
            </form>
            <div v-if="error" class="error">{{ error }}</div>
        </div>
    </div>
</template>
  
<script>
import departmentService from '@/services/department.service';

export default {
    name: 'createDepartment',
    data() {
        return {
            error:'',
            department: {
                place: '',
                price: 0,
                rooms: 0,
                location: '',
                features: '',
                status: true,
                description: '',
                services: '',
                phone: 0,
                image: null
            }
        };
    },
    methods: {
        async handleSubmit() {
            try {
                const DeparmentService = new departmentService();
                const departmentData = { ...this.department };
                const imageFile = this.department.image;
                delete departmentData.image;
                if (departmentData.price <= 0 || departmentData.rooms <= 0){
                    this.error = `El precio y las habitaciones deben ser mayores a cero`
                    return;
                }

                const response = await DeparmentService.createDepartment(departmentData, imageFile);
                console.log('Department created:', response);
                alert("Se logró registrar correctamente su departamento.")
                window.location.reload()
            } catch (error) {
                console.error('Error creating department:', error);
                alert("No se logró registrar su departamento, Por favor revise sus datos.")
                window.location.reload()
            }
        },
        handleImageChange(event) {
            const file = event.target.files[0];
            this.department.image = file;
        }
    }
};
</script>
<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh; 
    padding-top: 50px;
    padding-bottom: 30px;
}

.form-container {
    width: 400px;
    padding: 30px;
    margin-top: 50px; 
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
input[type="number"],
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

.error {
    margin-top: 20px;
    color: red;
}
</style>