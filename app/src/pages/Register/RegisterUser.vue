<template>
    <div>
        <NavBar></NavBar>
        <RegisterUser></RegisterUser>
    </div>
    <footerComponent></footerComponent>
</template>

<script>
import NavBar from '../navbar.vue'
import RegisterUser from "@/components/Register/RegisterUser.vue";
import footerComponent from '../footer.vue';

export default {
    components: {
        RegisterUser,
        NavBar,
        footerComponent
    }
};
</script>

<style lang="scss" scoped></style>