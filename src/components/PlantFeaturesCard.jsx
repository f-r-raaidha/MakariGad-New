import Image from "next/image";

const PlantFeaturesCard = ({ features, image }) => (
  <div className="bg-zinc-100 font-[Poppins] rounded-2xl p-6 w-full flex flex-col md:flex-row cursor-pointer hover:shadow-lg transition-shadow duration-300">
    <div className="flex flex-col justify-center mx-8">
      {features.map(({ title, body }) => (
        <div key={title}>
          <p className="text-2xl text-sky-600 font-semibold pb-3 mt-4">{title}</p>
          <p className="text-slate-500 text-sm leading-relaxed mb-5">{body}</p>
        </div>
      ))}
    </div>
    <div className="w-auto md:w-1/2 shrink-0 rounded-xl">
      <Image src={`/${image}`} width={300} height={300} alt="" className="h-48 w-full md:h-70 object-cover rounded-xl" />
    </div>
  </div>
);

export default PlantFeaturesCard;