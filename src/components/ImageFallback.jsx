
"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import NoImage from "/public/no-image.png"

export default function ImageFallback({ src, fallbackSrc, ...rest }) {

    const [imgSrc, set_imgSrc] = useState(src);

    useEffect(() => {
        set_imgSrc(src);
    }, [src]);

    return (
        <Image
            alt={imgSrc}
            {...rest}
            src={imgSrc}
            onError={() => {
                set_imgSrc(NoImage);
            }}
        />
    );
}