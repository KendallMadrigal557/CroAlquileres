import { createRouter, createWebHistory } from 'vue-router';

import LoginPageVue from '@/pages/Login/LoginPage.vue';

import CardDepartment from '@/pages/Department/DepartmentPage.vue'
import frontPage from "@/pages/frontPage.vue"

const routes = [
  { path: '/', component: frontPage },
  { path: '/login', component: LoginPageVue },
  { path: '/department', component: CardDepartment },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;


