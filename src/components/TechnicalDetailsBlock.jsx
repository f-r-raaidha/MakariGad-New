import Image from "next/image";

const TechnicalDetailsSection = ({ specs, turbineTitle, turbineBody, perfTitle, perfBody, image }) => (
  <div className="flex flex-col md:flex-row gap-6">
    <div className="bg-zinc-100 rounded-2xl p-6 flex-1 font-[Poppins]">
      <div className="mx-8">
        <p className="text-2xl text-sky-600 font-semibold pb-3 mt-4">Plant Technical Details</p>
        <ul className="space-y-2 text-sm text-gray-400 list-disc list-inside">
          {specs.map(({ label, value }) => (
            <li key={label}>
              {label}
              <ul className="ps-5 mt-0 list-disc list-inside text-stone-950">
                <li>{value}</li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="bg-zinc-100 rounded-2xl p-6 flex-1 font-[Poppins]">
      <div className="mx-8">
        <p className="text-2xl text-sky-600 font-semibold pb-3 mt-4">{turbineTitle}</p>
        <p className="text-slate-500 text-sm leading-relaxed mb-5">{turbineBody}</p>
        <p className="text-2xl text-sky-600 font-semibold pb-3 mt-4">{perfTitle}</p>
        <p className="text-slate-500 text-sm leading-relaxed mb-5">{perfBody}</p>
      </div>
      <Image src={`/${image}`} width={300} height={300} alt="" className="h-48 w-full md:h-60 object-cover rounded-xl object-bottom" />
    </div>
  </div>
);

export default TechnicalDetailsSection;