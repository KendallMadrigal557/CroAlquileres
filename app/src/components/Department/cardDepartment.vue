<template>
  <li class="cards_item" v-for="dept in departments" :key="dept._id">
      <div class="card">
          <div class="card_image">
              <img :src="getImageUrl(dept.image)" class="department_image" />
          </div>
          <div class="card_content">
              <h2 class="card_title">{{ dept.place }}</h2>
              <p class="card_text">{{ dept.location }}</p>
              <router-link :to="`/details-department/${dept._id}`" class="register-department-button button card_btn">
                  <div class="button card_btn">
                      <span class="button-text">Ver detalles</span>
                  </div>
              </router-link>
          </div>
      </div>
  </li>
</template>

<script>
import departmentService from '../../services/department.service';
import { urlServerUploads } from '@/config/config';
export default {
  name: 'CardDepartment',
  data() {
      return {
          departments: []
      };
  },
  mounted() {
      this.fetchDepartmentData();
  },
  methods: {
      async fetchDepartmentData() {
          try {
              const service = new departmentService();
              this.departments = await service.getDepartments();
          } catch (error) {
              console.error('Error al obtener los datos de los departamentos:', error);
          }
      },
      getImageUrl(imageName) {
          return `${urlServerUploads}/uploads/${imageName}`;
      }
  }
};
</script>



<style scoped>
@import url('https://fonts.googleapis.com/css?family=Quicksand:400,700');

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  background-color: #ecf9ff;
}

body {
  color: #272727;
  font-family: 'Quicksand', serif;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0;
  padding: 1rem;
}


h1 {
  font-size: 24px;
  font-weight: 400;
  text-align: center;
}

img {
  height: auto;
  max-width: 100%;
  vertical-align: middle;
}

.department_image {
  width: 450px;
  height: 250px;
  object-fit: cover;
}

.register-department-button {
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
}

.register-department-button .button {
  color: #ffffff;
  padding: 0.8rem;
  font-size: 14px;
  text-transform: uppercase;
  border-radius: 4px;
  font-weight: 400;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: transparent;
}

.register-department-button .button:hover {
  background-color: rgba(255, 255, 255, 0.25);
}

.register-department-button .button-text {
  color: #ffffff;
  text-decoration: none;
}

.cards_item {
  display: flex;
  padding: 1rem;
}

@media (min-width: 40rem) {
  .cards_item {
    width: 50%;
  }
}

@media (min-width: 56rem) {
  .cards_item {
    width: 33.3333%;
  }
}

.card {
  background-color: white;
  border-radius: 0.95rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.card_content {
  padding: 1rem;
  background: rgb(80, 106, 131);
  background: linear-gradient(90deg, rgba(80, 106, 131, 1) 0%, rgba(99, 131, 80, 1) 50%, rgba(80, 106, 131, 1) 100%);
}

.card_title {
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin: 0px;
}

.card_text {
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;
  font-weight: 400;
}
</style>