import fetch from "node-fetch";
import {api} from "@/utils/constant.js";



export const movieAPI={




    getTitleAndYear  : async (title,year)=>{
        const response = await fetch(`${api.GET_TITLE_YEAR}/${title}/${year}`);
        return  response.json();
    },
    getTitle : async (title)=>{
        const response =await fetch(`${api.GET_TITLE}${title}`);
        return response.json();
    },
    getId : async (id)=>{
        const res = await fetch(`${api.GET_ID}/${id}`);
        return res.json();
    }
}


