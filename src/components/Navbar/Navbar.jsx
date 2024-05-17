import {SearchIcon} from "lucide-react";
import {Input} from "@/components/ui/input";
import "./Navbar.css"
import {movieGenres} from "@/lib/queryType";
import LanguageDropdown from "@/components/Navbar/home-tools/LanguageDropdown";
import Link from "next/link";
import SearchInput from "@/components/Navbar/home-tools/SearchInput";
import {Suspense} from "react";

//h-14 lg:h-16

export default function Navbar(){

    return (
        <div className={""}>
            <header className={"border-b border-gray-700 px-4 sm:px-6 lg:px-8"}>

                <div className={"flex items-center justify-between h-[5rem]"}>

                    <Link href={"/listing/movie"} className="sm:block hidden text-3xl font-bold tracking-tight">
                        🍿Cinematic
                    </Link>

                    <div className={"flex gap-3 sm:w-fit w-full"}>

                        <Suspense>
                            <SearchInput />
                        </Suspense>

                        <Suspense>
                            <LanguageDropdown />
                        </Suspense>

                    </div>
                </div>
            </header>

        </div>
    )

}


