<template>
  <div class="movie-detail" v-if="isShow">
      <h2>{{movie.Title}}</h2>
      <img :src="movie.Poster"/>
      <p>{{movie.Plot}}</p>
  </div>

  <LoadingSpinner v-else/>

</template>

<script setup>

import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import LoadingSpinner from "@/components/LoadingSpinner";
import {movieAPI} from "@/utils/request";

  const route = useRoute();
  const movie = ref({});
  let isShow = ref(true);

  onMounted(async () => {
    const id =route.params.id;
    const response = await movieAPI.getId(id);
    isShow.value =false;
    setTimeout(()=>{
      isShow.value=true;
    },2000);

    movie.value = response.data;
  });

</script>



<style scoped>

.movie-detail{
  width: 50%;
  background-color: #FFFFFF;
  margin: 0 auto;
  border-radius: 10px;
}

.movie-detail h2 {
  color: black;
  font-size: 25px;
  font-weight: 600;
  width: 100%;
  text-align: center;
}

img {
  display: block;
  margin: 100px auto;
}
p {
  font-weight: 600;
  color: black;
  font-size: 18px;
  line-height: 1.4;
}

.container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container{
  color: #FFFFFF;
}

.spinner {
  animation: spin 2s linear infinite;
}
@keyframes spin {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}


</style>