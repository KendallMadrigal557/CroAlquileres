<template>
  <navbar></navbar>
  <div>
    <section class="hero">
      <div class="background-image" :style="backgroundStyle"></div>
      <div class="hero-content-area">
        <h1>CroAlquileres</h1>
        <h3>La mejor pagina en busqueda de departamentos</h3>
      </div>
    </section>

    <section class="information">
      <h3 class="title">Información personal:</h3>
      <p>Soy Kendall Madrigal Araya, tengo 19 años y soy estudiante del Colegio Universitario de Cartago, actualmente
        estudiando TI
        este es un proyecto de Progrmación V en cual estuve aplicando algunos conocimientos de VUE
      </p>
      <hr>
    </section>
  </div>
  <footerComponent/>
</template>
<script>
import navbar from './navbar.vue';
import footerComponent from './footer.vue'

export default {
  components: {
    navbar,
    footerComponent
  },
  data() {
    return {
      backgroundStyle: {
        backgroundImage: "url(https://images.unsplash.com/photo-1592738286436-5104ffdc8dd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80)"
      }
    };
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font: normal 16px sans-serif;
  color: #555;
}

ul,
nav {
  list-style: none;
}

a {
  text-decoration: none;
  opacity: 0.75;
  margin: 0 15px;
  color: white;
  cursor: pointer;
}

a:hover {
  opacity: 1;
}

a.btn {
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  background-color: #3f51b5;
  opacity: 1;
  margin-top: 10px;
  color: white
}


section {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 100px;
}


header {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 35px 100px 0;
  -webkit-animation: 1s fadein 0.5s forwards;
  animation: 1s fadein 0.5s forwards;
  opacity: 0.5;
  color: white;
}

@-webkit-keyframes fadein {
  100% {
    background: linear-gradient(rgba(5, 7, 12, 0.75), rgba(5, 7, 12, 0.75));
    opacity: 1;
  }
}

@keyframes fadein {
  100% {
    background: linear-gradient(rgba(5, 7, 12, 0.75), rgba(5, 7, 12, 0.75));
    opacity: 1;
  }
}

header h2 {
  font-family: "Quicksand, sans-serif";
  color: white;
}

header nav {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-right: -15px;
}

header nav li {
  margin: 0 15px;
  color: white;
}



.hero {
  background: linear-gradient(rgba(5, 7, 12, 0.75), rgba(5, 7, 12, 0.75));
  position: relative;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  color: white;
}

.hero .background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  z-index: -1;
  background-color: #80a3db;
  -webkit-animation: 15s change 1s forwards;
  animation: 15s change 1s forwards;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  background-position: center;

}

@keyframes change {
  0% {
    background-image: url(https://images.unsplash.com/photo-1592738286436-5104ffdc8dd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80);
  }

  25% {
    background-image: url(https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
  }

  50% {
    background-image: url(https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);

  }

  75% {
    background-image: url(https://images.pexels.com/photos/271795/pexels-photo-271795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);

  }

  100% {
    background-image: url(https://images.pexels.com/photos/323772/pexels-photo-323772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);

  }
}

.hero h1 {
  font: bold 60px "Open Sans", sans-serif;
  margin-bottom: 40px;
  color: white;
}

.hero h3 {
  font: normal 28px "Open Sans", sans-serif;
  margin-bottom: 40px;
  color: white;
}

.hero a.btn {
  padding: 20px 46px;
}

.hero-content-area {
  opacity: 0;
  margin-top: 100px;
  -webkit-animation: 1s slidefade 1s forwards;
  animation: 1s slidefade 1s forwards;

}

@-webkit-keyframes slidefade {
  100% {
    opacity: 1;
    margin: 0;
  }
}

@keyframes slidefade {
  100% {
    opacity: 1;
    margin: 0;
  }
}


.grid {
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

hr {
  width: 100%;
  height: 2px;
  background-color: #3f51b5;
  border: 0;
  margin-bottom: 50px;
}



@media (max-width: 800px) {

  .hero {
    min-height: 600px;
  }

  .hero h1 {
    font-size: 48px;
  }

  .hero h3 {
    font-size: 24px;
  }

  .hero a.btn {
    padding: 15px 40px;
  }

}

@media (max-width: 1000px) {
  header {
    padding: 20px 50px;
  }
}


@media (max-width: 700px) {
  header {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  header h2 {
    margin-bottom: 15px;
  }
}

@media (max-width: 700px) {

  footer {
    padding: 80px 15px;
  }

}

section h3.title {
  text-transform: capitalize;
  font: bold 32px "Open Sans", sans-serif;
  margin-bottom: 30px;
  text-align: center;
}


.information .grid li {
  height: 350px;
  padding: 20px;
  background-clip: content-box;
  background-size: cover;
  background-position: center;
}

.information .grid li.small {
  -ms-flex-preferred-size: 30%;
  flex-basis: 30%;
}
</style>