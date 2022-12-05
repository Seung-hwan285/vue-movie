import fetch from 'node-fetch';


export default async function handler(request, response) {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await res.json();
    return response.status(200).json({ data });
}
// &y=${this.year}
// export default async function handler(request, response) {
//
//     console.log(request);
//     const {body} =request;
//
//     console.log(body);
//
//     const res = await fetch(`http://www.omdbapi.com/?apikey=${process.env.VUE_APP_API_KEY}&s=${textValue}`);
//     const data = await res.json();
//
//     return response.status(200).json(data);
// }