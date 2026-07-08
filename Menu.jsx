import { useState } from "react";
import { menu } from "../lib/content.js";

export default function Menu() {
  const [active, setActive] = useState(menu[0].id);
  const category = menu.find((c) => c.id === active) ?? menu[0];

  return (
    <section id="menu" className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow text-xs font-semibold text-leaf">
            Our Menu
          </p>
          <h2 className="mt-4 font-serif text-4xl font-bold text-ink sm:text-5xl">
            Made fresh, every day
          </h2>
          <p className="mt-4 text-moss">
            A seasonal selection that changes with the harvest. Here&apos;s what
            we&apos;re serving right now.
          </p>
        </div>

        {/* Category tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {menu.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActive(cat.id)}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${
                active === cat.id
                  ? "bg-forest text-cream shadow-md"
                  : "bg-sage text-forest hover:bg-forest/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Items grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {category.items.map((item) => (
            <article
              key={item.name}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-forest/5 transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {item.tag && (
                  <span className="absolute left-3 top-3 rounded-full bg-cream/95 px-3 py-1 text-xs font-semibold text-forest shadow">
                    {item.tag}
                  </span>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-serif text-xl font-semibold text-ink">
                    {item.name}
                  </h3>
                  <span className="font-serif text-xl font-bold text-forest">
                    {item.price}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-moss">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
