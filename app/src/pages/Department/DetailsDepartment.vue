<template>
    <navbar></navbar>
    <div class="container">
        <DetailsDepartment/>
    </div>
    <footerComponent></footerComponent>
</template>

<script>
import DetailsDepartment from '@/components/Department/detailsDepartment.vue';
import navbar from '../navbar.vue';
import footerComponent from '../footer.vue'
    export default {
        components : {
            DetailsDepartment,
            navbar,
            footerComponent
        }
    }
</script>

<style scoped>
.container{
    margin-top: 60px;
}
</style>