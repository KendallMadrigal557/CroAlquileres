<template>
    <div>
        <logo></logo>
        <navbar></navbar>
        <cardDepartment></cardDepartment>
    </div>
</template>

<script>
import logo from '@/components/logo.vue';
import navbar from './navbar.vue';
import cardDepartment from '@/components/Department/cardDepartment.vue';    

export default {
    components: {
        logo,
        navbar,
        cardDepartment
    }        
    }
</script>

<style lang="scss" scoped>

</style>