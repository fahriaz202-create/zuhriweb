import { useEffect, useState } from "react";

const links = [
  { label: "HOME", id: "hero" },
  { label: "ABOUT", id: "about" },
  { label: "SKILLS", id: "skills" },
  { label: "PROJECTS", id: "projects" },
  { label: "CONTACT", id: "contact" },
];

export function Navbar() {
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
          ? "border-b border-[color:var(--racing-dark-red)] bg-racing-black/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8 lg:flex lg:justify-between">
        <a href="#hero" className="min-w-0 truncate font-display text-lg font-bold tracking-[0.18em]">
          FAHRI <span className="text-red-primary">AZ-ZUHRI</span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className="group relative font-mono text-xs tracking-[0.25em] text-racing-gray transition-colors hover:text-racing-white"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-red-bright transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="shrink-0 border border-[color:var(--racing-dark-red)] px-3 py-2 font-mono text-[10px] tracking-[0.25em] text-racing-gray transition-colors hover:border-red-primary hover:text-racing-white lg:hidden"
        >
          {open ? "CLOSE" : "MENU"}
        </button>
      </nav>

      {open && (
        <ul className="border-t border-[color:var(--racing-dark-red)] bg-racing-black/95 px-5 pb-5 lg:hidden">
          {links.map((l) => (
            <li key={l.id} className="border-b border-[color:var(--racing-dark-red)]/60 last:border-0">
              <a
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="block py-3.5 font-mono text-xs tracking-[0.28em] text-racing-gray hover:text-red-bright"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
