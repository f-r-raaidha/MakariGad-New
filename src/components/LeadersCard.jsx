"use client"

/**
 * LeaderCard
 *
 * Single card — gradient background, photo, name, role.
 * Clicking anywhere on the card fires onSelect(leader).
 *
 * Props:
 *   leader    {object}  — { id, name, role, image, bio }
 *   onSelect  {func}    — called with the leader object when clicked
 */
export default function LeaderCard({ leader, onSelect }) {
  return (
    <div
      className="flex flex-col items-center gap-3 cursor-pointer group transition-transform duration-300 hover:-translate-y-1"
      onClick={() => onSelect(leader)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onSelect(leader)}
      aria-label={`View profile of ${leader.name}`}
    >
      {/* ── Photo card ── */}
      <div
        className="w-full rounded-2xl overflow-hidden border-2 border-sky-400 shadow-sm"
        style={{
          background: "linear-gradient(to bottom, #bae6fd 0%, #ffffff 100%)",
          aspectRatio: "3 / 3.6",
        }}
      >
        <img
          src={leader.image}
          alt={leader.name}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* ── Name & role ── */}
      <div className="flex flex-col items-center gap-0.5 pb-2">
        <button
          className="text-center text-Color-text-primery text-base font-semibold font-['Poppins'] hover:text-sky-600 transition-colors duration-200 focus:outline-none focus-visible:underline"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(leader);
          }}
        >
          {leader.name}
        </button>
        <span className="text-center text-Color-text-secondary text-sm font-normal font-['Poppins']">
          {leader.role}
        </span>
      </div>
    </div>
  );
}