<template>
    <div class="page-container">
      <div class="card-container">
        <div class="card">
          <img src="../img/ejemplo.jpg" alt="Imagen del lugar" class="card-image">
          <div class="card-details">
            <h2 class="card-title">Departamento las 3 maravillas</h2>
            <p class="card-price">2000$</p>
            <p class="card-location">Puntarenas, Costa Rica</p>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
export default {
    name: 'CardDepartment',
    
};
</script>


<style>
.page-container {
  display: flex;
  justify-content: center;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.card {
  width: 200px;
  height: auto;
  border: 2px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  margin: 10px;
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