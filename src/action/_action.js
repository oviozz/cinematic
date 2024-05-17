
"use server"

import {extractMovie, extractTV} from "@/lib/queryType";

export const fetchPopular = async (query, lang, page) => {

    const extractType = query[0] === "tv" ? extractTV(query[1]) : extractMovie(query[1])

    const response = await fetch(`https://api.themoviedb.org/3/${query[0]}/${extractType}?language=${lang}&page=${page}&api_key=0b243a8843cc55c9e1ba6cdeae3cf6fb`);
    return await response.json();

}


export const fetchDetail = async (id, query, lang) => {

    const apiRouteType = query[0] === "tv" ? "tv" : "movie";
    const creditType = query[0] === "tv" ? "aggregate_credits" : "credits";

    const apiKey = '0b243a8843cc55c9e1ba6cdeae3cf6fb';
    const detailUrl = `https://api.themoviedb.org/3/${apiRouteType}/${id}?language=${lang}&api_key=${apiKey}`;
    const similarUrl = `https://api.themoviedb.org/3/${apiRouteType}/${id}/similar?language=${lang}&api_key=${apiKey}`;
    const actorURL = `https://api.themoviedb.org/3/${apiRouteType}/${id}/${creditType}?language=${lang}&api_key=${apiKey}`;
    const watchProviders = `https://api.themoviedb.org/3/${apiRouteType}/${id}/watch/providers?language=${lang}&api_key=${apiKey}`;


    const [detailResponse, similarResponse, actorResponse, watchResponse] = await Promise.all([
        fetch(detailUrl),
        fetch(similarUrl),
        fetch(actorURL),
        fetch(watchProviders)
    ]);

    const detailData = await detailResponse.json();
    const similarData = await similarResponse.json();
    const actorData = await actorResponse.json();
    const watchData = await watchResponse.json();

    return { detail: detailData, similar: similarData, actor: actorData, watchProvider: watchData };
};
