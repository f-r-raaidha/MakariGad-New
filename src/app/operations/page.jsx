import { HorizontalCard } from "@/components/CardWithImage";
import Image from "next/image";

const articles = [
    {
        id: 1,
        title: "Plant Operations & Power Transmission",
        description: "Water is diverted from the Makari River at an intake located about 900 m above the powerhouse, then passes through desilting and forebay tanks before entering the 3.5 km penstock that drives the turbines. \n \n Electricity generated at the powerhouse is transmitted via a 27 km, 33 kV line to the Balanch Substation, where it is connected to the Nepal National Grid through a 132 kV transmission line.",
        image: "images/CardImages/p4_makariguard_10.png",
    }
];

const OperationPage = () => {

    return (

        <><div className="min-h-screen bg-linear-to-b bg-fixed from-neutral-200 to-sky-600/90 flex justify-center items-center py-25">

            <div className="w-full max-w-5xl flex flex-col gap-6 p-8">
                {articles.map((item) => (
                    <HorizontalCard key={item.id} item={item} />
                ))}
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="bg-zinc-100 rounded-2xl p-6 flex-1">
                        <div className="mx-8">
                            <p className="text-2xl text-sky-600 font-semibold pb-3 mt-4">Plant Technical Details</p>
                            <ul className="space-y-2 text-sm text-gray-400 list-disc list-inside">
                                <li>
                                    Design Head
                                    <ul className="ps-5 mt-0 space-y-0 list-disc list-inside text-stone-950">
                                        <li>882 m</li>
                                    </ul>
                                </li>
                                <li>
                                    Design Flow
                                    <ul className="ps-5 mt-0 space-y-1 list-disc list-inside text-stone-950">
                                        <li>1.35 m³/2</li>
                                    </ul>
                                </li>
                                <li>
                                    Catchment Area
                                    <ul className="ps-5 mt-0 space-y-1 list-disc list-inside text-stone-950">
                                        <li>37.8 Km²</li>
                                    </ul>
                                </li>
                                <li>
                                    Turbine Capacity
                                    <ul className="ps-5 mt-0 space-y-1 list-disc list-inside text-stone-950">
                                        <li>5 MW each (x2)</li>
                                    </ul>
                                </li>
                                <li>
                                    Turbine Type/Model
                                    <ul className="ps-5 mt-0 space-y-1 list-disc list-inside text-stone-950">
                                        <li>Pelton</li>
                                    </ul>
                                </li>
                                <li>
                                    Installed Capacity
                                    <ul className="ps-5 mt-0 space-y-1 list-disc list-inside text-stone-950">
                                        <li>10 MW</li>
                                    </ul>
                                </li>
                                <li>
                                    Plant Factor
                                    <ul className="ps-5 mt-0 space-y-1 list-disc list-inside text-stone-950">
                                        <li>79%</li>
                                    </ul>
                                </li>
                                <li>
                                    Energy Generation
                                    <ul className="ps-5 mt-0 space-y-1 list-disc list-inside text-stone-950">
                                        <li>69.76 GWh/Year</li>
                                    </ul>
                                </li>
                                <li>
                                    Electrical Grid Connection
                                    <ul className="ps-5 mt-0 space-y-1 list-disc list-inside text-stone-950">
                                        <li>132 kV/50Hz</li>
                                    </ul>
                                </li>
                                <li>
                                    Electromechanical Equipment Supplier
                                    <ul className="ps-5 mb-3 mt-0 space-y-1 list-disc list-inside text-stone-950">
                                        <li>WKV Hydro - Germany</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="bg-zinc-100 rounded-2xl p-6 flex-1">
                        <div className="mx-8">
                            <p className="text-2xl text-sky-600 font-semibold pb-3 mt-4">Advanced Turbine Technology</p>
                            <p className="text-slate-500 text-sm font-normal font-[Poppins] text-left leading-relaxed wrap-break-words whitespace-pre-line mb-5">
                                German-engineered Pelton turbines designed for high-head, low-flow conditions, delivering efficient energy conversion in harmony with nature.
                            </p>
                            <p className="text-2xl text-sky-600 font-semibold pb-3 mt-4">Optimised for Performance</p>
                            <p className="text-slate-500 text-sm font-normal font-[Poppins] text-left leading-relaxed wrap-break-words whitespace-pre-line mb-5">
                                A streamlined design with fewer components ensures high efficiency, low maintenance, and reduced downtime.
                            </p>
                        </div>
                        <Image src="/images/CardImages/p4_makariguard_10.png" width={300} height={300} alt="" className="h-48 w-full md:h-60 object-cover rounded-xl " />
                    </div>


                </div>
                <div className="bg-zinc-100 rounded-2xl p-6 w-full max-w-5xl flex flex-col md:flex-row cursor-pointer hover:shadow-lg transition-shadow duration-300">
                    <div className="flex flex-col justify-center mx-8">
                        <p className="text-2xl text-sky-600 font-semibold pb-3 mt-4">High Plant Factor</p>
                        <p className="text-slate-500 text-sm font-normal font-[Poppins] text-left leading-relaxed wrap-break-words whitespace-pre-line mb-5">
                            Operating at a plant factor of nearly 80%, the facility delivers consistent and reliable power.
                        </p>
                        <p className="text-2xl text-sky-600 font-semibold pb-3 mt-4">Automated & Remotely Monitored</p>
                        <p className="text-slate-500 text-sm font-normal font-[Poppins] text-left leading-relaxed wrap-break-words whitespace-pre-line mb-5">
                            Fully automated systems with remote monitoring ensure safe, responsive, and reliable operations.
                        </p>
                        </div>
                        <div className="w-auto md:w-1/2 shrink-0 rounded-xl">
                        <Image src="/images/CardImages/p4_makariguard_10.png" width={300} height={300} alt="" className="h-48 w-full md:h-70 object-cover rounded-xl " />

                        </div>
                    </div>
                </div>
        </div></>


    )

}

export default OperationPage;