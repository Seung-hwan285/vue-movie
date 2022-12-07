import fetch from "node-fetch";

export const movieAPI={
    getTitleAndYear  : async (title,year)=>{
        const response = await fetch(`/api/get/${title}/${year}`);
        return  response.json();
    },
    getTitle : async (title)=>{
        const response =await fetch(`/api/getTitle/${title}`);
        return response.json();
    },
    getId : async (id)=>{
        const res = await fetch(`/api/getId/${id}`);
        return res.json();
    }
}


