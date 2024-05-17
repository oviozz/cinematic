
import {fetchSearch} from "@/action/_action";
import Link from "next/link";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import {Search} from "lucide-react"
import Image from "next/image";
import ImageFallback from "@/components/ImageFallback";
export default async function SearchPage({searchParams}){

    const query = searchParams?.query || '';
    const lang = searchParams?.lang || '';

    const searchQuery = await fetchSearch(query, lang)

    return (
        <MaxWidthWrapper className={'max-w-screen-2xl'}>
            <div className={"mt-5 px-6 space-y-5 w-full"}>

                <h1 className={"text-2xl font-bold"}>Results for {query || <span className={"text-gray-700"}>{`"something.."`}</span>}</h1>

                <div>
                    {
                        query ? (
                            <div className="grid grid-cols-2 gap-7 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                                {searchQuery?.results?.map((movie) => (
                                    <Link href={{ pathname: `/detail/${query[0]}/${movie.id}`, query: { ...searchParams } }} key={movie.id} className="relative group">
                                        <ImageFallback
                                            width={300}
                                            height={300}
                                            alt="Movie poster"
                                            className="h-auto w-full rounded-md object-cover group-hover:opacity-50 transition-opacity"
                                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}` || NoImage}
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
                                ))}
                            </div>
                        ) : (
                            <div className={"flex flex-col py-52 items-center justify-center gap-5 font-bold text-gray-500 sm:text-2xl text-xl"}>
                                <Search className={"w-10 h-10"} />
                                <span>Search for your favorite movie</span>
                            </div>
                        )
                    }
                </div>
            </div>
        </MaxWidthWrapper>
    )

}