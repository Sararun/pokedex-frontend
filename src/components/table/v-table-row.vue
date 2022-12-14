<template>
  <div class="v-table-row" v-for="pokemon in pokemonData.data">
    <div class="row">{{pokemon.id}}</div>
    <div class="row">{{pokemon.name}}</div>
    <div class="row"><img :src="pokemon.image"></div>
    <div class="row">{{pokemon.type}}</div>
  </div>
</template>

<script setup>
const props = defineProps(['pokemonData'])

</script>

<style>
.v-table-row {
  display: flex;
  justify-content: space-around;
  text-align: left;
}
.row {
  flex-basis: 25%;
  padding: 5px 5px;
  text-align: left;
}
</style>