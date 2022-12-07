<template>

  <div class="home">
    <MovieHeader/>

    <form @submit.prevent="onSubmit"  class="search-box">
      <input type="text" v-model="textValue" placeholder="제목"/>
      <input type="text" v-model="year" placeholder="년도"/>
      <input type="submit" class="input-search" value="검색"/>
    </form>

    <MovieItems :movies="movies" v-if="isShow"/>
    <LoadingSpinner v-else/>
  </div>

</template>

<script setup>

import {ref} from "vue";
import MovieItems from "@/components/MovieItems";
import {movieAPI} from "@/utils/request";
import LoadingSpinner from "@/components/LoadingSpinner";
import MovieHeader from "@/components/MovieHeader";

const textValue = ref("");
const year = ref("");
const movies = ref([]);
let isShow = ref(true);


const onSubmit = async () => {

  if (year.value !== "") {
    const response = await movieAPI.getTitleAndYear(textValue.value, year.value);
    movies.value = response.data.Search;
    textValue.value = "";
    year.value = "";
  }

  else {
    const response = await movieAPI.getTitle(textValue.value);
    movies.value = response.data.Search;
    console.log(movies.value);
    textValue.value = ""
  }

  isShow.value =false;
  setTimeout(()=>{
    isShow.value=true;
  },2000);
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


input {
  margin-right: 10px;
  display: block;
  appearance: none;
  outline: none;

  color: black;
  font-size: 20px;
  border-radius: 5px;
}



.search-box {
  display: flex;
  /*가로 위치 정렬*/
  justify-content: center;
  padding: 30px;

}


.input-search {
  background-color: rgba(128, 128, 128);
  font-size: 20px;
  cursor: pointer;
}





</style>