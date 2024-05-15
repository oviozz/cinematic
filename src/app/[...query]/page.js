
import Link from "next/link";
import {movieGenres, tvGenres} from "@/lib/queryType";
import {redirect} from "next/navigation";

const fetchPopular = async (query) => {
    const response = await fetch(`https://api.themoviedb.org/3/${query}/top_rated?api_key=0b243a8843cc55c9e1ba6cdeae3cf6fb`);
    return await response.json()
}
export default async function Home({params}) {

    const { query } = params;
    

    const { results } = await fetchPopular(query[0]);


    return (
        <main className="">
            <nav className={"w-full border-b border-gray-700"}>
                <ul className={"container sm:text-sm text-xs flex gap-7 items-center px-6 overflow-x-auto hide-scrollbar"}>
                    {
                        movieGenres.map((genre, index) => (
                            <li className={"hover:border-white border-t-gray-950 border-t-2 p-2"} key={index}>{genre}</li>
                        ))
                    }
                </ul>
            </nav>

            <div className="p-6 grid grid-cols-2 gap-7 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {
                 results?.map((movie) => (
                     <div key={movie.id} className="relative group">
                         <Link className="absolute inset-0 z-10" href="#">
                             <span className="sr-only">View movie</span>
                         </Link>
                         <img
                             alt="Movie poster"
                             className="h-auto w-full rounded-md object-cover group-hover:opacity-50 transition-opacity"
                             src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                             style={{
                                 aspectRatio: "200/300",
                                 objectFit: "cover",
                             }}
                         />


                         <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-4">
                             <h3 className="text-sm font-semibold text-gray-50">{movie.title}</h3>
                             <p className="text-xs text-gray-400">{movie.release_date}</p>
                         </div>
                     </div>
                 ))
                }
            </div>
        </main>
    );
}
