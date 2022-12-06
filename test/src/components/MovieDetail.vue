<template>
  <div class="movie-detail">

      <h2>{{movie.Title}}</h2>
      <img :src="movie.Poster"/>
      <p>{{movie.Plot}}</p>

  </div>
</template>

<script>

import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";

export default {

  name: "MovieDetail",
  setup(){
    const route= useRoute();
    const movie = ref({});

    onMounted(async ()=>{

      const id =route.params.id;
      // const id = route.params.id;
      // const response = await fetch(`/api/get/${id}`);
      //
      // console.log(response);
      // movie.value =await response.json();

      fetch(`/api/get/${id}`)
      .then((res)=>res.json())
      .then((data)=>{
        console.log(data);
        movie.value = data;
        console.log(movie);
      });

    });
      return{
        movie
      }
  },



}
</script>

<style scoped>

.movie-detail{
  width: 50%;
  background-color: #FFFFFF;
  margin: 0 auto;
}

.movie-detail h2 {

  color: black;
  font-size: 28px;
  font-weight: 600;
  width: 10%;
  margin: 0 auto;

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


</style>