import {SearchIcon} from "lucide-react";
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

//h-14 lg:h-16

const movieGenres = [
    "Action",
    "Comedy",
    "Drama",
    "Horror",
    "Mystery",
    "Adventure",
    "Sci-Fi",
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
export default function Navbar(){

    return (
        <div className={""}>
            <header className={" border-b border-gray-700 px-4 sm:px-6 lg:px-8"}>

                <div className={"flex items-center justify-between h-[4rem]"}>

                    <div className="sm:block hidden text-3xl font-bold tracking-tight">
                        Cinematic
                    </div>

                    <div className={"flex gap-3 sm:w-fit w-full"}>

                        <div className="relative flex-1">
                            <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" />
                            <Input
                                className="h-full w-full rounded-md bg-gray-900 pl-10 text-sm focus:outline-none"
                                placeholder="Search movies..."
                                type="search"
                            />
                        </div>

                        <Select>
                            <SelectTrigger className="h-8 sm:w-28 w-fit rounded-md bg-gray-900 sm:px-3 px-2 sm:text-sm text-xs text-gray-50">
                                <SelectValue placeholder="Language" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="en">English</SelectItem>
                                <SelectItem value="es">Español</SelectItem>
                                <SelectItem value="fr">Français</SelectItem>
                                <SelectItem value="de">Deutsch</SelectItem>
                            </SelectContent>
                        </Select>

                    </div>
                </div>
            </header>

            <nav className={"border-b border-gray-700"}>
                <ul className={"sm:text-sm text-xs flex gap-7 items-center px-6 p-2 overflow-x-auto hide-scrollbar"}>
                    {
                        movieGenres.map((genre, index) => (
                            <li key={index}>{genre}</li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    )

}


