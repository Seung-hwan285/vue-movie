import fetch from "node-fetch";
const {API_END_POINT,VUE_APP_API_KEY} =require('/test/src/utils/constant');

export default async function handler(request, response) {

    const {title} =request.query;

    const res = await fetch(`${API_END_POINT}?apikey=${process.env.VUE_APP_API_KEY}&s=${title}`);
    // const res = await fetch(`${API_END_POINT}?apikey=${VUE_APP_API_KEY}&s=${title}`);
    const data = await res.json();
    return response.status(200).json({ data });
}