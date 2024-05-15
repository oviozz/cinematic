
"use server"

import {extractMovie, extractTV} from "@/lib/queryType";

export const fetchPopular = async (query, lang) => {

    const extractType = query[0] === "tv" ? extractTV(query[1]) : extractMovie(query[1])
    const response = await fetch(`https://api.themoviedb.org/3/${query[0]}/${extractType}?language=${lang}&api_key=0b243a8843cc55c9e1ba6cdeae3cf6fb`);
    return await response.json();

}