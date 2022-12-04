import fetch from 'node-fetch';
export default async function handler({request}, response) {


    const res = await
        fetch(`https://www.omdbapi.com?apikey=${process.env.VUE_APP_API_KEY}&s=${title2}`);
    const data = await res.json();


    console.log(data);

    return data;
}