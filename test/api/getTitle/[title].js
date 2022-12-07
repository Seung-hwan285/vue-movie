import fetch from "node-fetch";

export default async function handler(request, response) {
    const API_END_POINT = 'http://www.omdbapi.com/'
    const VUE_APP_API_KEY=process.env;
    const {title} =request.query;


    const res = await fetch(`${API_END_POINT}?apikey=${VUE_APP_API_KEY}&s=${title}`);

    const data = await res.json();
    return response.status(200).json({ data });
}