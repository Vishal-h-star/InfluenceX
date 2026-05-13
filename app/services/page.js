import Link from "next/link";
import { SectionHeader } from "@/components/Section";

export const metadata = {
  title: "Services",
  description:
    "Influencer discovery, campaign management, performance analytics, and brand deal negotiation — full-service from InfluenceX."
};

const services = [
  {
    icon: "🔎",
    title: "Influencer Discovery",
    bullets: [
      "12k+ vetted creator database",
      "Audience demographics & authenticity scoring",
      "Lookalike & competitive-shelf creator mapping",
      "Brand safety, FTC, and contract history check"
    ],
    body:
      "We don't surface big follower counts — we surface the creators whose audience actually maps to your buyer."
  },
  {
    icon: "🚀",
    title: "Campaign Management",
    bullets: [
      "Briefs, timelines, deliverables tracking",
      "Content review & revision rounds",
      "Posting cadence and channel mix",
      "FTC / advertising compliance baked in"
    ],
    body:
      "From kickoff to wrap-up, your campaign runs on a real production system — not a shared spreadsheet."
  },
  {
    icon: "📊",
    title: "Analytics & Reporting",
    bullets: [
      "Live performance dashboard",
      "Attribution: clicks, codes, GA4, Shopify, app installs",
      "Creator-level ROAS breakdown",
      "Post-campaign learning + next-cycle plan"
    ],
    body:
      "Every campaign ships with measurement built in. You see what's working — and why — in real time."
  },
  {
    icon: "🤝",
    title: "Brand Deals & Negotiation",
    bullets: [
      "Rate benchmarking by tier and category",
      "Usage rights, exclusivity, whitelisting",
      "Performance-linked deal structures",
      "Contract drafting & legal review"
    ],
    body:
      "We negotiate the boring (but expensive) parts: rates, rights, exclusivity windows, whitelisting, and renewals."
  }
];

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden animated-bg text-white">
        <div className="absolute inset-0 grid-bg opacity-20" aria-hidden />
        <div className="relative container-x py-20 sm:py-28 text-center">
          <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur">
            What we do
          </span>
          <h1 className="mt-5 text-4xl sm:text-6xl font-black tracking-tight">
            Services that scale with you.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/90">
            Pick one. Pick all four. Either way, we run it like an in-house
            growth team — without the headcount.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="container-x grid gap-6 lg:grid-cols-2">
          {services.map((s) => (
            <article key={s.title} className="card">
              <div className="flex items-center gap-3">
                <div className="grid place-items-center w-12 h-12 rounded-xl bg-brand-100 text-2xl">
                  {s.icon}
                </div>
                <h2 className="text-xl font-bold text-slate-900">{s.title}</h2>
              </div>
              <p className="mt-4 text-slate-600">{s.body}</p>
              <ul className="mt-5 space-y-2">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-brand-600 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* DELIVERABLES TABLE */}
      <section className="section bg-slate-50">
        <div className="container-x">
          <SectionHeader
            eyebrow="Engagement models"
            title="Choose your speed."
            subtitle="Project, retainer, or performance — every model includes a strategist, a campaign manager, and live reporting."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                tag: "Project",
                price: "From $9,500",
                desc: "Single-campaign sprint, 4–6 weeks, 3–8 creators.",
                feat: ["Dedicated strategist", "Full reporting", "Up to 8 creators"]
              },
              {
                tag: "Retainer",
                price: "From $14k / mo",
                desc: "Ongoing always-on creator program with quarterly tentpoles.",
                feat: ["Monthly campaigns", "Whitelisting program", "Quarterly review"],
                featured: true
              },
              {
                tag: "Performance",
                price: "Custom",
                desc: "CPA / rev-share deal structures for D2C and apps.",
                feat: ["Affiliate stack", "Attribution-first", "Performance creators"]
              }
            ].map((p) => (
              <div
                key={p.tag}
                className={`relative rounded-2xl p-8 ring-1 transition-all ${
                  p.featured
                    ? "bg-gradient-to-br from-brand-700 to-fuchsia-600 text-white ring-brand-700 shadow-2xl shadow-brand-500/30 scale-[1.02]"
                    : "bg-white ring-slate-200/70 hover:shadow-lg"
                }`}
              >
                {p.featured && (
                  <span className="absolute -top-3 right-6 rounded-full bg-white text-brand-700 px-3 py-1 text-xs font-bold uppercase tracking-wide shadow">
                    Most picked
                  </span>
                )}
                <div className={`text-sm font-bold uppercase tracking-wider ${p.featured ? "text-white/80" : "text-brand-700"}`}>
                  {p.tag}
                </div>
                <div className="mt-2 text-3xl font-black">{p.price}</div>
                <p className={`mt-2 text-sm ${p.featured ? "text-white/90" : "text-slate-600"}`}>
                  {p.desc}
                </p>
                <ul className="mt-5 space-y-2 text-sm">
                  {p.feat.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className={`mt-1 inline-block w-1.5 h-1.5 rounded-full ${p.featured ? "bg-white" : "bg-brand-600"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`mt-6 inline-flex w-full justify-center rounded-full px-5 py-3 text-sm font-semibold transition-colors ${
                    p.featured
                      ? "bg-white text-brand-700 hover:bg-brand-50"
                      : "bg-brand-600 text-white hover:bg-brand-700"
                  }`}
                >
                  Talk to us
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
