export default function SectionHeader({
  badge,
  heading,
  subheading,
  align = "center",
}: {
  badge?: string;
  heading: string;
  subheading?: string;
  align?: "center" | "start";
}) {
  const isCenter = align === "center";

  return (
    <div className={`mb-14 ${isCenter ? "text-center" : ""}`}>
      {badge && (
        <span className="inline-block px-4 py-1.5 mb-4 text-xs font-medium uppercase tracking-wider text-cyan-300 border border-cyan-400/25 rounded-full bg-cyan-400/10">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
        {heading}
      </h2>
      {subheading && (
        <p
          className={`mt-4 text-slate-400 leading-relaxed max-w-2xl ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          {subheading}
        </p>
      )}
    </div>
  );
}
