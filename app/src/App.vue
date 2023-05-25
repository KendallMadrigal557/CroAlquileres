<template>
  <AppLogo/>
  <NavBar/>
  <CardDepartment v-for="index in 10" :key="index" />

</template>

<script>
import NavBar from "./components/navbar.vue"
import AppLogo from './components/logo.vue'
import CardDepartment from './components/cardDepartment.vue'
export default {
  name: 'App',
  components: {
    NavBar, 
    AppLogo,
    CardDepartment
  }
}
</script>
<style>

</style>
