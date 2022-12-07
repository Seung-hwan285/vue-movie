<template>

  <form @submit.prevent="onSubmit" class="search-box">
    <input  v-model="textValue" placeholder="제목"/>
    <input  v-model="year" placeholder="년도"/>
    <input type="submit" class="input-search" value="검색"/>
  </form>
</template>


<script>

import {movieAPI} from "@/utils/request";

export default {
  data() {
    return {
      textValue: '',
      year: '',
      isShow:false,
    }
  },
  methods: {
    async onSubmit() {
      let movies = [];
      const isShow =this.isShow;
      if(this.year!==""){
        const response =await movieAPI.getTitleAndYear(this.textValue,this.year);
        movies = response.Search;
        this.textValue="";
        this.year="";

      }else{
        const response = await movieAPI.getTitle(this.textValue);
        movies = response.Search;
        this.textValue = "";
      }
      this.$emit('onSubmit',movies,isShow);
    },

  }
}

// let isShow = ref(true);

// const emit =defineEmits({
//
//
//   onSubmit: async ({textValue})=>{
//     const response = await movieAPI.getTitle(textValue.value);
//
//     movies.value = response.data.Search;
//     textValue.value ="";
//   }
// });


</script>

<style scoped>

</style>