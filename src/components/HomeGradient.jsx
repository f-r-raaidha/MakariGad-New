import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export default function HomeGradient({ stats, harmonyCards }) {
    return (
        <section className="relative w-full overflow-hidden">

            {/* Continuous gradient: white → light sky → deeper sky */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-100 to-sky-300 -z-10" />

            <div className="max-w-4xl mx-auto px-4 py-16 flex flex-col items-center gap-10">

                {/* ── 1. Intro heading + paragraph ── */}
                <FadeIn>
                    <div className="text-center flex flex-col items-center gap-4 max-w-4xl">
                        <h2 className="text-sky-500 text-2xl md:text-3xl font-bold font-['Poppins'] leading-snug">
                            Harnessing Nature&#39;s Power for a Sustainable Future
                        </h2>
                        <p className="text-gray-500 text-sm md:text-base font-['Poppins'] leading-relaxed">
                            Makari Gad Hydro Power Plant, a visionary initiative that taps into the energy of
                            flowing water to create a cleaner, greener future. Explore the marvels of renewable
                            energy and discover how we&#39;re investing in innovation to power generations to come.
                        </p>
                    </div>
                </FadeIn>

                {/* ── 2. Stats row ── */}
                <FadeIn delay={0.1}>
                    <div className="w-full flex flex-col sm:flex-row justify-center items-center divide-y sm:divide-y-0 sm:divide-x divide-sky-200">
                        {stats.map((stat) => (
                            <div key={stat.id} className="flex flex-col items-center text-center px-10 py-4">
                                <span className="text-sky-600 text-4xl md:text-5xl font-bold font-['Poppins']">
                                    {stat.value}
                                </span>
                                <span className="text-sky-400 text-sm font-semibold font-['Poppins'] mt-1">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </FadeIn>

                {/* ── 3. QEHS — white card with rounded corners ── */}
                <FadeIn delay={0.2}>
                    <div className="bg-white rounded-3xl shadow-sm text-center px-10 py-5 w-full max-w-5xl">
                        <h3 className="text-sky-500 text-xl md:text-2xl font-bold font-['Poppins'] mb-4">
                            Quality, Environment, Health and Safety
                        </h3>
                        <p className="text-gray-500 text-sm md:text-base font-['Poppins'] leading-relaxed">
                            We are committed to continuous improvement of Quality, Environment, Health and Safety
                            performance of its operations by benchmarking with best-in-class standards. We stay
                            focused on attaining and maintaining the highest standards of Quality, Environment,
                            Health and Safety in selection, design, procurement, construction, operation and
                            maintenance of assets across their life cycle.
                        </p>
                    </div>
                </FadeIn>

                {/* ── 4. Environmental Harmony — title + 4-column card ── */}
                <FadeIn delay={0.3}>
                    <div className="w-full flex flex-col items-center gap-6">

                        {/* Section title */}
                        <h2 className="text-sky-600 text-2xl md:text-3xl font-bold font-['Poppins'] text-center">
                            Our Environmental Harmony
                        </h2>

                        {/* Single white card containing all 4 columns */}
                        <div className="w-full bg-white rounded-3xl shadow-sm p-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                {harmonyCards.map((card) => (
                                    <div key={card.id} className="flex flex-col items-center gap-3">

                                        {/* Column heading */}
                                        <h4 className="text-sky-600 text-sm font-semibold font-['Poppins']">
                                            {card.title}
                                        </h4>

                                        {/* Paragraph */}
                                        <p className="text-gray-500 text-xs  font-['Poppins'] leading-relaxed flex-1">
                                            {card.desc}
                                        </p>

                                        {/* Icon */}
                                        <div className="relative w-14 h-14 mt-4 justify-center items-center">
                                            <Image
                                                src={card.image}
                                                alt={card.title}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>

                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </FadeIn>

            </div>
        </section>
    );
}