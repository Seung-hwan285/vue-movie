import fetch from "node-fetch";


const api={
    GET :'/api/get'
}

export const movieAPI={
    getTitleAndYear  : async (title,year)=>{
        const response = await fetch(`${api.GET}/${title}/${year}`);
        return  response.json();
    },
    getTitle : async (title)=>{
        const response =await fetch(`${api.GET}/${title}`);
        return response.json();
    },
    getId : async (id)=>{
        const res = await fetch(`${api.GET}/${id}`);
        return res.json();
    }
}


