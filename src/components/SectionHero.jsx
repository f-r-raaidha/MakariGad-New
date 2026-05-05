export default function SectionHero({ title, backgroundImage, overlayOpacity = 30 }) {
  return (
    <section
      className="relative w-full h-[500px] overflow-hidden"
      aria-label={title}
    >
      {/* ── Background image — fills full screen width ── */}
      {backgroundImage ? (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-top bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      ) : (
        <div className="absolute inset-0 bg-linear-to-br from-slate-800 via-slate-700 to-slate-900" />
      )}

      {/* ── Subtle dark overlay for legibility ── */}
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity / 100 }}
      />

      {/* ── Title centred vertically and horizontally ── */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1
          className="text-center text-white text-5xl font-medium font-['Poppins'] leading-[61.60px] tracking-wide"
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