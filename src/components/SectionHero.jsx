"use client";

/**
 * SectionHero
 *
 * A full-width hero banner with a centred title over a background image.
 * No blur overlay — just the title with a soft glow effect around the letters.
 *
 * Usage:
 *   <SectionHero title="Our Leaders" backgroundImage="/images/team-bg.jpg" />
 *   <SectionHero title="Our Mission" backgroundImage="/images/mission-bg.jpg" />
 *
 * Props:
 *   title            {string}  — The heading displayed in the banner (required)
 *   backgroundImage  {string}  — Optional full-bleed background image URL
 *   overlayOpacity   {number}  — Optional dark overlay strength 0–100 (default: 30)
 */
export default function SectionHero({ title, backgroundImage, overlayOpacity = 30 }) {
  return (
    <section
      className="relative w-full h-[563px] overflow-hidden"
      aria-label={title}
    >
      {/* ── Background image — fills full screen width ── */}
      {backgroundImage ? (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900" />
      )}

      {/* ── Subtle dark overlay for legibility ── */}
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity / 100 }}
      />

      {/* ── Title centred vertically and horizontally ── */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1
          className="
            text-center text-white
            text-6xl font-medium
            font-['Poppins'] leading-[61.60px]
            tracking-wide
          "
          style={{
            textShadow: `
              0 0 20px rgba(255,255,255,0.2),
              0 0 40px rgba(255,255,255,0.2),
              0 0 80px rgba(255,255,255,0.2)
            `,
          }}
        >
          {title}
        </h1>
      </div>
    </section>
  );
}