<template>
  <form @submit.prevent='onSubmit' class='search-box'>
    <input v-model='textValue' placeholder='제목' />
    <input v-model='year' placeholder='년도' />
    <input type='submit' class='input-search' value='검색' />
  </form>
</template>

<script>

import {movieAPI} from "@/utils/request";
import { checkIsTitle, checkIsYear } from '@/utils/errorHandler';

export default {
  data() {
    return {
      textValue: '',
      year: '',
    };
  },
  methods: {
    async onSubmit() {
      let movies = [];
      if (this.year !== '') {
        checkIsTitle(this.textValue);
        checkIsYear(this.year);

        const response = await movieAPI.getTitleAndYear(this.textValue, this.year);
        movies = response.Search;
        this.$emit('titleFormChild',this.textValue);
        this.textValue = '';
        this.year = '';

      } else {
        checkIsTitle(this.textValue);

        const response = await movieAPI.getTitle(this.textValue);
        movies = response.Search;
        console.log(movies);
        this.$emit('titleFormChild',this.textValue);
        this.textValue = '';
      }

      this.$emit('onSubmit', movies,this.textValue);

    },

  },
};

</script>

<style scoped>

input {
  margin-right: 10px;
  display: block;
  appearance: none;
  outline: none;

  color: black;
  font-size: 20px;
  border-radius: 5px;
}


.search-box {
  display: flex;
  /*가로 위치 정렬*/
  justify-content: center;
  padding: 30px;

}


.input-search {
  background-color: rgba(128, 128, 128);
  font-size: 20px;
  cursor: pointer;
}

</style>

