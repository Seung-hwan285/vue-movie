import fetch from 'node-fetch';
import {API_END_POINT, VUE_APP_API_KEY} from "@/utils/constant";


export default async function handler(request, response) {
    const {id} =request.query;
//  fetch(`http://www.omdbapi.com/?apikey=${process.env.VUE_APP_API_KEY}&i=${route.params.id}&plot=full`)

    const res = await fetch(`${API_END_POINT}?apikey=${VUE_APP_API_KEY}&i=${id}&plot=full`);
    const data = await res.json();
    return response.status(200).json({ data });
}



