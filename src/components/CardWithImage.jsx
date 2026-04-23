"use client";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

export function HorizontalCard({ item }) {
  return (
    <Card className="w-full max-w-5xl flex flex-col md:flex-row  p-0 pb-6 px-6 md:pt-3 cursor-pointer hover:shadow-lg transition-shadow duration-300 bg-zinc-100">
      {/* ── Left: Text content ── */}
      <CardBody className="flex flex-col justify-center pr-6">
        <Typography variant="" color="" className="text-2xl mb-2 font-[Poppins] justify-center text-sky-600 font-semibold">
          {item.title}
        </Typography>
        <Typography color="gray" className="text-slate-500 text-sm font-normal font-['Poppins'] text-left leading-relaxed wrap-break-words whitespace-pre-line">
          {item.description}
        </Typography>
      </CardBody>

      {/* ── Right: Image with gap from card edge ── */}
      <CardHeader
        shadow={false}
        floated={false}
        className="w-auto md:w-1/2 shrink-0 rounded-xl"
      >
        <img
          src={item.image}
          alt={item.title}
          className="h-48 w-full md:h-80 object-cover rounded-xl"
        />
      </CardHeader>
    </Card>
  );
}