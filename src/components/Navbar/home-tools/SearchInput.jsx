
"use client"

import {SearchIcon} from "lucide-react";
import {Input} from "@/components/ui/input";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function SearchInput(){

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace, back } = useRouter();

    const handleSearch = useDebouncedCallback((term) => {

        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`/search/?${params.toString()}`);
    }, 300);

    return (
        <div className="relative flex-1">
            <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" />
            <Input
                className="h-full w-full rounded-md bg-gray-900 pl-10 text-sm focus:outline-none"
                placeholder="Search movies..."
                type="search"
                onChange={(e) => {
                    handleSearch(e.target.value);
                }}
                defaultValue={searchParams.get('query')?.toString()}
            />
        </div>
    )

}