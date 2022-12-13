import fetch from 'node-fetch';

export const movieAPI = {
    getTitleAndYear: async (title, year) => {
        // const response = await fetch(
        //     `https://www.omdbapi.com/?apikey=${process.env.VUE_APP_API_KEY}&s=${title}&y=${year}`,
        // );
        const response = await fetch(`/api/get/${title}/${year}`);
        return response.json();
    },
    getTitle: async (title) => {
        // const response = await fetch(
        //     `https://www.omdbapi.com/?apikey=${process.env.VUE_APP_API_KEY}&s=${title}`,
        // );
        const response = await fetch(`/api/getTitle/${title}`);
        return response.json();
    },
    getId: async (id) => {
        const response = await fetch(`/api/getId/${id}`);
        return response.json();
    },
    getNextPage: async (title, page) => {
        // const response = await fetch(
        //     `https://www.omdbapi.com/?apikey=${process.env.VUE_APP_API_KEY}&s=${title}&page=${page}`,
        // );
        //
        const response = await fetch(`/api/getNextPage/${title}/${page}`);
        return response.json();
    },
};
