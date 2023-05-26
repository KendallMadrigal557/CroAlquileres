<template>
    <div>
        <NavBar></NavBar>
        <createDepartment></createDepartment>
    </div>
</template>

<script>
import createDepartment from '@/components/Department/createDepartment.vue';
import NavBar from '../navbar.vue'
export default {
    components : {
        createDepartment,
        NavBar
        }
};
</script>

<style lang="scss" scoped>

</style>