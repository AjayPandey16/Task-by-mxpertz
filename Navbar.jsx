import { useEffect, useState } from "react";
import { navLinks, site } from "../lib/content.js";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 backdrop-blur border-b border-forest/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#home" className="flex items-center gap-2">
          <span className="text-2xl">🌿</span>
          <span className="font-serif text-2xl font-bold tracking-tight text-forest">
            {site.name}
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-ink/80 transition-colors hover:text-forest"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#reserve"
          className="hidden rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-cream shadow-sm transition-all hover:bg-leaf md:inline-block"
        >
          Book a Table
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-forest md:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="mx-4 mt-3 rounded-2xl border border-forest/10 bg-cream p-4 shadow-lg md:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-ink/80 hover:bg-sage hover:text-forest"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#reserve"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-full bg-forest px-4 py-3 text-center text-sm font-semibold text-cream"
              >
                Book a Table
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
