import { useState } from "react";

const STOCK = "0x62fd0668e10d8b72339be2dcf7643001688ff13b";

const FIGURES = [
  { k: "Fiscal 2028", v: "$20B", n: "Raised from $18B. The street had $18.2B." },
  { k: "Fiscal 2031", v: "$70–90B", n: "The first year they put a number on." },
  { k: "Their market", v: "$400B", n: "What they say AI is worth by 2030." },
];

export function Optic() {
  const [copied, setCopied] = useState(false);

  async function copyStock() {
    try {
      await navigator.clipboard.writeText(STOCK);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <main className="bg-void text-paper">
      <section className="relative min-h-screen">
        <img
          src="/optic/aisle.jpg"
          alt="A single amber beam crossing a dark aisle of racks"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-shade absolute inset-0" />
        <header className="absolute inset-x-0 top-0 z-10 mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
          <p className="font-display text-lg tracking-tight">$OPTIC</p>
          <a href="#pair" className="text-sm text-paper">
            The pair
          </a>
        </header>
        <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-end px-5 pb-14 pt-28">
          <p className="text-sm uppercase tracking-widest text-signal">
            Investor Day · New York · 6 Oct 2026
          </p>
          <h1 className="font-display mt-4 max-w-3xl text-balance text-5xl text-paper sm:text-7xl">
            The processor is not the constraint.
          </h1>
          <p className="mt-4 max-w-xl text-pretty text-xl text-paper sm:text-2xl">
            The light between them is.
          </p>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl sm:grid-cols-3">
          {FIGURES.map((item) => (
            <article
              key={item.k}
              className="border-b border-line px-5 py-8 sm:border-b-0 sm:border-r sm:last:border-r-0"
            >
              <p className="text-sm text-dim">{item.k}</p>
              <p className="font-display mt-2 text-4xl tabular-nums text-paper sm:text-5xl">
                {item.v}
              </p>
              <p className="mt-3 max-w-xs text-pretty text-sm leading-relaxed text-dim">
                {item.n}
              </p>
            </article>
          ))}
        </div>
        <p className="mx-auto max-w-6xl px-5 pb-8 text-sm text-dim">
          Said on the day, about the company. Not a forecast for this token.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:grid-cols-2 sm:py-24">
        <img
          src="/optic/module.jpg"
          alt="An optical module, one amber wavelength in the fiber"
          className="w-full rounded-card object-cover"
        />
        <div>
          <h2 className="font-display text-balance text-4xl">Two businesses. One of them is light.</h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-dim">
            Matt Murphy stood up in New York and split the company. One side
            designs the processor a cloud wants under its own name. The other
            carries what those processors pass between racks. More processors
            make more traffic. The traffic is light.
          </p>
          <p className="mt-4 text-pretty leading-relaxed text-paper">
            $OPTIC is the second sentence. Paired with the Marvell stock token
            on Pons. Not the share. Not the company.
          </p>
        </div>
      </section>

      <section className="relative fiber-band">
        <img
          src="/optic/fiber.jpg"
          alt="One strand of fiber lit, the rest dark"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="fiber-shade absolute inset-0" />
        <div className="relative z-10 flex fiber-band max-w-xl flex-col justify-end px-5 py-12">
          <h2 className="font-display text-balance text-4xl">One wavelength.</h2>
          <p className="mt-3 text-pretty text-lg text-paper">The rest of the coil stays dark.</p>
          <ul className="mt-8 space-y-2 text-sm text-paper">
            <li>Not Marvel. The comics already died on this pair.</li>
            <li>Not Hulk, not a spider, not an avenger.</li>
            <li>Not a claim on their revenue or their stock.</li>
          </ul>
        </div>
      </section>

      <section id="pair" className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:grid-cols-5 sm:py-24">
          <div className="sm:col-span-2">
            <h2 className="font-display text-4xl">The pair</h2>
            <p className="mt-4 text-pretty leading-relaxed text-dim">
              Pons lists MRVL. Long does not. The token address lands here
              after the deploy. Until then the only contract on the page is
              the share it quotes.
            </p>
          </div>
          <dl className="grid gap-4 sm:col-span-3">
            <div className="rounded-card border border-line p-5">
              <dt className="text-sm text-dim">$OPTIC</dt>
              <dd className="font-display mt-2 text-3xl">Not deployed</dd>
            </div>
            <div className="rounded-card border border-line p-5">
              <dt className="text-sm text-dim">MRVL · Robinhood Token</dt>
              <dd className="mt-3 break-all text-sm leading-relaxed">{STOCK}</dd>
              <button
                type="button"
                onClick={copyStock}
                className="mt-5 min-h-11 rounded-full bg-signal px-5 text-sm text-void"
              >
                {copied ? "Copied" : "Copy the pair"}
              </button>
            </div>
          </dl>
        </div>
      </section>

      <footer className="border-t border-line px-5 py-8 text-sm text-dim">
        <p className="mx-auto max-w-6xl text-pretty">
          $OPTIC is a meme on Robinhood Chain. It is not Marvell Technology,
          not an affiliate, and not the stock. The figures are what the company
          said at Investor Day. The chain does not owe you that math.
        </p>
      </footer>
    </main>
  );
}
