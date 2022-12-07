import fetch from 'node-fetch';


export default async function handler(request, response) {
    const API_END_POINT = 'http://www.omdbapi.com/'
    const VUE_APP_API_KEY=process.env;
    const {title,year} =request.query;

    const res = await fetch(`http://www.omdbapi.com/?apikey=${process.env.VUE_APP_API_KEY}&s=${title}&y=${year}`);
    const data = await res.json();
    return response.status(200).json({ data });
}

// &y=${this.year}
// export default async function handler(request, response) {
//
//
//     const {body} =request;
//
//     const res = await fetch(`http://www.omdbapi.com/?apikey=${process.env.VUE_APP_API_KEY}&s=${title}`);
//     const data = await res.json();
//
//     return response.status(200).json(data);
// }