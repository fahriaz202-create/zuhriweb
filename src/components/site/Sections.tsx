import { Reveal } from "./Reveal";
import { skills, projects, journey, contacts } from "./data";
import fahri from "@/assets/fahri.png.asset.json";

function SectionHead({ no, title }: { no: string; title: string }) {
  return (
    <div className="flex flex-wrap items-end gap-x-6 gap-y-2">
      <span className="section-label">{no} —</span>
      <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">{title}</h2>
      <span className="mb-2 hidden h-px flex-1 bg-gradient-to-r from-[color:var(--racing-red)] to-transparent sm:block" />
    </div>
  );
}

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" />
      <div className="diagonal-lines pointer-events-none absolute inset-y-0 right-0 w-1/3 opacity-30" />
      <div
        className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full opacity-25 blur-[120px]"
        style={{ background: "var(--racing-red)" }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 animate-flicker bg-red-bright" />
                <span className="section-label">01 — Designer Profile</span>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 font-display text-[clamp(2.75rem,9vw,6.5rem)] font-bold leading-[0.92] tracking-tight">
                FAHRI
                <br />
                <span className="text-red-primary">AZ-ZUHRI</span>
              </h1>
            </Reveal>

            <Reveal delay={150}>
              <div className="mt-6 flex items-center gap-4">
                <span className="red-rule w-10 shrink-0" />
                <p className="font-mono text-[0.7rem] tracking-[0.25em] text-racing-gray sm:text-xs">
                  GRADE 12 STUDENT • 3D DESIGNER • INDUSTRIAL DESIGN
                </p>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-racing-gray sm:text-lg">
                SMA student focused on 3D modelling and industrial design — building vehicles,
                products, and environments in Blender and Cinema 4D.

              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="group relative overflow-hidden border border-[color:var(--racing-red)] px-7 py-3.5 font-mono text-xs tracking-[0.25em] text-racing-white transition-shadow hover:shadow-[var(--glow-red)]"
                >
                  <span className="absolute inset-0 -translate-x-full bg-[image:var(--gradient-red)] transition-transform duration-300 group-hover:translate-x-0" />
                  <span className="relative">VIEW 3D WORKS</span>

                </a>
                <a
                  href="#contact"
                  className="border border-[color:var(--racing-dark-red)] px-7 py-3.5 font-mono text-xs tracking-[0.25em] text-racing-gray transition-colors hover:border-red-primary hover:text-racing-white"
                >
                  CONTACT ME
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="tele-card relative mx-auto w-full max-w-sm p-5">
              <span className="absolute inset-x-0 top-0 h-px animate-sweep bg-[image:var(--gradient-red)] opacity-70" />
              <div className="relative overflow-hidden border border-[color:var(--racing-dark-red)] bg-racing-surface">
                <img
                  src={fahri.url}
                  alt="Portrait of Fahri Az-Zuhri"
                  className="aspect-square w-full object-cover"
                  loading="eager"
                />
                <span className="pointer-events-none absolute inset-x-0 top-0 h-16 animate-tele-scan bg-gradient-to-b from-transparent via-[color:var(--racing-red)]/25 to-transparent" />
              </div>
              <dl className="mt-5 grid grid-cols-3 gap-3 font-mono text-[0.6rem] tracking-[0.18em]">
                {[
                  ["STATUS", "ACTIVE"],
                  ["FOCUS", "3D / DESIGN"],
                  ["BORN", "12/07/2008"],
                ].map(([k, v]) => (
                  <div key={k} className="border-l border-[color:var(--racing-red)] pl-2">
                    <dt className="text-racing-gray">{k}</dt>
                    <dd className="mt-1 text-racing-white">{v}</dd>
                  </div>
                ))}
              </dl>

            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="relative border-t border-[color:var(--racing-dark-red)] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHead no="02" title="ABOUT ME" />
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[auto_1fr] lg:gap-20">
          <Reveal>
            <span className="deco-number block text-[clamp(6rem,18vw,14rem)]">02</span>
          </Reveal>

          <div className="max-w-2xl">
            <Reveal delay={100}>
              <p className="text-lg leading-relaxed text-racing-white/90">
                I am a grade 12 high school student, born 12/07/2008, focused on 3D modelling and
                industrial design. Most of my time goes into Blender — modelling vehicles, products,
                and interior environments, then lighting and rendering them until the form reads
                exactly as intended.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-6 leading-relaxed text-racing-gray">
                My interest is industrial design: shapes that are not only good looking but buildable
                — proportion, panel lines, materials, and function. Alongside that I train my
                communication in English and Arabic, plus public speaking, because a design is only
                as strong as the way you present it.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <ul className="mt-10 grid gap-3 sm:grid-cols-2">
                {[
                  ["FOCUS", "3D MODELLING (BLENDER)"],
                  ["FOCUS", "INDUSTRIAL DESIGN"],
                  ["FOCUS", "RENDERING & LIGHTING"],
                  ["BORN", "12 JULY 2008"],
                ].map(([k, v]) => (
                  <li key={v} className="tele-card px-4 py-3.5">
                    <span className="font-mono text-[0.6rem] tracking-[0.25em] text-red-bright">{k}</span>
                    <p className="mt-1 font-display text-sm tracking-[0.12em]">{v}</p>
                  </li>
                ))}
              </ul>
            </Reveal>

          </div>
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      className="relative border-t border-[color:var(--racing-dark-red)] py-24 sm:py-32"
      style={{ background: "var(--gradient-fade)" }}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHead no="03" title="SKILLS" />
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <Reveal key={s.name} delay={i * 60}>
              <article className="tele-card group h-full p-6">
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-xs tracking-[0.2em] text-red-primary">{s.no}</span>
                  <span className="h-1.5 w-1.5 bg-[color:var(--racing-dark-red)] transition-colors group-hover:bg-red-bright" />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold tracking-[0.08em]">{s.name}</h3>
                <p className="mt-2 font-mono text-[0.65rem] tracking-[0.22em] text-racing-gray">{s.tags}</p>
                <span className="mt-6 block h-px w-full bg-[color:var(--racing-dark-red)] transition-colors group-hover:bg-[color:var(--racing-red)]" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative border-t border-[color:var(--racing-dark-red)] py-24 sm:py-32">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-25" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHead no="04" title="3D WORKS" />
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.no} delay={i * 70}>
              <article className="tele-card h-full overflow-hidden">
                <div className="relative overflow-hidden border-b border-[color:var(--racing-dark-red)]">
                  <img
                    src={p.image}
                    alt={p.alt}
                    loading="lazy"
                    className="aspect-video w-full object-cover transition-transform duration-500 hover:scale-[1.04]"
                  />
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-racing-black/70 to-transparent" />
                </div>
                <div className="p-7">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-[0.65rem] tracking-[0.25em] text-red-bright">
                      WORK {p.no}
                    </span>
                    <span className="font-mono text-[0.6rem] tracking-[0.2em] text-racing-gray">
                      // 3D
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold tracking-[0.06em]">{p.name}</h3>
                  <p className="mt-3 leading-relaxed text-racing-gray">{p.description}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <li
                        key={t}
                        className="border border-[color:var(--racing-dark-red)] px-2.5 py-1 font-mono text-[0.6rem] tracking-[0.2em] text-racing-gray"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}

export function Journey() {
  return (
    <section
      id="journey"
      className="relative border-t border-[color:var(--racing-dark-red)] py-24 sm:py-32"
      style={{ background: "var(--gradient-fade)" }}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHead no="05" title="JOURNEY" />
        </Reveal>

        <ol className="relative mt-14 max-w-3xl border-l border-[color:var(--racing-dark-red)] pl-6 sm:pl-10">
          {journey.map((j, i) => (
            <li key={j.title} className="relative pb-10 last:pb-0">
              <Reveal delay={i * 70}>
                <span className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 border border-[color:var(--racing-red)] bg-racing-black sm:-left-[47px]" />
                <span className="font-mono text-[0.62rem] tracking-[0.28em] text-red-bright">{j.stage}</span>
                <h3 className="mt-2 font-display text-xl font-bold tracking-[0.08em]">{j.title}</h3>
                <p className="mt-2 max-w-xl leading-relaxed text-racing-gray">{j.detail}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="relative border-t border-[color:var(--racing-dark-red)] py-24 sm:py-32">
      <div className="diagonal-lines pointer-events-none absolute inset-y-0 left-0 w-1/4 opacity-25" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHead no="06" title="LET'S CONNECT" />
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="font-display text-[clamp(1.9rem,5vw,3.2rem)] font-bold leading-[1.05]">
              READY TO BUILD
              <br />
              <span className="text-red-primary">SOMETHING?</span>
            </p>
            <p className="mt-6 max-w-md leading-relaxed text-racing-gray">
              Open to collaboration, commissions, and competitions in 3D modelling, product
              visualization, and industrial design.

            </p>
          </Reveal>

          <Reveal delay={120}>
            <ul className="divide-y divide-[color:var(--racing-dark-red)] border-y border-[color:var(--racing-dark-red)]">
              {contacts.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    className="group grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 py-5 transition-colors hover:bg-racing-surface/60"
                  >
                    <span className="w-24 shrink-0 font-mono text-[0.62rem] tracking-[0.25em] text-red-bright">
                      {c.label}
                    </span>
                    <span className="min-w-0 truncate text-racing-gray transition-colors group-hover:text-racing-white">
                      {c.value}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--racing-dark-red)] py-8">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 font-mono text-[0.6rem] tracking-[0.22em] text-racing-gray sm:px-8">
        <span className="truncate">© {new Date().getFullYear()} FAHRI AZ-ZUHRI</span>
        <a href="#hero" className="shrink-0 transition-colors hover:text-red-bright">
          BACK TO TOP
        </a>
      </div>
    </footer>
  );
}
