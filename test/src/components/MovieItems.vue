<template>
  <div class='movie-container'>
    <ul class='movie-list'>
      <li class='movie-item' v-for='movie in movies' :key='movie.imdbId'>
        <router-link :to="'/movie/' + movie.imdbID" class='movie-link'>
          <div class='movie-image'>
            <img :src='movie.Poster' />
            <p class='type'>{{ movie.Type }}</p>
          </div>

          <div class='movie-info'>
            <p class='movie-year'>{{ movie.Year }}</p>
            <h3 class='movie-title'>{{ movie.Title }}</h3>
          </div>
        </router-link>
      </li>
    </ul>
  </div>



</template>

<script>

export default {
  props: ['movies'],
};

</script>

<style scoped>
h3 {
  color: #FFF;
  margin-bottom: 16px;
}

p {
  color: #FFF;
}

.movie-item {
  max-width: 50%;
  padding: 26px 20px;
}



.movie-title{
  font-size: 12px
}

.movie-list {
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  left: 5%;
}

.movie-image img{
  width: 300px;
  height: 500px;
  object-fit: cover;
}





</style>

