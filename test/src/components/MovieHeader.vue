<template>
  <div class="card"
  >
    <router-link to="/">
      <img
          src="https://p4.wallpaperbetter.com/wallpaper/233/744/838/totoro-hayao-miyazaki-rain-umbrella-wallpaper-preview.jpg"
          class="featured-img"/>
      <div class="detail movie-header">
        <h3>Movie Search</h3>
      </div>
    </router-link>
  </div>
</template>

<script>

</script>

<style scoped>

.card {
  position: relative;
}

.featured-img {
  width: 100%;
  height: 80vh;
  object-fit: cover;
  position: relative;
  z-index: 0;
}

.movie-header h3 {
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
  color: #FFF;
  margin-bottom: 16px;
}

p {
  color: #FFF;
}


</style>