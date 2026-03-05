"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function CardSlider() {

    const cards = [
        {
            id: 1,
            title: "Creative Design",
            desc: "Modern and clean designs built for performance.",
            image:
                "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
        },
        {
            id: 2,
            title: "Development",
            desc: "Scalable and high-quality code architecture.",
            image:
                "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        },
        {
            id: 3,
            title: "Marketing",
            desc: "Smart digital strategies that convert users.",
            image:
                "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        },
        {
            id: 4,
            title: "Branding",
            desc: "Build a strong and memorable brand identity.",
            image:
                "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
        },
    ];

    return (
        <section className="three-card-slider w-full  py-5 flex flex-col">


            <h2 className={""}>Our Gallery</h2>

            <div className=" mx-auto  w-full">

                <Swiper
                    modules={[Pagination]}
                    spaceBetween={30}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {cards.map((card) => (
                        <SwiperSlide key={card.id}>
                            <div className="  overflow-hidden h-[327px] flex flex-col transition duration-300 hover:shadow-xl">

                                {/* Image */}
                                <div
                                    className="h-[280px] bg-cover bg-center"
                                    style={{ backgroundImage: `url(${card.image})` }}
                                ></div>

                                {/* Content */}
                                {/*<div className="flex-1 p-6 flex flex-col justify-between">*/}
                                {/*    <div>*/}
                                {/*        <h3 className="text-xl font-semibold mb-3">*/}
                                {/*            {card.title}*/}
                                {/*        </h3>*/}
                                {/*        <p className="text-gray-600 text-sm">*/}
                                {/*            {card.desc}*/}
                                {/*        </p>*/}
                                {/*    </div>*/}

                                {/*    <button className="mt-6 bg-black text-white py-2 px-4 rounded-lg text-sm hover:bg-gray-800 transition">*/}
                                {/*        Learn More*/}
                                {/*    </button>*/}
                                {/*</div>*/}

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    );
}

export default CardSlider;