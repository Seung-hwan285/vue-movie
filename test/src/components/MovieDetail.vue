<template>
  <div class="movie-detail" v-if="isShow">
      <h2>{{movie.Title}}</h2>
      <img :src="movie.Poster"/>
      <p>{{movie.Plot}}</p>
  </div>

  <div class="container" v-else>
    <div class="spinner"><i class="fas fa-spinner fa-10x"></i></div>
  </div>

</template>

<script>

import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";

export default {

  data(){
    return{
      isShow : false,
    }
  },

  name: "MovieDetail",
  setup() {
    const route = useRoute();
    const movie = ref({});

    onMounted(async () => {
      const id = route.params.id;
      const response = await fetch(`/api/getId/${id}`);
      const result = await response.json();
      movie.value = result.data;
      // fetch(`http://www.omdbapi.com/?apikey=${process.env.VUE_APP_API_KEY}&i=${route.params.id}&plot=full`)
      // .then((res)=>res.json())
      // .then((data)=>{
      //   console.log(data);
      //   movie.value = data;
      //   console.log(movie);
      // });
    });
    return{
        movie
      }
  },

  onUpdated() {
    setTimeout(()=>{
      this.isShow=true;
    },4000);
  }

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