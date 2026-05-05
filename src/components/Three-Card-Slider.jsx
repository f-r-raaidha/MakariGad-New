"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Keyboard } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function ThreeCardSlider({ slides }) {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
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
            if (selectedIndex === null) {
                document.body.style.overflow = "";
            }
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
                    <div className="swiper-button-prev-custom absolute left-0 bottom-2/5 -translate-y-1/2 z-10"/>
                    <div className="swiper-button-next-custom absolute right-0 bottom-2/5 -translate-y-1/2 z-10"/>
                    <Swiper
                        modules={[Pagination, Navigation]}
                        spaceBetween={16}
                        navigation={{
                            prevEl: ".swiper-button-prev-custom",
                            nextEl: ".swiper-button-next-custom",
                        }}
                        pagination={{ clickable: true, dynamicBullets: true }}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        style={{
                            paddingBottom: "40px"

                        }}
                        className="thumbnail-swiper"
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide key={slide.id}>
                                {/* Fixed height container — image cropped to fill */}
                                <div
                                    className="relative h-50 rounded-2xl overflow-hidden cursor-pointer group"
                                    onClick={() => setSelectedIndex(index)}
                                >
                                    <Image
                                        src={slide.image}
                                        alt={slide.alt}
                                        fill
                                        className="relative object-cover transition-transform duration-500 group-hover:scale-105 rounded-2xl"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        loading="lazy"
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
                            pagination={{ clickable: true, dynamicBullets: true }}
                            keyboard={{ enabled: true }}
                            className="lightbox-swiper"
                        >
                            {slides.map((slide) => (
                                <SwiperSlide key={slide.id}>
                                    <div className="flex items-center justify-center h-[80vh]">

                                        <Image
                                            src={slide.image}
                                            alt={slide.alt}
                                            fill
                                            className="object-contain rounded-xl"
                                            sizes="100vw"
                                            priority={slide.id === slides[selectedIndex]?.id}
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