"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import { useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

function SlideBackground({ image, animationKey }) {
    return (
        <motion.div
            key={animationKey}
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 12, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
        />
    );
}

function HomeHeroSlider({ slides }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animationKeys, setAnimationKeys] = useState(slides.map(() => 0));

    const handleSlideChange = (swiper) => {
        const newIndex = swiper.realIndex;
        setAnimationKeys((prev) => {
            const updated = [...prev];
            updated[newIndex] += 1;
            return updated;
        });
        setActiveIndex(newIndex);
    };

    return (
        <section className="hero-slider rounded-2xl w-full h-[520px]">
            <Swiper
                modules={[Autoplay, Pagination, Navigation, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                loop
                speed={1300}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation
                onSlideChange={handleSlideChange}
                className="w-full h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative w-full h-[520px] overflow-hidden flex items-center justify-center rounded-2xl">

                            <SlideBackground
                                image={slide.image}
                                animationKey={animationKeys[index]} 
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/20" />

                            {/* Animated Content */}
                            <motion.div
                                key={`content-${activeIndex}`}
                                initial={{ opacity: 0, y: 60 }}
                                animate={
                                    activeIndex === index
                                        ? { opacity: 1, y: 0 }
                                        : { opacity: 0, y: 60 }
                                }
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="relative z-10 text-center px-6 max-w-3xl mx-auto"
                            >
                                <h1 className="text-white tracking-wide drop-shadow-xl ">
                                    {slide.title}
                                </h1>
                                <p className="text-white/85 mt-4 drop-shadow-md font-[Poppins] ">
                                    {slide.description}
                                </p>
                            </motion.div>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default HomeHeroSlider;