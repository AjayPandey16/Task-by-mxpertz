import { highlights } from "../lib/content.js";

export default function About() {
  return (
    <section id="about" className="bg-sage/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Images */}
          <div className="relative">
            <div className="relative aspect-[4/5] w-3/4 overflow-hidden rounded-[2rem] shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80"
                alt="Chef plating a dish in the kitchen"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 aspect-square w-1/2 overflow-hidden rounded-[2rem] border-8 border-cream shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1595475207225-428b62bda831?auto=format&fit=crop&w=700&q=80"
                alt="Fresh vegetables from the market"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Copy */}
          <div>
            <p className="section-eyebrow text-xs font-semibold text-leaf">
              Our Story
            </p>
            <h2 className="mt-4 font-serif text-4xl font-bold text-ink sm:text-5xl">
              A kitchen rooted in the seasons
            </h2>
            <p className="mt-6 leading-relaxed text-moss">
              Verde began with a simple belief: great food starts with great
              ingredients. What began as a small farm-stand kitchen has grown
              into a beloved neighborhood table — but our philosophy hasn&apos;t
              changed. We cook with what&apos;s in season, source from farmers we
              know by name, and let the produce speak for itself.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {highlights.map((h) => (
                <div key={h.title}>
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-forest/10 text-forest">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-ink">
                    {h.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-moss">
                    {h.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
