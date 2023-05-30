<template>
      <li class="cards_item">
        <div class="card">
          <div class="card_image"><img src="../../assets/ejemplo.jpg" /></div>
          <div class="card_content">
            <h2 class="card_title">Las 3 maravillas</h2>
            <p class="card_text">Puntarenas, Costa Rica</p>
            <button class="button card_btn">Ver detalles</button>
          </div>
        </div>
      </li>
</template>

<script>
export default {
    name: 'CardDepartment',
    
};
</script>


<style scoped>
/* Font */
@import url('https://fonts.googleapis.com/css?family=Quicksand:400,700');

/* Design */
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  background-color: #ecf9ff;
}

body {
  color: #272727;
  font-family: 'Quicksand', serif;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0;
  padding: 1rem;
}


h1 {
  font-size: 24px;
  font-weight: 400;
  text-align: center;
}

img {
  height: auto;
  max-width: 100%;
  vertical-align: middle;
}

.button {
  color: #ffffff;
  padding: 0.8rem;
  font-size: 14px;
  text-transform: uppercase;
  border-radius: 4px;
  font-weight: 400;
  display: block;
  width: 100%;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: transparent;
}

.button:hover {
  background-color: rgba(255, 255, 255, 0.12);
}


.cards_item {
  display: flex;
  padding: 1rem;
}

@media (min-width: 40rem) {
  .cards_item {
    width: 50%;
  }
}

@media (min-width: 56rem) {
  .cards_item {
    width: 25%;
  }
}

.card {
  background-color: white;
  border-radius: 0.95rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.card_content {
  padding: 1rem;
  background: rgb(80,106,131);
  background: linear-gradient(90deg, rgba(80,106,131,1) 0%, rgba(99,131,80,1) 50%, rgba(80,106,131,1) 100%);
}

.card_title {
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin: 0px;
}

.card_text {
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;
  font-weight: 400;
}


</style>