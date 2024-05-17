import {SearchIcon} from "lucide-react";
import {Input} from "@/components/ui/input";
import "./Navbar.css"
import {movieGenres} from "@/lib/queryType";
import LanguageDropdown from "@/components/Navbar/home-tools/LanguageDropdown";
import Link from "next/link";

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

                        <div className="relative flex-1">
                            <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" />
                            <Input
                                className="h-full w-full rounded-md bg-gray-900 pl-10 text-sm focus:outline-none"
                                placeholder="Search movies..."
                                type="search"
                            />
                        </div>

                        <LanguageDropdown />

                    </div>
                </div>
            </header>

        </div>
    )

}


