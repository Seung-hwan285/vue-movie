<template>
  <div class="home">
    <div class="feature-card">
        <router-link to="/">
          <img
              src="https://p4.wallpaperbetter.com/wallpaper/233/744/838/totoro-hayao-miyazaki-rain-umbrella-wallpaper-preview.jpg"  class="featured-img" />
          <div class="detail movie-header">
            <h3>영화관</h3>

          </div>
        </router-link>
    </div>


    <form @submit.prevent="submitForm" class="search-box">
      <input type="text" v-model="textValue" placeholder="제목"/>
      <input type="text" v-model="year" placeholder="년도"/>

      <input type="submit" class="input-search" value="Search"/>
    </form>


    <div v-if="isShow">
        <ul  class="movie-list">
            <li class=movie-item v-for="movie in movies" :key="movie.imdbId">

              <router-link :to="'/movie/' + movie.imdbID" class="movie-link">
              <div class="movie-image">
                <img :src="movie.Poster"/>
                <p class="type">{{movie.Type}}</p>
              </div>

              <div class="movie-info">
                <p class="movie-year">{{movie.Year}}</p>
                <h3 class="movie-title">{{movie.Title}}</h3>
              </div>
              </router-link>
            </li>
        </ul>
    </div>
    <div class="container" v-else>
      <div class="spinner"><i class="fas fa-spinner fa-10x"></i></div>
    </div>

  </div>

</template>

<script>


import {getTitle, getTitleAndYear} from "../../request";

export default {


  data(){
    return{
        textValue : '',
        year: '',
        movies :[],
        isShow :true
    }
  },

  //  http://www.omdbapi.com/?apikey=${process.env.VUE_APP_API_KEY}&s=${this.textValue}&y=${this.year}

  setup(){
    console.log(process.env.VUE_APP_API_KEY);

  },

  methods:{
    async submitForm() {

      if (this.textValue !== "") {
        const title =this.textValue;
        const year=this.year;


        if(year !==""){
          const data=await getTitleAndYear(title, year);
          this.movies=data.Search;
        }

        else{
          const data =await getTitle(title);
          this.movies=data.Search;
        }

        this.isShow=false;

        setTimeout(()=>{
          this.isShow=true;
        },4000);
      }
    }
  }
}
</script>

<style  scoped>
  .home .feature-card {
    position: relative;
  }
  .home .feature-card .featured-img{
    width: 100%;
    height: 80vh;
    object-fit: cover;
    position: relative;
    z-index: 0;
  }

  .feature-card img{
    width: 300px;
    height: 150px;
    object-fit: cover;
  }


  .movie-header h3{
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }

  .detail {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 16px;
    z-index: 1;
  }
  h3 {
    color:#FFF;
    margin-bottom: 16px;
  }
  p {
    color: #FFF;
  }

  .search-box{
    display: flex;
    /*가로 위치 정렬*/
    justify-content: center;
    padding: 30px;


  }

  input{
    margin-right: 10px;
    display: block;
    appearance: none;
    outline: none;

    color: black;
    font-size: 20px;
    border-radius: 5px;
  }

  .input-search{
    background-color: rgba(128,128,128) ;
    font-size: 20px;
    cursor: pointer;
  }

  .movie-list{
    display: flex;
    flex-wrap: wrap;
  }

  .movie-item{
    max-width: 50%;
    padding: 26px 20px;
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