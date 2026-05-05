import { HorizontalCard } from "@/components/CardWithImage";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { heroCard, plantFeatures, technicalDetails } from "@/data/operationData";
import TechnicalDetailsSection from "@/components/TechnicalDetailsBlock";
import PlantFeaturesCard from "@/components/PlantFeaturesCard";

const articles = [
    {
        id: 1,
        title: "Plant Operations & Power Transmission",
        description: "Water is diverted from the Makari River at an intake located about 900 m above the powerhouse, then passes through desilting and forebay tanks before entering the 3.5 km penstock that drives the turbines. \n \n Electricity generated at the powerhouse is transmitted via a 27 km, 33 kV line to the Balanch Substation, where it is connected to the Nepal National Grid through a 132 kV transmission line.",
        image: "/images/GalleryImages/p3_makariguard_10.jpg",
    }
];

const OperationPage = () => {

    return (

        <><div className="min-h-screen bg-linear-to-b bg-fixed from-neutral-200 to-sky-600/90 flex justify-center items-center py-25">


            <div className="w-full max-w-5xl flex flex-col gap-6 p-8">
                <FadeIn>
                    <HorizontalCard item={heroCard} />
                </FadeIn>
                <FadeIn>
                    <TechnicalDetailsSection {...technicalDetails} />
                </FadeIn>
                <FadeIn>
                    <PlantFeaturesCard {...plantFeatures} />
                </FadeIn>
            </div>

        </div></>


    )

}

export default OperationPage;