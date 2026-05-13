"use client";

import { useMemo, useState } from "react";

const CATEGORIES = ["All", "Fitness", "Fashion", "Tech", "Food"];

const INFLUENCERS = [
  { name: "Maya Reyes",      handle: "@mayamoves",     category: "Fitness", followers: "1.2M", er: "5.8%", city: "Austin, TX",     gradient: "from-rose-400 to-orange-400" },
  { name: "Jordan Park",     handle: "@jpfit",         category: "Fitness", followers: "684K", er: "7.1%", city: "Los Angeles, CA",gradient: "from-emerald-400 to-teal-500" },
  { name: "Priya Anand",     handle: "@priya.fit",     category: "Fitness", followers: "421K", er: "8.4%", city: "Toronto, ON",    gradient: "from-amber-400 to-pink-500" },

  { name: "Sienna Cole",     handle: "@siennacole",    category: "Fashion", followers: "2.4M", er: "3.2%", city: "New York, NY",   gradient: "from-fuchsia-500 to-purple-600" },
  { name: "Lena Voss",       handle: "@lenavoss",      category: "Fashion", followers: "910K", er: "4.7%", city: "Paris, FR",      gradient: "from-pink-400 to-rose-600" },
  { name: "Aiko Tanaka",     handle: "@aiko.thread",   category: "Fashion", followers: "555K", er: "5.9%", city: "Tokyo, JP",      gradient: "from-violet-500 to-indigo-600" },

  { name: "Dev Kapoor",      handle: "@devbuilds",     category: "Tech",    followers: "780K", er: "6.3%", city: "Bengaluru, IN",  gradient: "from-cyan-500 to-blue-600" },
  { name: "Sara Mendez",     handle: "@codewithsara",  category: "Tech",    followers: "512K", er: "7.0%", city: "San Francisco, CA", gradient: "from-indigo-500 to-purple-600" },
  { name: "Ethan Wu",        handle: "@ewbench",       category: "Tech",    followers: "1.05M", er: "4.4%", city: "Seattle, WA",   gradient: "from-sky-500 to-cyan-600" },

  { name: "Chef Roman",      handle: "@chef.roman",    category: "Food",    followers: "1.6M", er: "5.1%", city: "Miami, FL",      gradient: "from-orange-500 to-red-600" },
  { name: "Noor Hadid",      handle: "@noorplates",    category: "Food",    followers: "395K", er: "9.1%", city: "Dubai, UAE",     gradient: "from-amber-500 to-orange-600" },
  { name: "Camila Souza",    handle: "@camicooks",     category: "Food",    followers: "812K", er: "6.6%", city: "São Paulo, BR",  gradient: "from-lime-500 to-green-600" }
];

function initials(name) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");
}

export default function InfluencersPage() {
  const [active, setActive] = useState("All");

  const list = useMemo(
    () => (active === "All" ? INFLUENCERS : INFLUENCERS.filter((i) => i.category === active)),
    [active]
  );

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden animated-bg text-white">
        <div className="absolute inset-0 grid-bg opacity-20" aria-hidden />
        <div className="relative container-x py-20 sm:py-28 text-center">
          <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur">
            Creator Network
          </span>
          <h1 className="mt-5 text-4xl sm:text-6xl font-black tracking-tight">
            Meet the voices we trust.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/90">
            A snapshot of the InfluenceX network across fitness, fashion, tech,
            and food. Filter by category to explore.
          </p>
        </div>
      </section>

      {/* FILTERS */}
      <section className="section">
        <div className="container-x">
          <div className="flex flex-wrap gap-2 justify-center">
            {CATEGORIES.map((c) => {
              const isActive = active === c;
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setActive(c)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-brand-600 text-white shadow-lg shadow-brand-600/30"
                      : "bg-white text-slate-700 ring-1 ring-slate-200 hover:ring-brand-300 hover:text-brand-700"
                  }`}
                  aria-pressed={isActive}
                >
                  {c}
                </button>
              );
            })}
          </div>

          {/* GRID */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p) => (
              <article
                key={p.handle}
                className="group overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200/70 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className={`relative h-40 bg-gradient-to-br ${p.gradient}`}>
                  <div className="absolute inset-0 grid-bg opacity-20" aria-hidden />
                  <span className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate-800">
                    {p.category}
                  </span>
                </div>
                <div className="-mt-10 px-6 pb-6">
                  <div className="w-20 h-20 rounded-2xl ring-4 ring-white bg-white grid place-items-center text-2xl font-black text-brand-700 shadow-lg">
                    {initials(p.name)}
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">{p.name}</h3>
                  <div className="text-sm text-brand-700 font-medium">{p.handle}</div>
                  <div className="text-xs text-slate-500 mt-1">{p.city}</div>
                  <div className="mt-4 grid grid-cols-2 gap-2 text-center">
                    <div className="rounded-xl bg-slate-50 py-2">
                      <div className="text-sm font-bold text-slate-900">{p.followers}</div>
                      <div className="text-[10px] uppercase tracking-wide text-slate-500">Followers</div>
                    </div>
                    <div className="rounded-xl bg-slate-50 py-2">
                      <div className="text-sm font-bold text-slate-900">{p.er}</div>
                      <div className="text-[10px] uppercase tracking-wide text-slate-500">Engagement</div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {list.length === 0 && (
            <p className="mt-16 text-center text-slate-500">
              No creators in this category yet — check back soon.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
