"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade, EffectCreative} from "swiper/modules";
import { motion } from "framer-motion";
import { useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/effect-creative";

function HomeHeroSlider() {
    const [activeIndex, setActiveIndex] = useState(0);

    const slides = [
        {
            id: 1,
            image:
                "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
            title: "Elevate Your Vision",
        },
        {
            id: 2,
            image:
                "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
            title: "Creative Digital Agency",
        },
        {
            id: 3,
            image:
                "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
            title: "Build Something Amazing",
        },
    ];

    return (
        <section className="hero-slider w-full h-[520px]">
            <Swiper
                modules={[Autoplay, Pagination, Navigation, EffectCreative]}
                effect="creative"
                creativeEffect={{                    
                    prev: {
                        shadow: true,
                        translate: ["-110%", 0, -500],
                    },
                    next: {
                        shadow: true,
                        translate: ["110%", 0, -500],
                    },
                }}
                loop
                speed={1200}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className="w-full h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative w-full h-[520px] rounded-xl overflow-hidden flex items-center justify-center">

                            {/* Animated Background */}
                            <motion.div
                                key={activeIndex === index ? "active" : "inactive"}
                                initial={{ scale: 1.2 }}
                                animate={{ scale: activeIndex === index ? 1 : 1.2 }}
                                transition={{ duration: 6, ease: "easeOut" }}
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${slide.image})` }}
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/20" />

                            {/* Animated Content */}
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, y: 60 }}
                                animate={
                                    activeIndex === index
                                        ? { opacity: 1, y: 0 }
                                        : { opacity: 0, y: 60 }
                                }
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="relative z-10 text-center px-6"
                            >
                                <h1 className="text-white text-4xl md:text-6xl font-bold tracking-wide drop-shadow-xl">
                                    {slide.title}
                                </h1>
                            </motion.div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default HomeHeroSlider;