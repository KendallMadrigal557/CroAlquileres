import { createRouter, createWebHistory } from 'vue-router';

import LoginPageVue from '@/pages/Login/LoginPage.vue';

import CardDepartment from '@/pages/Department/DepartmentPage.vue'
import frontPage from "@/pages/frontPage.vue"
import UserPage from "@/pages/User/UserPage.vue"
import DetailUser from "@/components/User/DetailUser.vue"
import CreateUserVue from '@/components/User/CreateUser.vue';

const routes = [
  { path: '/', component: frontPage },
  { path: '/login', component: LoginPageVue },
  { path: '/department', component: CardDepartment },
  { path: '/user', component: UserPage },
  { path: '/detail-user', component: DetailUser },
  { path: '/create-user', component: CreateUserVue },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;


