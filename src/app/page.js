import React from "react";
import HomeHeroSlider from "@/components/HomeHeroSlider";
import ThreeCardSlider from "@/components/Three-Card-Slider";
import HomeGradient from "../components/HomeGradient";
import { gallerySlides, heroSlides, stats, harmonyCards } from "@/data/homeData";

export default function HomePage() {
    return (
        <div className="font-sans">
            <div className="w-[90%] mx-auto font-sans pt-30">

                <HomeHeroSlider slides={heroSlides} />
            </div>
                <HomeGradient stats={stats} harmonyCards={harmonyCards} />
            <div className="w-[90%] mx-auto">
                {<ThreeCardSlider slides={gallerySlides} />}
                
            </div>
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