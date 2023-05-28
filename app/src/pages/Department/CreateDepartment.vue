<template>
    <div>
        <NavBar></NavBar>
                <createDepartment>
                    <div class="main">
            <h1>Hola</h1>
            <ul class="cards">
                
            </ul>
        </div>
                </createDepartment>
    </div>
</template>

<script>
import createDepartment from '@/components/Department/createDepartment.vue';
import NavBar from '../navbar.vue'
export default {
    components: {
        createDepartment,
        NavBar
    }
};
</script>

<style>

.main {
  max-width: 1200px;
  margin: 0 auto;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}

</style>