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
    <footerComponent></footerComponent>
</template>

<script>
import createDepartment from '@/components/Department/createDepartment.vue';
import NavBar from '../navbar.vue'
import footerComponent from '../footer.vue'
export default {
    components: {
        createDepartment,
        NavBar,
        footerComponent
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
}
</style>