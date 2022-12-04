import fetch from 'node-fetch';
export default async function handler(request, response) {
    console.log(request);
    console.log(response);
    const res = await fetch(`https://www.omdbapi.com?apikey=${process.env.VUE_APP_API_KEY}&s=naruto`);
    const data = await res.json();


    console.log(data);

    return response.status(200).json({data});
}