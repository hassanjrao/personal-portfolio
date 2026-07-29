export default function PageHero({
  badge,
  heading,
  subheading,
  children,
}: {
  badge: string;
  heading: string;
  subheading?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 px-4 border-b border-white/8">
      <div className="absolute inset-0 grid-bg" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_0%,rgba(34,211,238,0.13)_0%,transparent_60%)]"
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <span className="inline-block px-4 py-1.5 mb-5 text-xs font-medium uppercase tracking-wider text-cyan-300 border border-cyan-400/25 rounded-full bg-cyan-400/10">
          {badge}
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
          <span className="gradient-text">{heading}</span>
        </h1>
        {subheading && (
          <p className="mt-5 text-slate-400 leading-relaxed">{subheading}</p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
