<script setup>
import axios from "axios";
import {onMounted, ref} from "vue";
import VTable from "./components/table/v-table.vue";
import { ElButton } from 'element-plus'

const pokemons = ref([]);
const currentPage = ref(1);

const handlePageChange = async (page) => {
  currentPage.value = page
  await handlePokemonsGet()
}
const handlePokemonsGet = async () => {
  await axios
      .get('http://127.0.0.1:8000/api/pokemons', {
        params:{
          page: +currentPage.value
        }
      })
      .then(response => (pokemons.value = response.data))

}
onMounted(() => {
  handlePokemonsGet()

})



</script>

<template>
  <div id="app">
    <v-table
        :pokemon-data = 'pokemons'
      />
  </div>
  <div class="example-pagination-block">
    <el-pagination layout="prev, pager, next" :total="pokemons.total" :page-size="5" v-model:current-page="currentPage" @current-change="handlePageChange" />
  </div>
</template>

