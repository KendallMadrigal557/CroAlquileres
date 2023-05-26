<template>
    <div>
        <h2>Create Department</h2>
        <form @submit.prevent="handleSubmit">
            <div>
                <label for="place">Lugar:</label>
                <input type="text" id="place" v-model="department.place" required>
            </div>
            <div>
                <label for="price">Precio:</label>
                <input type="number" id="price" v-model="department.price" required>
            </div>
            <div>
                <label for="rooms">Habitaciones:</label>
                <input type="number" id="rooms" v-model="department.rooms" required>
            </div>
            <div>
                <label for="location">Localización:</label>
                <input type="text" id="location" v-model="department.location" required>
            </div>
            <div>
                <label for="features">Características:</label>
                <textarea id="features" v-model="department.features" required></textarea>
            </div>
            <div>
                <label for="status">Estado:</label>
                <select id="status" v-model="department.status" required>
                    <option value="true">Available</option>
                    <option value="false">Unavailable</option>
                </select>
            </div>
            <div>
                <label for="description">Descripción:</label>
                <textarea id="description" v-model="department.description" required></textarea>
            </div>
            <div>
                <label for="services">Servicios:</label>
                <textarea id="services" v-model="department.services" required></textarea>
            </div>
            <div>
                <label for="image">Imagen del lugar:</label>
                <input type="file" id="image" @change="handleImageChange" accept="image/jpeg, image/png" required>
            </div>
            <button type="submit">Registrar lugar</button>
        </form>
    </div>
</template>
  
<script>
import departmentService from '@/services/department.service';

export default {
    name: 'createDepartment',
    data() {
        return {
            department: {
                place: '',
                price: 0,
                rooms: 0,
                location: '',
                features: '',
                status: true,
                description: '',
                services: '',
                image: null
            }
        };
    },
    methods: {
        async handleSubmit() {
            try {
                const departmentData = { ...this.department };
                const imageFile = this.department.image;
                delete departmentData.image;

                const response = await departmentService.createDepartment(departmentData, imageFile);
                console.log('Department created:', response);
                alert("Se logró registrar correctamente su departamento.")
            } catch (error) {
                console.error('Error creating department:', error);
                alert("No se logró registrar su departamento, Por favor revise sus datos.")
            }
        },
        handleImageChange(event) {
            const file = event.target.files[0];
            this.department.image = file;
        }
    }
};
</script>
  
<style>
/* Estilos CSS opcionales para el componente */
</style>
  