"use client";

import { useState } from "react";

const BUDGETS = [
  "< $5k",
  "$5k - $15k",
  "$15k - $50k",
  "$50k - $100k",
  "$100k+"
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    brandName: "",
    budget: "",
    message: ""
  });
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  async function onSubmit(e) {
    e.preventDefault();
    setStatus({ state: "loading", message: "" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Submission failed.");
      setStatus({
        state: "success",
        message: "Thanks! Your brief is in — we'll be in touch within one business day."
      });
      setForm({ name: "", email: "", brandName: "", budget: "", message: "" });
    } catch (err) {
      setStatus({ state: "error", message: err.message });
    }
  }

  const disabled = status.state === "loading";

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl bg-white ring-1 ring-slate-200/70 p-6 sm:p-10 shadow-sm"
      noValidate
    >
      <h2 className="text-2xl font-extrabold tracking-tight">Send a brief</h2>
      <p className="mt-1 text-sm text-slate-600">
        Tell us a little about your brand and goals.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Field
          label="Your name"
          required
          value={form.name}
          onChange={set("name")}
          autoComplete="name"
          placeholder="Alex Morgan"
        />
        <Field
          label="Work email"
          type="email"
          required
          value={form.email}
          onChange={set("email")}
          autoComplete="email"
          placeholder="alex@brand.com"
        />
        <Field
          label="Brand name"
          required
          value={form.brandName}
          onChange={set("brandName")}
          placeholder="Acme Skincare"
          className="sm:col-span-2"
        />
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-slate-700">
            Budget <span className="text-rose-500">*</span>
          </label>
          <select
            required
            value={form.budget}
            onChange={set("budget")}
            className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 outline-none transition"
          >
            <option value="" disabled>Select a budget range…</option>
            {BUDGETS.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-slate-700">
            Tell us about your campaign <span className="text-rose-500">*</span>
          </label>
          <textarea
            required
            rows={5}
            value={form.message}
            onChange={set("message")}
            placeholder="Goals, target audience, timeline, anything else we should know…"
            className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 outline-none transition"
          />
        </div>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
        <button type="submit" className="btn-primary" disabled={disabled}>
          {disabled ? "Sending…" : "Send brief"}
        </button>
        {status.state === "success" && (
          <p className="text-sm font-medium text-emerald-700">{status.message}</p>
        )}
        {status.state === "error" && (
          <p className="text-sm font-medium text-rose-600">{status.message}</p>
        )}
      </div>
    </form>
  );
}

function Field({ label, required, className = "", ...rest }) {
  return (
    <div className={className}>
      <label className="block text-sm font-medium text-slate-700">
        {label} {required && <span className="text-rose-500">*</span>}
      </label>
      <input
        {...rest}
        className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 outline-none transition"
      />
    </div>
  );
}
