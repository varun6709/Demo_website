import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import agentPortrait from "@/assets/agent-elena.jpg";
import { parcels, regions, type Parcel } from "@/data/parcels";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Terrafield — Surveyed Land & Plots for Sale" },
      {
        name: "description",
        content:
          "Find land by region, price and plot size. Every Terrafield parcel is surveyed, boundary-staked and sold with clear title.",
      },
      { property: "og:title", content: "Terrafield — Surveyed Land & Plots for Sale" },
      {
        property: "og:description",
        content:
          "Browse boundary-staked parcels across four Indian cities, filter by price and plot size, and enquire with a field agent.",
      },
    ],
  }),
  component: Index,
});

const priceBands = [
  { id: "under25", label: "Under ₹25 lakh", test: (p: number) => p < 2500000 },
  {
    id: "mid",
    label: "₹25 lakh – ₹1 crore",
    test: (p: number) => p >= 2500000 && p <= 10000000,
  },
  { id: "over1cr", label: "₹1 crore+", test: (p: number) => p > 10000000 },
];

const sizeBands = [
  { id: "small", label: "Up to 0.5 acre", test: (a: number) => a <= 0.5 },
  { id: "medium", label: "0.5 – 1 acre", test: (a: number) => a > 0.5 && a <= 1 },
  { id: "large", label: "Over 1 acre", test: (a: number) => a > 1 },
];

const money = (n: number) => {
  if (n >= 10000000) return `₹${(n / 10000000).toFixed(2).replace(/\.00$/, "")} Cr`;
  return `₹${(n / 100000).toFixed(2).replace(/\.00$/, "")} L`;
};

function toggle(list: string[], id: string) {
  return list.includes(id) ? list.filter((x) => x !== id) : [...list, id];
}


function Index() {
  const [region, setRegion] = useState("all");
  const [query, setQuery] = useState("");
  const [prices, setPrices] = useState<string[]>([]);
  const [sizes, setSizes] = useState<string[]>([]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return parcels
      .filter((p) => region === "all" || p.region === region)
      .filter(
        (p) =>
          q === "" ||
          p.name.toLowerCase().includes(q) ||
          p.region.toLowerCase().includes(q) ||
          p.notes.toLowerCase().includes(q),
      )
      .filter(
        (p) =>
          prices.length === 0 ||
          priceBands.some((b) => prices.includes(b.id) && b.test(p.price)),
      )
      .filter(
        (p) =>
          sizes.length === 0 || sizeBands.some((b) => sizes.includes(b.id) && b.test(p.acres)),
      )
      .sort((a, b) => a.price - b.price);
  }, [region, query, prices, sizes]);

  const countFor = (r: string) => parcels.filter((p) => p.region === r).length;

  const clearAll = () => {
    setRegion("all");
    setQuery("");
    setPrices([]);
    setSizes([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky via-paper to-sand text-ink antialiased">
      <header className="sticky top-0 z-30 border-b border-white/50 bg-white/60 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-2.5">
            <span className="grid size-8 place-items-center rounded-lg bg-pine/90 font-serif text-lg font-semibold leading-none text-paper">
              T
            </span>
            <span className="font-serif text-xl font-semibold tracking-tight">Terrafield</span>
            <span className="mt-0.5 hidden text-xs uppercase tracking-[0.25em] text-muted-ink sm:inline">
              Land &amp; Plots
            </span>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-ink/80 md:flex">
            <a href="#listings" className="transition-colors hover:text-clay">
              Parcels
            </a>
            <a href="#why" className="transition-colors hover:text-clay">
              Why us
            </a>
            <a href="#agent" className="transition-colors hover:text-clay">
              Contact
            </a>
          </nav>
          <a
            href="#agent"
            className="rounded-lg bg-clay px-4 py-2 text-sm font-medium text-paper ring-1 ring-clay/40"
          >
            Enquire
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div
          className="absolute -left-24 -top-24 size-96 rounded-full bg-sky/70 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute -right-20 top-10 size-[28rem] rounded-full bg-clay/20 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-20">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-clay">
            Golden-hour land brokerage
          </p>
          <h1 className="max-w-[20ch] text-balance font-serif text-5xl leading-[0.95] tracking-tight md:text-6xl">
            Open ground, surveyed and ready to claim.
          </h1>
          <p className="mt-6 max-w-[50ch] text-pretty text-lg text-muted-ink">
            Boundary-staked parcels across four Indian cities — priced per acre in rupees, listed with clear title
            and deed.
          </p>

          <div className="mt-10 max-w-3xl rounded-[min(1.5vw,20px)] bg-white/55 p-4 shadow-[0_20px_60px_-30px_rgba(51,81,74,0.5)] ring-1 ring-white/60 backdrop-blur-xl">
            <div className="grid gap-3 sm:grid-cols-[1.4fr_1.4fr_auto]">
              <label className="flex flex-col gap-1.5">
                <span className="text-xs uppercase tracking-[0.18em] text-muted-ink">Region</span>
                <select
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  className="rounded-lg bg-white/80 px-3 py-3 text-sm ring-1 ring-line focus:outline-none focus:ring-2 focus:ring-clay/50"
                >
                  <option value="all">All regions</option>
                  {regions.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-xs uppercase tracking-[0.18em] text-muted-ink">Search</span>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Town, plot ref, or feature…"
                  className="rounded-lg bg-white/80 px-3 py-3 text-sm ring-1 ring-line placeholder:text-muted-ink/60 focus:outline-none focus:ring-2 focus:ring-clay/50"
                />
              </label>
              <a
                href="#listings"
                className="grid h-[46px] select-none place-items-center self-end rounded-lg bg-pine px-6 text-sm font-medium text-paper ring-1 ring-pine/40"
              >
                Search
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="listings" className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
          <aside className="self-start lg:sticky lg:top-24">
            <div className="space-y-6 rounded-[min(1.2vw,16px)] bg-white/50 p-5 ring-1 ring-white/60 backdrop-blur-md">
              <div className="flex items-center justify-between">
                <h2 className="font-serif text-lg font-medium">Filters</h2>
                <button
                  type="button"
                  onClick={clearAll}
                  className="text-xs text-muted-ink transition-colors hover:text-clay"
                >
                  Clear
                </button>
              </div>
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.18em] text-muted-ink">Region</p>
                <select
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  className="w-full rounded-lg bg-white/80 px-3 py-2.5 text-sm ring-1 ring-line focus:outline-none focus:ring-2 focus:ring-clay/50"
                >
                  <option value="all">All regions</option>
                  {regions.map((r) => (
                    <option key={r} value={r}>
                      {r} ({countFor(r)})
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.18em] text-muted-ink">
                  Price range
                </p>
                <div className="space-y-2 text-sm text-ink/80">
                  {priceBands.map((b) => (
                    <label key={b.id} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="size-4 accent-clay"
                        checked={prices.includes(b.id)}
                        onChange={() => setPrices((p) => toggle(p, b.id))}
                      />
                      {b.label}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.18em] text-muted-ink">Plot size</p>
                <div className="space-y-2 text-sm text-ink/80">
                  {sizeBands.map((b) => (
                    <label key={b.id} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="size-4 accent-clay"
                        checked={sizes.includes(b.id)}
                        onChange={() => setSizes((s) => toggle(s, b.id))}
                      />
                      {b.label}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <div>
            <div className="mb-5 flex items-baseline justify-between">
              <p className="text-sm text-muted-ink">
                <span className="font-medium text-ink">
                  {results.length} {results.length === 1 ? "parcel" : "parcels"}
                </span>{" "}
                · {region === "all" ? "all regions" : region}
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-ink">Sorted by price</p>
            </div>

            {results.length === 0 ? (
              <div className="rounded-[min(1.2vw,16px)] bg-white/60 p-10 text-center ring-1 ring-white/60 backdrop-blur-md">
                <p className="font-serif text-2xl">No parcels match those filters.</p>
                <p className="mt-2 text-sm text-muted-ink">
                  Widen the price or size range, or pick another region.
                </p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="mt-5 rounded-lg bg-clay px-5 py-2.5 text-sm font-medium text-paper ring-1 ring-clay/40"
                >
                  Reset filters
                </button>
              </div>
            ) : (
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {results.map((p: Parcel) => (
                  <article
                    key={p.id}
                    className="overflow-hidden rounded-[min(1.2vw,16px)] bg-white/70 ring-1 ring-black/5 backdrop-blur-md"
                  >
                    <img
                      src={p.image}
                      alt={p.alt}
                      loading="lazy"
                      width={1024}
                      height={640}
                      className="aspect-[16/10] w-full bg-sand object-cover"
                    />
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-3">
                        <p className="font-serif text-2xl font-medium leading-none">
                          {money(p.price)}
                        </p>
                        <span className="mt-1 text-xs uppercase tracking-[0.15em] text-clay">
                          {p.region}
                        </span>
                      </div>
                      <p className="mt-3 text-pretty text-sm text-muted-ink">
                        {p.name} · {p.sqft.toLocaleString("en-IN")} sq ft · {p.acres} acre
                        {p.acres === 1 ? "" : "s"}
                      </p>
                      <p className="mt-1 text-pretty text-sm text-muted-ink">{p.notes}</p>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="why" className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[min(1.5vw,20px)] bg-white/50 p-8 ring-1 ring-white/60 backdrop-blur-xl md:p-12">
          <div className="grid items-center gap-10 md:grid-cols-[1.1fr_1fr]">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-clay">Why Terrafield</p>
              <h2 className="max-w-[18ch] text-balance font-serif text-4xl leading-[1] tracking-tight">
                We walk every plot before we list it.
              </h2>
              <p className="mt-5 max-w-[46ch] text-pretty text-muted-ink">
                Each parcel is surveyed, boundary-staked and verified by our field team, so the
                ground you buy is the ground you see.
              </p>
            </div>
            <ul className="grid gap-6">
              {[
                {
                  title: "Clear title guarantee",
                  body: "Deed-checked and encumbrance-free for 12 months.",
                },
                {
                  title: "On-site survey visits",
                  body: "Walk the stakes with an agent, any listed parcel.",
                },
                {
                  title: "Transparent per-acre pricing",
                  body: "No hidden fees, price matched to region benchmarks.",
                },
              ].map((item, i) => (
                <li key={item.title} className="flex gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-pine/10 font-serif font-semibold text-pine">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-pretty text-sm text-muted-ink">{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="agent" className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div className="flex flex-col rounded-[min(1.5vw,20px)] bg-pine p-8 text-paper">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-sky">Your field agent</p>
            <h2 className="font-serif text-3xl font-medium tracking-tight">Ananya Rao</h2>
            <p className="mt-1 text-sm text-paper/70">
              Land Broker · 14 yrs · Hyderabad &amp; Bengaluru
            </p>
            <img
              src={agentPortrait}
              alt="Ananya Rao, land broker, standing beside boundary stakes in a field"
              loading="lazy"
              width={768}
              height={1024}
              className="mt-6 aspect-[3/4] w-full rounded-[min(1vw,12px)] object-cover ring-1 ring-white/20"
            />
            <div className="mt-6 space-y-1 text-sm text-paper/80">
              <p>phone · +91 98490 11820</p>
              <p>email · ananya@terrafield.example</p>
            </div>
          </div>

          <div className="rounded-[min(1.5vw,20px)] bg-white/60 p-8 ring-1 ring-white/60 backdrop-blur-xl">
            <p className="mb-2 text-xs uppercase tracking-[0.3em] text-clay">Enquiry</p>
            <h3 className="mb-5 font-serif text-2xl font-medium tracking-tight">
              Ask about a parcel
            </h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-1.5">
                  <span className="text-xs uppercase tracking-[0.15em] text-muted-ink">Name</span>
                  <input
                    className="rounded-lg bg-white/80 px-3 py-2.5 text-sm ring-1 ring-line focus:outline-none focus:ring-2 focus:ring-clay/50"
                    placeholder="Your name"
                  />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="text-xs uppercase tracking-[0.15em] text-muted-ink">Email</span>
                  <input
                    type="email"
                    className="rounded-lg bg-white/80 px-3 py-2.5 text-sm ring-1 ring-line focus:outline-none focus:ring-2 focus:ring-clay/50"
                    placeholder="you@email.com"
                  />
                </label>
              </div>
              <label className="flex flex-col gap-1.5">
                <span className="text-xs uppercase tracking-[0.15em] text-muted-ink">
                  Region of interest
                </span>
                <select className="rounded-lg bg-white/80 px-3 py-2.5 text-sm ring-1 ring-line focus:outline-none focus:ring-2 focus:ring-clay/50">
                  <option>Any region</option>
                  {regions.map((r) => (
                    <option key={r}>{r}</option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-xs uppercase tracking-[0.15em] text-muted-ink">Message</span>
                <textarea
                  rows={3}
                  className="rounded-lg bg-white/80 px-3 py-2.5 text-sm ring-1 ring-line focus:outline-none focus:ring-2 focus:ring-clay/50"
                  placeholder="Which parcel or budget ranges are you exploring?"
                />
              </label>
              <button className="self-start rounded-lg bg-clay px-5 py-2.5 text-sm font-medium text-paper ring-1 ring-clay/40">
                Send enquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-line/70">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-6 py-8 text-sm text-muted-ink sm:flex-row sm:items-center">
          <p className="font-serif text-base font-medium text-ink">
            Terrafield — surveyed ground, fairly priced.
          </p>
          <p>© 2025 Terrafield Land Co. · Prototype, no live listings.</p>
        </div>
      </footer>
    </div>
  );
}
