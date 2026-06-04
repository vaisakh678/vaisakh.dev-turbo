// ── Edit your content here ──────────────────────────────────────────────────

const NAV = [
  { label: "home", href: "/" },
  { label: "writing", href: "/writing" },
  { label: "work?", href: "/work" },
];

const SOCIALS = [
  { label: "x/twitter", href: "https://x.com/" },
  { label: "github", href: "https://github.com/vaisakh678" },
];

const PROJECTS = [
  { label: "project-one", href: "#" },
  { label: "project-two", href: "#" },
  { label: "project-three", href: "#" },
];

const TIMELINE = [
  { text: "building things on the side", date: "2026" },
  { text: "shipped something small", date: "2025" },
  { text: "started writing more", date: "2025" },
];

// ─────────────────────────────────────────────────────────────────────────────

function Link({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center px-6 py-16 sm:py-24">
      <main className="flex w-full max-w-xl flex-col gap-12 text-sm leading-relaxed sm:text-[15px]">
        {/* nav */}
        <nav className="flex flex-col gap-3 text-muted sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition-colors hover:text-foreground"
              >
                [{item.label}]
              </a>
            ))}
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {SOCIALS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        <hr className="border-border" />

        {/* intro */}
        <section className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            vaisakh.
          </h1>
          <p className="text-muted">
            doing things on the internet. building, breaking, learning.
          </p>
        </section>

        <hr className="border-border" />

        {/* projects */}
        <section className="flex flex-col gap-3">
          <p className="text-muted">some stuff that i&apos;ve made:</p>
          <ul className="flex flex-col gap-1.5">
            {PROJECTS.map((p) => (
              <li key={p.label} className="flex items-baseline gap-2">
                <span className="text-muted">-</span>
                <Link href={p.href}>{p.label}</Link>
              </li>
            ))}
          </ul>
        </section>

        <hr className="border-border" />

        {/* timeline */}
        <section className="flex flex-col gap-3">
          <p className="text-muted">timeline:</p>
          <ul className="flex flex-col gap-2">
            {TIMELINE.map((t, i) => (
              <li
                key={i}
                className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
              >
                <span className="text-foreground">{t.text}</span>
                <span className="shrink-0 text-muted">{t.date}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
