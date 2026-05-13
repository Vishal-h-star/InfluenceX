import Link from "next/link";
import { SectionHeader } from "@/components/Section";

export const metadata = {
  title: "InfluenceX — Influencer marketing built on trust & performance",
  description:
    "Discover creators, run campaigns, and measure real impact with InfluenceX — a full-service influencer marketing agency trusted by category-leading brands."
};

const stats = [
  { label: "Vetted creators",      value: "12,400+" },
  { label: "Campaigns delivered",  value: "1,800+" },
  { label: "Total audience reach", value: "920M" },
  { label: "Avg. campaign ROI",    value: "6.4x" }
];

const clientLogos = [
  "LUMA",
  "NORTHWELL",
  "AURORA",
  "METRIC",
  "HALCYON",
  "KINFOLK",
  "VESPER",
  "ATLAS LABS",
  "ORBITAL",
  "VERTEX",
  "QUANTUM",
  "PARALLEL"
];

const whatWeDo = [
  {
    icon: "🔎",
    title: "Influencer Discovery",
    body: "12k+ vetted creators, scored on audience authenticity, brand safety, and historic conversion."
  },
  {
    icon: "🚀",
    title: "Campaign Management",
    body: "Briefs, contracts, content review, FTC compliance — your campaign on rails, end-to-end."
  },
  {
    icon: "📊",
    title: "Analytics & Reporting",
    body: "Live dashboards, creator-level ROAS, GA4/Shopify attribution. You see what's working in real time."
  },
  {
    icon: "🤝",
    title: "Brand Deals",
    body: "Rate benchmarking, usage rights, whitelisting and exclusivity — negotiated by operators who've done it."
  }
];

const videos = [
  {
    title: "Maya Reyes × FitFuel Protein",
    creator: "@mayamoves",
    views: "2.1M views",
    tag: "Fitness",
    gradient: "from-emerald-500 via-teal-600 to-navy-900"
  },
  {
    title: "Sienna Cole × Linea Skincare",
    creator: "@siennacole",
    views: "4.8M views",
    tag: "Beauty",
    gradient: "from-fuchsia-500 via-brand-700 to-navy-900"
  },
  {
    title: "Dev Kapoor × CloudStack",
    creator: "@devbuilds",
    views: "1.4M views",
    tag: "SaaS",
    gradient: "from-cyan-500 via-blue-700 to-navy-900"
  }
];

const differentiators = [
  {
    them: "Spreadsheet creator lists, no rationale",
    us: "Curated shortlists with audience-fit reasoning for every name"
  },
  {
    them: "Vanity metrics — reach, impressions, likes",
    us: "Outcome metrics — ROAS, CAC, attributed revenue, retention"
  },
  {
    them: "Hand-off after the post goes live",
    us: "Whitelisting, paid amplification, and renewals built into every brief"
  },
  {
    them: "Contracts that protect the agency",
    us: "Contracts that protect the brand — usage rights, exclusivity, claw-backs"
  },
  {
    them: "One report at the end of the campaign",
    us: "Live dashboard from day one, with weekly strategist read-outs"
  }
];

export default function HomePage() {
  return (
    <>
      {/* HERO — trust-anchored dark navy with violet energy */}
      <section className="relative overflow-hidden trust-bg text-white">
        <div className="absolute inset-0 animated-bg opacity-60" aria-hidden />
        <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
        <div className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-brand-600/30 blur-3xl animate-float" aria-hidden />
        <div className="absolute -bottom-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-fuchsia-500/20 blur-3xl animate-float" aria-hidden />

        <div className="relative container-x py-24 sm:py-32 lg:py-40 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Trusted by 200+ category-leading brands
          </span>
          <h1 className="mt-7 text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] animate-fade-up">
            Influencer marketing that earns
            <br className="hidden sm:block" />{" "}
            <span className="bg-gradient-to-r from-fuchsia-300 via-brand-300 to-white bg-clip-text text-transparent">
              trust
            </span>{" "}
            and drives{" "}
            <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-white bg-clip-text text-transparent">
              revenue
            </span>
            .
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-white/80 animate-fade-up">
            We pair ambitious brands with the right creators — and run the
            campaign end-to-end. Every match is grounded in audience fit. Every
            outcome is measured against the only metric that matters: yours.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center animate-fade-up">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-bold text-navy-900 shadow-xl shadow-black/30 hover:bg-brand-50 hover:-translate-y-0.5 transition-all"
            >
              Get a free brief →
            </Link>
            <Link
              href="/influencers"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur hover:bg-white/10 transition-all"
            >
              Browse Creators
            </Link>
          </div>

          <div className="mt-12 flex items-center justify-center gap-6 text-xs text-white/60">
            <span className="flex items-center gap-2">
              <CheckIcon className="w-4 h-4 text-emerald-400" />
              No long-term contracts
            </span>
            <span className="hidden sm:flex items-center gap-2">
              <CheckIcon className="w-4 h-4 text-emerald-400" />
              1-day shortlist turnaround
            </span>
            <span className="hidden sm:flex items-center gap-2">
              <CheckIcon className="w-4 h-4 text-emerald-400" />
              FTC-compliant by default
            </span>
          </div>
        </div>
      </section>

      {/* CLIENT LOGO MARQUEE */}
      <section className="bg-navy-950 text-white/60 py-10 border-y border-white/5">
        <div className="container-x">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
            Brands building with InfluenceX
          </p>
        </div>
        <div className="mt-7 marquee-mask overflow-hidden">
          <div className="marquee-track gap-14 px-7">
            {[...clientLogos, ...clientLogos].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="shrink-0 text-2xl sm:text-3xl font-black tracking-[0.18em] text-white/40 hover:text-white transition-colors whitespace-nowrap"
                style={{ fontFamily: "Inter, system-ui, sans-serif" }}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* STATS — floating card overlapping next section */}
      <section className="relative z-10 -mt-10">
        <div className="container-x">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 rounded-3xl bg-white p-6 sm:p-8 shadow-2xl ring-1 ring-slate-200/70">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-navy-900 via-brand-700 to-fuchsia-600 bg-clip-text text-transparent">
                  {s.value}
                </div>
                <div className="mt-1 text-xs sm:text-sm font-medium text-slate-600 uppercase tracking-wide">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="What we do"
            title="A full-service operating system for creator marketing."
            subtitle="Pick one pillar or run the whole stack. Either way, you get a strategist, a campaign manager, and a live dashboard from day one."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whatWeDo.map((s) => (
              <div key={s.title} className="card group">
                <div className="grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-br from-brand-100 to-brand-50 text-2xl ring-1 ring-brand-200/50 group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy-900">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {s.body}
                </p>
                <Link
                  href="/services"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:text-brand-800"
                >
                  Learn more <span aria-hidden>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INFLUENCER VIDEO SHOWCASE */}
      <section className="section bg-navy-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" aria-hidden />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-brand-600/15 blur-3xl" aria-hidden />

        <div className="relative container-x">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/80 backdrop-blur">
              Recent work
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
              Creators we've put on screen.
            </h2>
            <p className="mt-4 text-white/70">
              A snapshot of recent collaborations from across our network.
              Real briefs, real budgets, real numbers.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {videos.map((v) => (
              <article
                key={v.title}
                className="group relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-navy-900 hover:-translate-y-1 transition-all"
              >
                {/* Video thumbnail */}
                <div className={`relative aspect-[4/5] bg-gradient-to-br ${v.gradient}`}>
                  <div className="absolute inset-0 grid-bg opacity-20" aria-hidden />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent" aria-hidden />

                  <span className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-navy-900">
                    {v.tag}
                  </span>

                  <div className="absolute inset-0 grid place-items-center">
                    <button
                      type="button"
                      aria-label={`Play ${v.title}`}
                      className="relative w-20 h-20 rounded-full bg-white grid place-items-center shadow-2xl group-hover:scale-110 transition-transform play-pulse"
                    >
                      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-navy-900 ml-1" aria-hidden>
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-xs font-semibold text-white/80">{v.creator}</div>
                    <div className="mt-1 font-bold leading-tight">{v.title}</div>
                    <div className="mt-2 text-xs text-white/70">{v.views}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/influencers"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/10 transition-all"
            >
              See all campaigns →
            </Link>
          </div>
        </div>
      </section>

      {/* WHY WE'RE DIFFERENT */}
      <section className="section">
        <div className="container-x">
          <SectionHeader
            eyebrow="Why we're different"
            title="The work most agencies skip — we make standard."
            subtitle="Influencer marketing collapses when the operations don't. Here's where we draw a sharper line."
          />

          <div className="mt-14 grid lg:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {/* Most agencies card */}
            <div className="rounded-2xl bg-slate-100 ring-1 ring-slate-200 p-6 sm:p-8">
              <div className="flex items-center gap-2">
                <span className="grid place-items-center w-9 h-9 rounded-lg bg-slate-200 text-slate-500 text-xl">×</span>
                <h3 className="font-bold text-slate-600 uppercase tracking-wider text-sm">
                  Most agencies
                </h3>
              </div>
              <ul className="mt-6 space-y-4">
                {differentiators.map((d) => (
                  <li key={d.them} className="flex items-start gap-3 text-sm text-slate-600 line-through decoration-slate-400/60">
                    <span className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                    {d.them}
                  </li>
                ))}
              </ul>
            </div>

            {/* InfluenceX card */}
            <div className="relative rounded-2xl bg-gradient-to-br from-navy-900 to-brand-900 text-white p-6 sm:p-8 shadow-2xl shadow-navy-900/30 ring-1 ring-brand-800/40">
              <div className="absolute inset-0 grid-bg opacity-20 rounded-2xl pointer-events-none" aria-hidden />
              <div className="relative">
                <div className="flex items-center gap-2">
                  <span className="grid place-items-center w-9 h-9 rounded-lg bg-emerald-400 text-navy-900 font-black">
                    <CheckIcon className="w-5 h-5" />
                  </span>
                  <h3 className="font-bold uppercase tracking-wider text-sm">
                    Influence<span className="text-fuchsia-300">X</span>
                  </h3>
                </div>
                <ul className="mt-6 space-y-4">
                  {differentiators.map((d) => (
                    <li key={d.us} className="flex items-start gap-3 text-sm text-white/90">
                      <CheckIcon className="mt-0.5 w-4 h-4 text-emerald-400 shrink-0" />
                      {d.us}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section bg-slate-50">
        <div className="container-x">
          <SectionHeader
            eyebrow="How it works"
            title="From brief to breakthrough — in four moves."
          />
          <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["01", "Discovery", "Brief, audience map, KPI alignment."],
              ["02", "Match",     "Curated creator shortlist with rationale."],
              ["03", "Launch",    "Contracts, briefs, content reviews, posting."],
              ["04", "Measure",   "Attribution, learnings, next-cycle plan."]
            ].map(([n, t, b]) => (
              <li key={n} className="rounded-2xl bg-white p-8 ring-1 ring-slate-200/70 hover:shadow-lg transition-all">
                <div className="text-sm font-bold text-brand-700">{n}</div>
                <h3 className="mt-2 text-lg font-bold text-navy-900">{t}</h3>
                <p className="mt-2 text-sm text-slate-600">{b}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FINAL CTA — bold dark */}
      <section className="section">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl trust-bg p-10 sm:p-16">
            <div className="absolute inset-0 animated-bg opacity-50" aria-hidden />
            <div className="absolute inset-0 grid-bg opacity-30" aria-hidden />
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-fuchsia-500/30 blur-3xl animate-float" aria-hidden />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-brand-500/30 blur-3xl animate-float" aria-hidden />

            <div className="relative grid lg:grid-cols-5 gap-8 items-center">
              <div className="lg:col-span-3 text-white">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Booking Q3 campaigns now
                </span>
                <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                  Tell us your brief.<br />
                  Get a shortlist in 24 hours.
                </h2>
                <p className="mt-4 text-white/80 max-w-xl">
                  No discovery calls, no slide-ware. Send a one-paragraph brief
                  and a budget — we send back creators, rationales, and a draft
                  campaign shape.
                </p>
              </div>

              <div className="lg:col-span-2 flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-bold text-navy-900 shadow-2xl hover:bg-brand-50 hover:-translate-y-0.5 transition-all"
                >
                  Send your brief →
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-7 py-4 text-sm font-bold text-white backdrop-blur hover:bg-white/10 transition-all"
                >
                  Explore services
                </Link>
                <p className="text-center text-xs text-white/60 mt-1">
                  Or email{" "}
                  <span className="font-semibold text-white">hello@influencex.example</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function CheckIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className={className} aria-hidden>
      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
