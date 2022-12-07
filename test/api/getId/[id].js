import fetch from 'node-fetch';


export default async function handler(request, response) {
    const API_END_POINT = 'http://www.omdbapi.com/'
    const VUE_APP_API_KEY=process.env;
    const {id} =request.query;

    const res = await fetch(`${API_END_POINT}?apikey=${VUE_APP_API_KEY}&i=${id}&plot=full`);
    const data = await res.json();
    return response.status(200).json({ data });
}



