<template>

  <div class="home">
    <MovieHeader/>

    <MovieForm @onSubmit = "onSubmit"/>

    <MovieItems v-if="isBoolean" :movies="moviesList"/>

    <LoadingSpinner v-else/>
  </div>

</template>

<script setup>

import {ref} from "vue";
import MovieHeader from "@/components/MovieHeader";
import MovieForm from "@/components/MovieForm";
import LoadingSpinner from "@/components/LoadingSpinner";
import MovieItems from "@/components/MovieItems";

let isBoolean = ref(true);
const moviesList=ref([]);


const onSubmit = async (movies,isShow) => {

  isBoolean.value= isShow;
  moviesList.value =movies;

  isBoolean.value=false;

  setTimeout(()=>{
    isBoolean.value =true;
  },2000);

  // if (year.value !== "") {
  //   const response = await movieAPI.getTitleAndYear(textValue.value, year.value);
  //   movies.value = response.data.Search;
  //   textValue.value = "";
  //   year.value = "";
  // }
  //
  // else {
  //   const response = await movieAPI.getTitle(textValue.value);
  //   movies.value = response.Search;
  //   textValue.value = ""
  // }
  //
  // isShow.value =false;
  // setTimeout(()=>{
  //   isShow.value=true;
  // },2000);
}

</script>

<style scoped>

h3 {
  color: #FFF;
  margin-bottom: 16px;
}

p {
  color: #FFF;
}






</style>