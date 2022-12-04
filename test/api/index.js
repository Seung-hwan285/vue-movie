import fetch from 'node-fetch';
export default async function handler(request, response) {

    const res = await fetch(`https://www.omdbapi.com?apikey=${process.env.VUE_APP_API_KEY}&s=naruto`);
    const data = await res.json();

    return response.status(200).json({data});
}