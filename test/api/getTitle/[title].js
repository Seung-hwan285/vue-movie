import fetch from "node-fetch";

export default async function handler(request, response) {

    const {title,year} =request.query.body;

    const res = await fetch(`http://www.omdbapi.com/?apikey=${process.env.VUE_APP_API_KEY}&s=${title}&y=${year}`);
    const data = await res.json();
    return response.status(200).json({ data });
}