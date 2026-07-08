import { site } from "../lib/content.js";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80"
          alt="Bright, plant-filled restaurant interior"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/85 to-cream/30" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 lg:grid-cols-2 lg:items-center">
        <div className="animate-fade-up">
          <p className="section-eyebrow mb-5 text-xs font-semibold text-leaf">
            {site.tagline} · Est. 2014
          </p>
          <h1 className="font-serif text-5xl font-bold leading-[1.05] text-ink sm:text-6xl lg:text-7xl">
            Fresh food,
            <br />
            <span className="text-forest">grown with care.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-moss">
            Seasonal, locally-sourced plates served in a light-filled room.
            Every dish begins at the farm and ends at your table.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#reserve"
              className="rounded-full bg-forest px-7 py-3.5 text-sm font-semibold text-cream shadow-md transition-all hover:bg-leaf hover:shadow-lg"
            >
              Reserve a Table
            </a>
            <a
              href="#menu"
              className="rounded-full border border-forest/30 px-7 py-3.5 text-sm font-semibold text-forest transition-colors hover:bg-sage"
            >
              View the Menu
            </a>
          </div>

          <div className="mt-12 flex gap-10">
            <div>
              <p className="font-serif text-3xl font-bold text-forest">10+</p>
              <p className="text-sm text-moss">Years serving</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-bold text-forest">40+</p>
              <p className="text-sm text-moss">Local farms</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-bold text-forest">4.9★</p>
              <p className="text-sm text-moss">Guest rating</p>
            </div>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="relative ml-auto aspect-[4/5] w-4/5 overflow-hidden rounded-[2rem] shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80"
              alt="Plated seasonal dish"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-2 rounded-2xl bg-cream p-5 shadow-xl">
            <p className="font-serif text-lg font-semibold text-forest">
              Today&apos;s Harvest
            </p>
            <p className="text-sm text-moss">Picked this morning 🥬</p>
          </div>
        </div>
      </div>
    </section>
  );
}
