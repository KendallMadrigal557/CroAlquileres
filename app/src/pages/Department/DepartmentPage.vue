<template>
    <navbar></navbar>
    <div  class="card-department-container">
        <cardDepartment v-for="index in 10" :key="index"></cardDepartment>
    </div>
</template>

<script>
import cardDepartment from '@/components/Department/cardDepartment.vue';
import navbar from '../navbar.vue';
    export default {
        components : {
            cardDepartment,
            navbar
        }
    }
</script>

<style lang="scss" scoped>

</style>

<style scoped>
.card-department-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 60px;
}


</style>