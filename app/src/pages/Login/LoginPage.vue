<template>
  <NavBar></NavBar>
    <loginPage> </loginPage>
  <footerComponent></footerComponent>
</template>

<script>
import NavBar from '../navbar.vue'
import loginPage from '@/components/Login/loginPage.vue';
import footerComponent from '../footer.vue'

export default {
  components: {
    NavBar,
    footerComponent,
    loginPage
  }
};
</script>

<style></style>