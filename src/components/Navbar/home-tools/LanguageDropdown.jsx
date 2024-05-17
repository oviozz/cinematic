
"use client"
import {usePathname, useRouter, useSearchParams} from 'next/navigation';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import ReactCountryFlag from "react-country-flag"

export default function LanguageDropdown() {

    const pathname = usePathname();
    const searchParams = useSearchParams()
    const router = useRouter()

    const handleLanguageChange = (value) => {
        const params = new URLSearchParams(searchParams.toString())
        params.set("lang", value)
        router.push(pathname + "?" + params.toString(), { scroll: false  })
    }

    return (
        <Select onValueChange={handleLanguageChange}>
            <SelectTrigger className="h-8 sm:w-28 w-fit rounded-md bg-gray-900 sm:px-3 px-2 sm:text-sm text-xs text-gray-50">
                <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="en"><ReactCountryFlag countryCode="US" svg /> English</SelectItem>
                <SelectItem value="ne"><ReactCountryFlag countryCode="NP" svg /> Nepali</SelectItem>
                <SelectItem value="ja"><ReactCountryFlag countryCode="JP" svg /> Japanese</SelectItem>
                <SelectItem value="ko"><ReactCountryFlag countryCode="KR" svg /> Korean</SelectItem>
            </SelectContent>
        </Select>
    );
}
