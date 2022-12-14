<template>

  <div class='home'>
    <MovieHeader />

    <MovieForm @onSubmit='onSubmit' @titleFormChild='titleFormChild'/>

    <MovieItems v-if='isShow' :movies='moviesList' />

    <LoadingSpinner v-else />
  </div>

</template>

<script setup>

import { onMounted, ref } from 'vue';
import MovieHeader from '@/components/MovieHeader';
import MovieForm from '@/components/MovieForm';
import LoadingSpinner from '@/components/LoadingSpinner';
import MovieItems from '@/components/MovieItems';
import { loadingHandler } from '@/utils/LoadingHandler';
import { movieAPI } from '@/utils/request';

let isShow = ref(true);
const moviesList = ref([]);
const title =ref('');
let page=ref(1);

const onSubmit = async (movies) => {
  moviesList.value = movies;
  loadingHandler(isShow);
};

const titleFormChild=(textValue)=>{
  title.value =textValue;
}

const onScroll=async (textValue)=>{
  const response =await movieAPI.getNextPage(textValue,page.value++);

  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;

  if(scrollTop+clientHeight >=scrollHeight-10){
    moviesList.value.push(...response.data.Search);
  }
}

onMounted(()=>{
  window.addEventListener('scroll',()=>onScroll(title.value))
});

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

