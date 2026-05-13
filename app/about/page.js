import { SectionHeader } from "@/components/Section";

export const metadata = {
  title: "About",
  description:
    "InfluenceX is a creator-first marketing agency building the long-form relationships behind today's biggest brand moments."
};

const team = [
  { name: "Ava Lin",     role: "Founder & CEO",        initials: "AL", color: "from-rose-500 to-fuchsia-500" },
  { name: "Marcus Reid", role: "Head of Strategy",     initials: "MR", color: "from-cyan-500 to-blue-600" },
  { name: "Priya N.",    role: "Head of Creator Ops",  initials: "PN", color: "from-amber-500 to-orange-600" },
  { name: "Jordan Cole", role: "Head of Analytics",    initials: "JC", color: "from-violet-500 to-indigo-600" },
  { name: "Lena S.",     role: "Senior Producer",      initials: "LS", color: "from-emerald-500 to-teal-600" },
  { name: "Ravi T.",     role: "Legal & Contracts",    initials: "RT", color: "from-pink-500 to-rose-600" }
];

const values = [
  { title: "Creators first", body: "Brands win when creators win. We obsess over creator experience as much as the campaign deck." },
  { title: "Outcomes over optics", body: "Big numbers don't pay rent. We optimize for the metric that actually moves your business." },
  { title: "Operationally serious", body: "Briefs, briefs reviews, contracts, FTC. We run programs, not vibes." }
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden animated-bg text-white">
        <div className="absolute inset-0 grid-bg opacity-20" aria-hidden />
        <div className="relative container-x py-20 sm:py-28 text-center">
          <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur">
            About InfluenceX
          </span>
          <h1 className="mt-5 text-4xl sm:text-6xl font-black tracking-tight">
            We bet on creators long before<br className="hidden sm:block" /> they were a category.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/90">
            Founded in 2019 with a thesis that the next great media companies
            would be built one creator at a time. Five years and 1,800+
            campaigns later — that thesis held.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="section">
        <div className="container-x grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="eyebrow">Our story</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
              Built by operators who got tired of the agency playbook.
            </h2>
            <div className="mt-6 space-y-4 text-slate-700">
              <p>
                InfluenceX started as a side project — three operators helping
                D2C friends find creators that converted, not just creators that
                posted. The shortlist worked. Then it worked again. Then it kept
                working at scale.
              </p>
              <p>
                Today we&apos;re a 40-person team running creator programs for
                category leaders in consumer, software, and lifestyle. Same
                obsession: match the right voice to the right audience, then
                measure honestly.
              </p>
              <p>
                We exist because the influencer marketing industry deserves the same
                operational rigor brands expect from every other channel.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { k: "2019", v: "Founded" },
              { k: "40", v: "Operators" },
              { k: "1.8k+", v: "Campaigns" },
              { k: "12k+", v: "Creators" }
            ].map((m) => (
              <div key={m.v} className="rounded-2xl bg-white ring-1 ring-slate-200/70 p-8 text-center">
                <div className="text-4xl font-black gradient-text">{m.k}</div>
                <div className="mt-1 text-sm text-slate-600 uppercase tracking-wide">{m.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section bg-slate-50">
        <div className="container-x">
          <SectionHeader eyebrow="What we believe" title="Three operating principles." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="card">
                <h3 className="text-lg font-bold text-slate-900">{v.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section">
        <div className="container-x">
          <SectionHeader eyebrow="The team" title="Operators behind the work." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((p) => (
              <div
                key={p.name}
                className="group rounded-2xl bg-white ring-1 ring-slate-200/70 p-8 flex items-center gap-5 hover:shadow-lg transition-all"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${p.color} grid place-items-center text-white font-black text-xl shadow-lg group-hover:scale-105 transition-transform`}>
                  {p.initials}
                </div>
                <div>
                  <div className="font-bold text-slate-900">{p.name}</div>
                  <div className="text-sm text-slate-600">{p.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
