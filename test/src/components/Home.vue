<template>
  <div class="home">
    <div class="feature-card">
        <router-link to="/">
          <img
              src="http://image.jtbcplus.kr/data/contents/jam_photo/202201/12/3723b663-bb97-4001-8d8a-624b3f5cfbe3.jpg"  class="featured-img" />
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


<!--    38분 41초 -->
    <div>
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

<!--    <div class="movie-list">-->
<!--      <div class="movie" v-for="movie in movies" :key ="movie.imdbId">-->
<!--        <router-link to="'/movie">-->


<!--        </router-link>-->

<!--      </div>-->
<!--    </div>-->

  </div>
</template>

<script>


export default {


  data(){
    return{
        textValue : '',
        year: '',
        movies :[],
    }
  },

  mounted(){
    console.log(process.env.VUE_APP_API_KEY);
  },

  methods:{
    submitForm(){
        if(this.textValue !=="") {
          // npm run build 했을때 .env key를 불러오면 build 실패가 뜸
          // 하지만 env.js 파일에 있는 key를 불러오면 build 성공
//  http://www.omdbapi.com/?apikey=${process.env.VUE_APP_API_KEY}&s=${this.textValue}&y=${this.year}
          // fetch(`http://www.omdbapi.com/?apikey=${process.env.VUE_APP_API_KEY}&s=${this.textValue}&y=${this.year}`)
          //   .then((res)=>res.json())
          //   .then((data)=>{
          //     this.movies =data.Search;
          //     console.log(data.Search);
          //     this.textValue ="";
          //     this.year="";
          //   })
          // }

          fetch('/api')
              .then((res)=>res.json())
          .then((data)=>console.log(data));




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
  /*Naruto*/

  .movie-list{
    display: flex;
    flex-wrap: wrap;
  }

  .movie-item{
    max-width: 50%;
    padding: 26px 20px;
  }

  .movie-link{

  }


</style>