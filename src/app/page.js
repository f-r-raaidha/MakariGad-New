import React from "react";
import HomeHeroSlider from "@/components/HomeHeroSlider";

export default function HomePage() {
    return (
        <div className="home-page w-[90%] mx-auto  border-2 caret-amber-100 bg-zinc-50 font-sans ">
            <HomeHeroSlider/>
        </div>
    );
}


// <Image
//     className="dark:invert"
//     src="/next.svg"
//     alt="Next.js logo"
//     width={100}
//     height={20}
//     priority
// />