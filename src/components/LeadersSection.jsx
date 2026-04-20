"use client"
/* Leaders Page Leaders Showcase*/
import { useState, useEffect, useCallback } from "react";
import LeaderCard from "./LeadersCard";

/**
 * LeadersSection
 *
 * Renders a 3-column grid of leader cards with a bio modal on click.
 * Pass a different `leaders` array on each page — everything else is shared.
 *
 * Props:
 *   leaders  {Array}   — array of leader objects (see shape below)
 *   title    {string}  — section heading, defaults to "Meet Our Leaders"
 *
 * Leader object shape:
 * {
 *   id:     number | string,
 *   name:   string,
 *   role:   string,
 *   image:  string,   // e.g. "/team/dammika.jpg"
 *   bio:    string,   // shown in the modal
 * }
 *
 * Usage:
 *   const LEADERS = [
 *     { id: 1, name: "Dammika Nanayakkara", role: "CEO", image: "/team/dammika.jpg", bio: "..." },
 *   ];
 *   <LeadersSection leaders={LEADERS} />
 */
export default function LeadersSection({ leaders = [], title = "Meet Our Leaders" }) {
  const [selected, setSelected] = useState(null);

  const handleKeyDown = useCallback((e) => {
    if (e.key === "Escape") setSelected(null);
  }, []);

  useEffect(() => {
    if (selected) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selected, handleKeyDown]);

  return (
    <section className="w-full bg-white py-16 px-6">
      
      <div className="max-w-[900px] mx-auto flex flex-col items-center gap-10">

      {/*  {/* ── Section heading ── 
        <h2 className="text-center text-sky-500 text-3xl font-bold font-['Poppins']">
          {title}
        </h2>*/}

        {/* ── Cards grid — 3 columns, wraps to 2 or 1 on smaller screens ── */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader) => (
            <LeaderCard key={leader.id} leader={leader} onSelect={setSelected} />
          ))}
        </div>
      </div>

      {/* ── Modal overlay ── */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${selected.name} profile`}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl w-auto max-w-[700px] max-h-[95vh] overflow-y-auto flex flex-col items-center gap-5 p-8 animate-[fadeUp_0.25s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors duration-200 text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
              aria-label="Close"
            >
              ✕
            </button>

            {/* Photo */}
            <div
              className="w-32 h-32 rounded-full border-2 border-sky-400 overflow-hidden flex-shrink-0"
              style={{ background: "linear-gradient(to bottom, #bae6fd, #ffffff)" }}
            >
              <img
                src={selected.image || "https://placehold.co/128x128"}
                alt={selected.name}
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Name & role */}
            <div className="flex flex-col items-center gap-1">
              <h3 className="text-slate-800 text-xl font-semibold font-['Poppins'] text-center">
                {selected.name}
              </h3>
              <p className="text-sky-500 text-sm font-['Poppins'] whitespace-pre-line">
                {selected.role}
              </p>
            </div>

            {/* Bio */}
            <p className="text-slate-500 text-sm font-normal font-['Poppins'] text-left leading-relaxed wrap-break-words whitespace-pre-line">
              {selected.bio}
            </p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      
    </section>
  );
}
