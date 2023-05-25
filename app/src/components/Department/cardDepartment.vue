<template>
      <div class="card-container">
        <div class="card">
          <img src="../../assets/ejemplo.jpg" alt="Imagen del lugar" class="card-image">
          <div class="card-details">
            <h2 class="card-title">Departamento las 3 maravillas</h2>
            <p class="card-price">2000$</p>
            <p class="card-location">Puntarenas, Costa Rica</p>
            <button type="submit" class="login-button">Ver detalles</button>
          </div>
        </div>
      </div>
  </template>

<script>
export default {
    name: 'CardDepartment',
    
};
</script>


<style scoped>
button {
  padding: 15px 25px;
  border: unset;
  border-radius: 15px;
  color: #233b73;
  z-index: 2; /* Ajusta el z-index del botón */
  background: #f8f2ee;
  position: relative;
  font-weight: 1000;
  font-size: 17px;
  -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
  box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
  transition: all 250ms;
  overflow: hidden;
}

button::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0;
  border-radius: 15px;
  background-color: #212121;
  z-index: -1;
  -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
  box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
  transition: all 250ms;
}

button:hover {
  color: #f2f2f7;
}

button:hover::before {
  width: 100%;
}


.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
}

.card {
  width: 300px;
  height: auto;
  border: 2px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  margin: 10px;
  flex: 0 0 auto; 
}

.card-image {
  width: 100%;
  margin-bottom: 10px;
  border-radius: 2px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: auto;
}

.card-title {
  font-size: 16px;
  margin: 0;
}

.card-price {
  font-size: 14px;
  margin: 0;
}

.card-location {
  font-size: 14px;
  margin: 0;
  color: #888;
}
</style>