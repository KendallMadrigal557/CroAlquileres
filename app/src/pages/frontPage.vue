<template>
  <navbar></navbar>
  <div class="container">
    <div class="box">
      <div class="image-overlay">
        <img src="../assets/pexels-sevenstorm-juhaszimrus-439391.jpg" alt="Imagen 1">
        <div class="overlay"></div>
        <div class="text-overlay">
          <!--<p>Bienvenido a nuestra página de alquiler de departamentos, el destino perfecto
            para encontrar tu hogar ideal. Nuestra plataforma se especializa en ofrecer
            una amplia variedad de departamentos de alta calidad, diseñados para adaptarse
            a tus necesidades y preferencias. Ya sea que estés buscando un acogedor
            apartamento para una sola persona o un espacioso piso familiar, aquí encontrarás
            una selección diversa y actualizada de opciones en las ubicaciones más atractivas.
            Nuestro objetivo es brindarte una experiencia sencilla y eficiente para encontrar tu nuevo hogar.</p>-->
        </div>
      </div>
    </div>

    <div class="box">
      <div class="image-overlay">
        <img src="../assets/pexels-pixabay-276724.jpg" alt="Imagen 2">
        <div class="overlay"></div>
        <div class="text-overlay">
          <!-- <p>En nuestra página, podrás explorar una amplia gama 
            de departamentos de diferentes tamaños, estilos y 
            precios. Utiliza nuestras herramientas de búsqueda 
            avanzada para filtrar las opciones según tus requisitos 
            específicos, como el número de habitaciones, baños, área, 
            comodidades, entre otros. Además, nuestro 
            equipo de atención al cliente está siempre disponible 
            para responder cualquier pregunta que puedas tener y 
            brindarte asesoramiento personalizado durante todo el proceso de búsqueda y alquiler.</p>-->
        </div>
      </div>
    </div>

    <div class="box">
      <div class="image-overlay">
        <img src="../assets/paul-szewczyk-nI4aC1kaTRc-unsplash.jpg" alt="Imagen 3">
        <div class="overlay"></div>
        <div class="text-overlay">
        <!--<p>Confía en nuestra página para encontrar tu próximo hogar 
            y disfruta de la tranquilidad de saber que estás trabajando 
            con una plataforma confiable y eficiente.</p>-->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import navbar from './navbar.vue';

export default {
  components: {
    navbar
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 100px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
}

.box {
  height: 100%;
  position: relative;
  overflow: hidden;
}

.box .image-overlay {
  position: relative;
}

.box .image-overlay .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.box .image-overlay img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.box .text-overlay {
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 2;
}

.box .image-text {
  font-size: 14px;
  line-height: 1.5;
  color: #fff;
  max-width: 90%; 
}

@media (max-width: 768px) {
  .container {
    margin-top: 50px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  .box .image-text {
    font-size: 5px; 
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .container {
    grid-template-columns: repeat(auto-fit, minmax(50%, 1fr)); 
  }
  .box .image-text {
    font-size: 5px; 
  }
}

@media (min-width: 1025px) {
  .container {
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  }
  .box .image-text {
    font-size: 5px; 
  }
}
</style>