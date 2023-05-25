<template>
    <div>
      <logo></logo>
      <navbar></navbar>
      <div class="card-department-container">
        <cardDepartment v-for="index in 10" :key="index"></cardDepartment>
      </div>
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

<style scoped>
.card-department-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 60px;
}
</style>