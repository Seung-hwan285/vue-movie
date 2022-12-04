<template>

  <nav>
    <router-link to="/">
      <h1><span>Vue Movie</span></h1>
    </router-link>
  </nav>


  <main>
    <router-view/>
  </main>

</template>

<script>



export default {

}
</script>

<style>

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  background-color: black;
}
a{
  text-decoration: none;
}

nav{
  display: flex;
  align-content: center;
  justify-items: center;

  padding: 10px 16px;
  background-color: rgba(0, 0, 0, 0.9);
}

h1{
  color: #eee;
}

</style>
