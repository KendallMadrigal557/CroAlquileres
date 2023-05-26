<template>
  <logo></logo>
  <div class="navbar-container">
    <div class="btn">
        <span class="fas fa-bars"></span>
    </div>
    <nav class="sidebar">
        <div class="text">Menu</div>
        <ul>
            <li class="active"><router-link to="/" class="main-button">Home</router-link></li>
            <li>
                <a href="#" class="feat-btn">Departamentos
                    <span class="fas fa-caret-down first"></span>
                </a>
                <ul class="feat-show">
                    <li><router-link to="/register-department" class="register-department-button">Registrar departamento</router-link></li>
                    <li><router-link to="/department" class="register-department-button">Departamentos en alquiler</router-link></li>
                </ul>
            </li>
          
            <li><router-link to="/register" class="register-button">Registrarse</router-link></li>
            <li><router-link to="/login" class="login-button">Login</router-link></li>
        </ul>
    </nav>
  </div>
</template>

<script>
import $ from 'jquery';
import logo from '@/components/logo.vue';


export default {
  name: 'NavBar',
  components: {
    logo
  },
  mounted() {
    //codigo copiado de ejemplos de internet
    $('.btn').click(function(){
      $(this).toggleClass("click");
      $('.sidebar').toggleClass("show");
    });
    $('.feat-btn').click(function(){
      $('nav ul .feat-show').toggleClass("show");
      $('nav ul .first').toggleClass("rotate");
    });
    $('.serv-btn').click(function(){
      $('nav ul .serv-show').toggleClass("show1");
      $('nav ul .second').toggleClass("rotate");
    });
    $('nav ul li').click(function(){
      $(this).addClass("active").siblings().removeClass("active");
    });
  }
}
</script>
<style scoped>
@import '../assets/navbar.css';

.navbar-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
}

</style>
