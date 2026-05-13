import Link from "next/link";

const sections = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/services", label: "Services" },
      { href: "/influencers", label: "Influencers" },
      { href: "/contact", label: "Contact" }
    ]
  },
  {
    title: "Solutions",
    links: [
      { href: "/services", label: "Discovery" },
      { href: "/services", label: "Campaigns" },
      { href: "/services", label: "Analytics" },
      { href: "/services", label: "Brand Deals" }
    ]
  },
  {
    title: "Resources",
    links: [
      { href: "/about", label: "Our Story" },
      { href: "/contact", label: "Get a Quote" },
      { href: "/influencers", label: "Creator Network" }
    ]
  }
];

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-200/70 bg-slate-50">
      <div className="container-x py-14 grid gap-10 md:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <span className="grid place-items-center w-9 h-9 rounded-xl bg-gradient-to-br from-brand-600 to-fuchsia-500 text-white font-black shadow-lg shadow-brand-500/30">
              iX
            </span>
            <span className="text-lg font-extrabold tracking-tight">
              Influence<span className="gradient-text">X</span>
            </span>
          </Link>
          <p className="mt-4 text-sm text-slate-600 max-w-xs">
            Pairing visionary brands with category-defining creators. Real
            campaigns. Measurable outcomes.
          </p>
        </div>

        {sections.map((s) => (
          <div key={s.title}>
            <h4 className="text-sm font-semibold text-slate-900">{s.title}</h4>
            <ul className="mt-4 space-y-2">
              {s.links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate-600 hover:text-brand-700 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-200/70">
        <div className="container-x py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} InfluenceX. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Made with violet energy.
          </p>
        </div>
      </div>
    </footer>
  );
}
