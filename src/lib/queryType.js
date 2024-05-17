
export const movieGenres = [
    "Action",
    "Comedy",
    "Drama",
    "Horror",
    "Mystery",
    "Adventure",
    "Thriller",
    "Fantasy",
    "Animation",
    "Romance",
    "Documentary",
    "Crime",
    "Family",
    "History",
    "War",
    "Western"
];

//["Top Rated", "Popular", "On Air"]
export const tvOptions = {
    "Top Rated": "top_rated",
    "Popular": "popular",
    "On Air": "on_the_air",
    "Airing Today": "airing_today"
}
export const movieOptions = {
    "Now Playing": "now_playing",
    "Popular": "popular",
    "Upcoming": "upcoming",
    "Top Rated": "top_rated"
};
export function typeQuery(params) {
    return params === "tv" ? Object.keys(tvOptions) : Object.keys(movieOptions);
}

export function extractMovie(key){
    return key ? movieOptions[decodeURIComponent(key)] : "now_playing";
}

export function extractTV(key){
    return key ? tvOptions[decodeURIComponent(key)] : "top_rated";
}

