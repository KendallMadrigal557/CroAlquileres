<template>
  <AppLogo/>
  <NavBar/>

</template>

<script>
import NavBar from "./components/navbar.vue"
import AppLogo from './components/logo.vue'

export default {
  name: 'App',
  components: {
    NavBar, 
    AppLogo
  }
}
</script>
<style>

</style>
