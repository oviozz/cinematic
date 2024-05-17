
"use client"

import { LiaSpinnerSolid } from "react-icons/lia";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { fetchPopular } from "@/action/_action";
import Link from "next/link";

export default function LoadMore({initialData, query, lang, searchParams }) {

    const [currentPage, setCurrentPage] = useState(2);
    const [data, setData] = useState([...initialData]);
    const { ref, inView } = useInView();

    useEffect(() => {
        setData([])
        setCurrentPage(1);
    }, [lang, query]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetchPopular(query, lang, currentPage);
                console.log(res.results)
                setData((prevData) => [...prevData, ...res.results]);
                setCurrentPage((prevPage) => prevPage + 1);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        if (inView) {
            fetchData();
        }
    }, [inView, lang, query, currentPage]);

    return (
        <>
            <div className="grid grid-cols-2 gap-7 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {data?.map((movie) => (
                    <Link href={{ pathname: `/detail/${query[0]}/${movie.id}`, query: { ...searchParams } }} key={movie.id} className="relative group">
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
                ))}
            </div>

            <div ref={ref}>
                <LiaSpinnerSolid className="mx-auto w-12 h-12 animate-spin" />
            </div>
        </>
    );
}
