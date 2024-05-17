
import {fetchDetail, fetchPopular} from "@/action/_action";
import {notFound} from "next/navigation";
import Link from "next/link";
import {capitalizeFirstLetter} from "@/lib/utils";
import "/src/app/globals.css"

const MovieDetail = async ({searchParams, params}) => {
    const { lang } = searchParams;
    const {id, type} = params;
    const {detail : movie, similar: {results: similarMovie}, actor: {cast}, watchProvider: {results: watchData}} = await fetchDetail(id, type.trim(), lang || "en");

    console.log(watchData)
    if (!movie && !movie?.success){
        notFound();
    }

    return (
        <div className="mx-auto p-4">
            <div className="sm:flex sm:flex-col lg:flex-row flex-col text-white rounded-lg shadow-lg overflow-hidden">

                <div className={"sm:w-1/2 w-full space-y-5"}>
                    <img src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt={movie.title || movie.original_title} className="w-full h-96 object-cover"/>
                    <div className={""}>
                        <h2 className="text-2xl font-bold mb-4">Actors</h2>

                        <div className="flex overflow-x-scroll space-x-8 hide-scrollbar">
                            {cast.map(actor => (
                                <div key={actor.id} className="flex-none w-32 text-center">
                                    <img
                                        src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                                        alt={actor.name}
                                        className="w-full h-auto rounded-md object-cover"
                                    />
                                    <div className="mt-2">
                                        <h3 className="text-xs font-semibold">{actor.name}</h3>
                                        <p className="text-xs text-gray-400">{actor.character}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="sm:p-6 py-5">
                    <h1 className="text-4xl font-bold mb-2">{movie.title || movie.original_title}</h1>
                    <p className="text-xl italic mb-4">{movie.tagline}</p>
                    <div className="flex flex-wrap items-center mb-4">
                        <span className="bg-gray-700 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">{movie.release_date}</span>
                        <span className="bg-gray-700 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">{movie.runtime} min</span>
                        <span className="bg-gray-700 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">Rating: {movie.vote_average}</span>
                    </div>
                    <p className="mb-6">{movie.overview}</p>
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold mb-2">Genres</h2>
                        <div className="flex flex-wrap">
                            {movie?.genres?.map((genre) => (
                                <span key={genre.id} className="bg-blue-600 text-xs font-medium mr-2 mb-2 px-2.5 py-0.5 rounded">{genre.name}</span>
                            ))}
                        </div>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-bold mb-2">Production Companies</h2>
                        <div className="flex flex-wrap">
                            {movie?.production_companies?.map((company) => (
                                <div key={company.id} className="flex items-center mr-4 mb-4">
                                    {company.logo_path && (
                                        <img src={`https://image.tmdb.org/t/p/w200${company.logo_path}`} alt={company.name} className="h-10 mr-2" />
                                    )}
                                    <span>{company.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-bold mb-2">Language</h2>
                        <p>{movie.spoken_languages?.map(lang => lang.english_name).join(', ')}</p>
                    </div>
                    <a href={movie.homepage} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Official Homepage</a>
                </div>
            </div>

            <div className={"flex flex-col w-full gap-5"}>
                <h1 className={"text-3xl tracking-tight font-bold"}>Similar {capitalizeFirstLetter(type)}</h1>

                {
                    !similarMovie || similarMovie.length === 0 ? (
                        <span className={"font-medium text-center text-gray-500 text-2xl"}>No {capitalizeFirstLetter(type)} Found</span>
                    ) : (
                        <div className="grid grid-cols-2 gap-7 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                            {
                                similarMovie.map((movie) => (
                                    <Link href="#" key={movie.id} className="relative group">
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
                                            <h3 className="text-sm font-semibold text-gray-50">
                                                {movie.title || movie.name}
                                            </h3>
                                            <p className="text-xs text-gray-400">
                                                {movie.release_date || movie.first_air_date}
                                            </p>
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default MovieDetail;
