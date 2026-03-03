import React from "react";
import HomeHeroSlider from "@/components/HomeHeroSlider";
import ThreeCardSlider from "@/components/Three-Card-Slider";
import IntroTextWithDescription from "@/components/IntroTextWithDescription";

// border-2 caret-amber-100 bg-zinc-50

export default function HomePage() {
    return (
        <div className="home-page w-[90%] mx-auto font-sans ">
            <HomeHeroSlider/>
            <IntroTextWithDescription/>
            <ThreeCardSlider/>
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