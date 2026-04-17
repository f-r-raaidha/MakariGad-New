"use client";

import { useState, useEffect, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function ThreeCardSlider({ slides }) {
    const [selectedIndex, setSelectedIndex] = useState(null);

    // Close lightbox on Escape
    const handleKeyDown = useCallback((e) => {
        if (e.key === "Escape") setSelectedIndex(null);
    }, []);

    useEffect(() => {
        if (selectedIndex !== null) {
            document.addEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [selectedIndex, handleKeyDown]);

    return (
        <section className="w-full py-10 px-6">
            <div className="max-w-6xl mx-auto">

                <h2 className="text-sky-500 text-xl font-bold font-['Poppins'] mb-6 ml-12">
                    Our Gallery
                </h2>

                <div className="relative px-10">
                    {/* ── Thumbnail Swiper ── */}
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={16}
                        
                        pagination={{ clickable: true }}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        style={{ paddingBottom: "40px"
                        
                         }}
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide key={slide.id}>
                                {/* Fixed height container — image cropped to fill */}
                                <div
                                    className="h-55 rounded-xl overflow-hidden cursor-pointer group"
                                    onClick={() => setSelectedIndex(index)}
                                >
                                    <img
                                        src={slide.image}
                                        alt={slide.alt}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* ── Lightbox overlay ── */}
            {selectedIndex !== null && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
                    onClick={() => setSelectedIndex(null)}
                >
                    {/* Panel — stop clicks bubbling to backdrop */}
                    <div
                        className="relative w-full max-w-6xl px-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            onClick={() => setSelectedIndex(null)}
                            className="absolute -top-10 right-4 z-10 text-white/70 hover:text-white text-3xl font-light transition-colors"
                            aria-label="Close"
                        >
                            ✕
                        </button>

                        {/* ── Lightbox Swiper ── */}
                        <Swiper
                            modules={[Pagination, Navigation, Keyboard]}
                            initialSlide={selectedIndex}
                            spaceBetween={16}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            keyboard={{ enabled: true }}
                            className="lightbox-swiper"
                        >
                            {slides.map((slide) => (
                                <SwiperSlide key={slide.id}>
                                    <div className="flex items-center justify-center h-[80vh]">
                                        <img
                                            src={slide.image}
                                            alt={slide.alt}
                                            className="max-w-full max-h-full object-contain rounded-xl"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            )}

            {/* Lightbox swiper arrow + dot colours */}
    
        </section>
    );
}