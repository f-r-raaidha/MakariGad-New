import React from 'react';
import HomeGradientIntro from "./HomeGradientIntro";
import HomeGradientCard from "./HomeGradientCard";

const HomeGradient = () => {

    return (

        <section className="home-gradient relative w-full py-24 overflow-hidden">

            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-100 to-sky-300 -z-10" />

            <div className="max-w-7xl mx-auto px-6 space-y-28">
                {/*<HomeGradientTitle />*/}
                <HomeGradientIntro />
                {/*<HomeGradientCard />*/}
            </div>
        </section>
    );
}

export default HomeGradient;