import type { JSX } from "react";
import { pageCache } from "../cache/cache";

interface CachePageProps {
     id: string, 
     children: JSX.Element
}

export function CachePage(props: CachePageProps) {
    const {id, children} = props

    const cached = pageCache.get(id);
console.log(cached)
    if (cached) {
        console.log('cached')
        return cached;
    }

    pageCache.set(id, children);
    return children;
}
