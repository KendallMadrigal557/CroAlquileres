<template>
  <div class="top-bar">
    <div class="logo-container">
      <img class="logo" src="../assets/croalquileres_logo.png" alt="Logo">
    </div>
    
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
  justify-content: space-between;
  padding: 0 20px;
  z-index: 3;
}

.logo-container {
  flex-grow: 1;
  display: flex;
  justify-content: center;
}

.logo {
  width: 150px;
  height: auto;
}

.login-button {
  background-color: #fff;
  color: #1e1e1e;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
}
</style>
