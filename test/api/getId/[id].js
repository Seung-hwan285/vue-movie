import fetch from 'node-fetch';


export default async function handler(request, response) {

    const {id} =request.query;
    const res = await fetch(`http://www.omdbapi.com/?apikey=${process.env.VUE_APP_API_KEY}&i=${id}&plot=full`);
    const data = await res.json();
    return response.status(200).json({ data });
}



