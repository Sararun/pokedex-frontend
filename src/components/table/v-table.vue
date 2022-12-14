<template>
  <div class="v-table">
    <div class="v-table_header">
      <p class="r">Id</p>
      <p>Name</p>
      <p>Image</p>
      <p>Type</p>
    </div>
    <div class="v-table_body">
      <v-table-row :pokemon-data='pokemonData'/>
    </div>
  </div>
  <div class="table-pagination">
    <div class="page" v-for="page in pages" :key="page">
    </div>
  </div>

</template>

<script setup>
import VTableRow from "./v-table-row.vue";

const props = defineProps(['pokemonData'])

</script>

<style>
.v-table {
  max-width: 900px;
  margin: 0 auto;
}

.v-table_header {
  display: flex;
  justify-content: space-around;
}

.v-table_header p {
  flex-basis: 25%;
  justify-content: space-around;
}
</style>