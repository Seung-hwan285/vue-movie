import fetch from 'node-fetch';
export default async function handler(request, response) {

    const {title} =request;
    const {title2} =response;
    console.log(title);
    console.log(title2);
    console.log(response);
    const res = await fetch(`https://www.omdbapi.com?apikey=${process.env.VUE_APP_API_KEY}&s=${title}`);
    const data = await res.json();


    console.log(data);

    return response.status(200).json({data});
}