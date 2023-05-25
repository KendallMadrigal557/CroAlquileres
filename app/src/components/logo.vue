<template>
    <div class="top-bar">
      <img class="logo" src="../assets/croalquileres_logo.png" alt="Logo">
    </div>
  </template>
  

  <script>
  export default {
    name: 'AppLogo',
  }
  </script>

  <style scoped>
  .top-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: #1e1e1e;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .logo {
    width: 150px; 
    height: auto;
  }
  </style>
  