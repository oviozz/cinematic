
import Link from "next/link";
import {extractMovie, extractTV, movieGenres, typeQuery} from "@/lib/queryType";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Popcorn, Clapperboard } from 'lucide-react';
import LoadMore from "@/components/LoadMore";
import {fetchPopular} from "@/action/_action";


export default async function Home({params, searchParams}) {

    const { query } = params;
    const { lang } = searchParams || "en";
    const { results } = await fetchPopular(query, lang, 1);

    return (
        <main className=" w-full ">
            <nav className={"flex border-b border-gray-700"}>
                <ul className={"container sm:text-sm text-md whitespace-nowrap flex gap-7 items-center px-6 overflow-x-auto hide-scrollbar"}>
                    {
                        typeQuery(query[0]).map((genre, index) => {
                            const onPage = decodeURIComponent(query[1]) === genre
                            return (
                                <Link href={{pathname: `/listing/${query[0]}/${genre}`, query: {...searchParams}}} className={cn("hover:border-white font-bold border-t-2 p-2",onPage ? "border-white" : "border-t-gray-950")} key={index}>{genre}</Link>
                            )
                        })
                    }
                </ul>
            </nav>

            <MaxWidthWrapper className={"max-w-screen-2xl"}>
                <div className={"flex flex-col space-y-4 mt-4 px-6"}>

                    <div className={"flex justify-between items-center "}>
                        <h1 className={"text-2xl font-bold"}>{query[1] && decodeURIComponent(query[1])} {query[0] === "movie" ? "Movie" : "TV"}</h1>
                        <div className={"flex items-center gap-2"}>
                            <Link href={{ pathname: '/listing/movie', query: { ...searchParams } }}>
                                <Button className={"flex gap-1 items-center text-sm font-semibold bg-gray-900 border-2 border-gray-700 hover:bg-gray-800 text-white p-2"}>
                                    <Popcorn className={"h-4 w-4"}/>
                                    Movie
                                </Button>
                            </Link>

                            <Link href={{ pathname: '/listing/tv', query: { ...searchParams } }}>
                                <Button className={"flex gap-1 items-center text-sm font-semibold bg-gray-900 border-2 border-gray-700 hover:bg-gray-800 text-white p-2"}>
                                    <Clapperboard className={"h-4 w-4"}/>
                                    TV
                                </Button>
                            </Link>

                        </div>
                    </div>


                    <LoadMore searchParams={searchParams} initialData={results} query={query} lang={lang}/>
                </div>
            </MaxWidthWrapper>
        </main>
    );
}
