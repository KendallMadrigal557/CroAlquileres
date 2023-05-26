import { createRouter, createWebHistory } from 'vue-router';

import LoginPageVue from '@/pages/Login/LoginPage.vue';

import createDepartment from '@/pages/Department/CreateDepartment.vue'
import CardDepartment from '@/pages/Department/DepartmentPage.vue'
import frontPage from "@/pages/frontPage.vue"

import RegisterUser from "@/pages/Register/RegisterUser.vue"


const routes = [
  { path: '/', component: frontPage },
  { path: '/login', component: LoginPageVue },
  { path: '/department', component: CardDepartment },
  { path: '/register', component: RegisterUser},
  { path: '/register-department', component: createDepartment},
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;


