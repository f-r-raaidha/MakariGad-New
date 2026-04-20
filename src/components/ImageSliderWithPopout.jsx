'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ImageGallery = () => {
    return(
        <Swiper
            spaceBetween = {50}
            slidesPerView = {3}
            navigation = {true}
            pagination  = {{clickable : true}}
            scrollbar = {{ draggable : true}}
            breakpoints={{
                        0: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
            className="w-[80%]"
            style={{
                '--swiper-navigation-color': "#ffff",
                '--swiper-pagination-color': "#ffff",
                '--swiper-pagination-bottom': "0px"
            }}
            
            modules={[Pagination, Navigation]}

        >    
        <SwiperSlide>
            <Image src="/images/CardImages/p4_makariguard_04.png" alt="image" 
            width={300}
            height={200}
            layout="responsive"/>
        </SwiperSlide>
        <SwiperSlide>
             <Image src="/images/CardImages/p4_makariguard_06.png" alt="image" 
            width={300}
            height={200}
            layout="responsive"/>
        </SwiperSlide>
        <SwiperSlide>
            <Image src="/images/CardImages/p4_makariguard_05.png" alt="image" 
            width={300}
            height={200}
            layout="responsive"/>
            
        </SwiperSlide>
        <SwiperSlide>Slide 1</SwiperSlide>
        </Swiper>
    )
}
export default ImageGallery
