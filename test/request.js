export const getTitleAndYear=async (title,year)=>{
    const response = await fetch(`/api/get/${title}/${year}`);
    return  response.json();
}

export const getTitle=async (title)=>{
    const response =await fetch(`/api/getTitle/${title}`);
    return response.json();
}
