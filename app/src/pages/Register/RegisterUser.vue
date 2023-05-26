<template>
    <div>
        <NavBar></NavBar>
        <RegisterUser></RegisterUser>
    </div>
</template>

<script>
import NavBar from '../navbar.vue'
import RegisterUser from "@/components/Register/RegisterUser.vue";

export default {
    components: {
        RegisterUser,
        NavBar
    }
};
</script>

<style lang="scss" scoped></style>