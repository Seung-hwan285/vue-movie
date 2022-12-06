export const getMovie =async ()=>{
    const response = await fetch('/api/post');

    return response.json();
}