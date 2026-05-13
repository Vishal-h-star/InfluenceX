import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact",
  description:
    "Send InfluenceX your brief — share goals, budget, and brand. We respond within one business day with a curated shortlist."
};

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden animated-bg text-white">
        <div className="absolute inset-0 grid-bg opacity-20" aria-hidden />
        <div className="relative container-x py-20 sm:py-24 text-center">
          <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur">
            Let&apos;s build something
          </span>
          <h1 className="mt-5 text-4xl sm:text-6xl font-black tracking-tight">
            Tell us about your brand.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/90">
            We respond within one business day with a creator shortlist, a
            recommended budget split, and a strategist call invite.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-1 space-y-6">
            <div className="card">
              <div className="text-2xl">📍</div>
              <h3 className="mt-3 font-bold">Headquarters</h3>
              <p className="text-sm text-slate-600 mt-1">
                228 Park Ave S<br />New York, NY 10003
              </p>
            </div>
            <div className="card">
              <div className="text-2xl">✉️</div>
              <h3 className="mt-3 font-bold">Email</h3>
              <p className="text-sm text-slate-600 mt-1">hello@influencex.example</p>
            </div>
            <div className="card">
              <div className="text-2xl">⚡</div>
              <h3 className="mt-3 font-bold">Response time</h3>
              <p className="text-sm text-slate-600 mt-1">
                Within one business day — usually faster.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
