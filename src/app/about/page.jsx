import SectionHero from "@/components/SectionHero";
{/*import ThreeCardSlider from "@/components/Three-Card-Slider";*/}
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

{/*const gallerySlides = [
    {
        id: 1,
        image: "/images/CardImages/p4_makariguard_04.png", alt: ""
    },
    {
        id: 2,
        image: "/images/CardImages/p4_makariguard_05.png", alt: ""
    },
    {
        id: 3,
        image: "/images/CardImages/p4_makariguard_06.png", alt: ""
    },
    {
        id: 4,
        image: "/images/CardImages/p4_makariguard_09.png", alt: ""
    },
    {
        id: 5,
        image: "/images/CardImages/p4_makariguard_06.png", alt: ""
    },
    {
        id: 6,
        image: "/images/CardImages/p4_makariguard_06.png", alt: ""
    },

];*/}


const AboutPage = () => {


    return (
        <><SectionHero title="About Us" backgroundImage="/images/CardImages/p4_makariguard_14.png" />


            <div className="w-full bg-zinc-100 pt-10 py-6 md:py-10">
                <FadeIn>
                <div className="flex flex-col lg:flex-row pt-0 justify-center items-center md:pl-2">
                    
                    <div className="flex-1 font-[Poppins] items-center p-6">
                        <h3 className="font-[Poppins] font-semibold text-center mb-4 text-sky-600 items-center text-wrap">Empowering Futures Through Sustainable Energy</h3>
                        <br />
                        <p className="font-[Poppins] text-sm text-center md:text-base font-normal mb-4 px-5 md:px-10 text-gray-400 whitespace-pre-line">Makari Gad Hydropower (Pvt) Ltd. is backed by LTL Energy (Pvt) Ltd., a Sri Lankan private limited company jointly owned by LTL Holdings (55%) and LVL Energy Fund (45%).
                            <br /> <br /> We are driven by a clear purpose: to deliver reliable renewable energy while respecting the environment and the communities we work with. Sustainability and responsible development are central to every decision we make.
                        </p>
                    </div>
                    <div className="flex-1 font-[Poppins] justify-center items-center max-w-xl mx-10 bg-blue-300 p-6 mb-10 md:px-5 rounded-2xl w-[350px] md:w-full">
                        <Image
                            src="/images/CardImages/p4_makariguard_19.png"
                            alt=""
                            width={0}
                            height={0}
                            sizes="400vw md:100vw"
                            className="object-contain rounded-2xl w-full h-full"
                        ></Image>

                    </div>
                   

                </div>
                 </FadeIn>
                <FadeIn>
                <h2 className="font-[Poppins] font-semibold text-center mb-4 text-white px-10 md:px-36 py-6 md:py-10 bg-linear-to-r from-blue-200 via-blue-400 to-sky-500" >Our Vision - <br />
                    To be a benchmark in sustainable hydropower—delivering clean energy that powers progress while protecting nature and empowering communities
                    </h2>
                    </FadeIn>

                <FadeIn>
                <div className="flex flex-col lg:flex-row pt-10 justify-center items-center md:pr-2 bg-zinc-100">
                    
                    <div className="flex-1 font-[Poppins] justify-center items-center max-w-xl mx-10 bg-blue-300 p-6 mb-10 md:px-5 rounded-2xl w-[350px] md:w-full">
                        <Image
                            src="/images/CardImages/p4_makariguard_19.png"
                            alt=""
                            width={0}
                            height={0}
                            sizes="400vw md:100vw"
                            className="object-contain rounded-2xl w-full h-full"
                        ></Image>

                    </div>
                    <div className=" lg:max-w-xl items-center justify-self-center flex-1 p-6">
                        <h3 className="font-[Poppins] font-semibold text-center mb-4 text-sky-600 items-center text-wrap">Where We Are</h3>
                        <p className="text-center text-sm md:text-base font-normal text-gray-400 font-[Poppins] px-5 md:px-10">
                            LTL Energy (Pvt) Ltd. is headquartered in Sri Lanka, while the Makari Gad Hydropower Project is located in Nepal. <br /><br />
                            The project sits in Makarigad village, Apihimal Rural Municipality (Ward No. 5), within the Darchula District of Sudurpaschim Province. Approximately 960 km northwest of Kathmandu, the site is accessible by road and strategically positioned for long-term operations. < br />< br />
                            This high-head, run-of-the-river hydropower project harnesses the natural flow of the Makari Gad stream, a key tributary of the Chameliya River in the Mahakali River basin. The result is clean energy generation that works with nature—not against it.
                        </p>
                    </div>
                   
                    
                
                </div>
                 </FadeIn>
                {/*<div className="w-[90%] mx-auto">
                    {<ThreeCardSlider slides={gallerySlides} />}
                </div>
                <div className="w-[90%] mx-auto">
                </div>*/}
            </div></>
    )

}

export default AboutPage;