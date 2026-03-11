"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const container = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.15 }
    }
};

const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

function HomeGradientCard() {
    const cards = [
        {
            id: 1,
            title: "Local Employment",
            desc: "Our commitment to the community reflects in 100% local staff members working in operations and over 200 people employed during the construction phase starting from 2020 to Early 2023.",
            image: "/images/briefcase.svg",
        },
        {
            id: 2,
            title: "Regional Development",
            desc: "Royalties from energy and capacity support the development of the region. We've provided infrastructure, education, health campaigns, and vital facilities to Apihimal Rural Municipality. ",
            image: "/images/up-arrow.svg",
        },
        {
            id: 3,
            title: "Empowerment Through Education",
            desc: "Skill enhancement, vocational education, and income-generating training opportunities empower stakeholders for a brighter future. ",
            image: "/images/graduate.svg",
        },
        {
            id: 4,
            title: "Environmental Sustainability",
            desc: "Makari Gad hydro power plant is started the forest conservation program by cultivating the 25,000 trees in the local area. ",
            image: "/images/globe.svg",
        },
    ];

    return (
        <div>
            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-center mb-14 text-gray-900"
            >
                Our Services
            </motion.h2>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 "
            >
                {cards.map((card) => (
                    <motion.div
                        key={card.id}
                        variants={item}
                        whileHover={{ y: -10 }}
                        className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col items-center transition"
                    >

                        <div className="p-6 flex-1 flex flex-col items-center text-center">

                            <h3 className="text-lg font-semibold mb-3 text-gray-800">
                                {card.title}
                            </h3>
                            <p className="text-sm text-gray-600 flex-1 ">
                                {card.desc}
                            </p>
                        </div>

                        <div className="relative w-[78px] h-[78px] mb-4">
                            <Image
                                src={card.image}
                                alt={card.title}
                                fill
                                className="object-cover transition-transform duration-500 hover:scale-110"
                            />
                        </div>


                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}

export default HomeGradientCard