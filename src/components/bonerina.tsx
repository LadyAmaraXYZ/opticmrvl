import { useState } from "react";
import { Menu, X } from "lucide-react";
import { X_ACCOUNT } from "@/lib/xposts";

const CONTRACT = "0x8b7924fe528fb87a58ded8a7e20e472cb9931e18";

const NAV = [
  { href: "#pair", label: "The pair" },
  { href: "#floor", label: "The floor" },
  { href: "#evening", label: "The evening" },
  { href: "/xposts", label: "X News" },
  { href: "#questions", label: "Questions" },
];

const FLOOR = [
  {
    src: "/bonerina/beach.jpg",
    title: "The lounger",
    line: "His scene was the bench. Hers is the coast.",
    className: "sm:col-span-2",
    imageClass: "aspect-video",
  },
  {
    src: "/bonerina/catwalk.jpg",
    title: "The walk",
    line: "Train, ribbon, no rush.",
    className: "",
    imageClass: "aspect-[2/3]",
  },
  {
    src: "/bonerina/fridge.jpg",
    title: "The cellar",
    line: "Champagne. Not a prescription.",
    className: "",
    imageClass: "aspect-[2/3]",
  },
  {
    src: "/bonerina/desk.jpg",
    title: "The desk",
    line: "She entered the chat. The banner is a joke.",
    className: "sm:col-span-2",
    imageClass: "aspect-video",
  },
  {
    src: "/bonerina/track.jpg",
    title: "The landing",
    line: "Soft landing. The hard money can jog.",
    className: "",
    imageClass: "aspect-video",
  },
  {
    src: "/bonerina/admirers.jpg",
    title: "The room",
    line: "They swoon. She does not.",
    className: "",
    imageClass: "aspect-[2/3]",
  },
];

const QUESTIONS = [
  {
    q: "What is $BONERINA?",
    a: "The partner statue. Every boner has a bonerina. Same marble, burgundy instead of green, a turn instead of a flex.",
  },
  {
    q: "Is this Hers, Hims, or Robinhood?",
    a: "No. A parody page. Not a clinic, not a company, not their campaign.",
  },
  {
    q: "Where is the contract?",
    a: "Under the headline. An address, not an instruction to buy.",
  },
  {
    q: "Does she lock a share?",
    a: "This page does not. No pool, no price, no yield. The dance is the joke.",
  },
];

export function Bonerina() {
  const [menu, setMenu] = useState(false);
  const [open, setOpen] = useState<number | null>(0);
  const [copied, setCopied] = useState(false);
  const ready = CONTRACT.length > 0;

  return (
    <div className="min-h-screen bg-cream text-ink">
      <header className="sticky top-0 z-30 border-b border-gold/30 bg-cream/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <a href="#top" className="font-display text-2xl text-wine">
            bonerina
          </a>
          <nav className="hidden items-center gap-6 text-sm text-muted lg:flex">
            {NAV.map((item) =>
              item.href === "/xposts" ? (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full bg-gold px-4 py-1.5 font-display text-2xl leading-none text-wine-deep hover:bg-wine hover:text-cream"
                >
                  {item.label}
                </a>
              ) : (
                <a key={item.href} href={item.href} className="hover:text-wine">
                  {item.label}
                </a>
              ),
            )}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={X_ACCOUNT}
              target="_blank"
              rel="noreferrer"
              aria-label="BONERINA on X"
              className="grid size-11 place-items-center rounded-full border border-gold/60 text-wine hover:bg-wine hover:text-cream"
            >
              <XGlyph />
            </a>
            <a
              href="#ca"
              className="hidden rounded-full bg-wine px-4 py-2 text-sm text-cream sm:inline"
            >
              The line
            </a>
            <button
              type="button"
              className="grid size-11 place-items-center rounded-full border border-gold/50 lg:hidden"
              aria-label={menu ? "Close menu" : "Open menu"}
              onClick={() => setMenu((value) => !value)}
            >
              {menu ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
        {menu ? (
          <nav className="flex flex-col gap-1 border-t border-gold/30 px-5 py-3 lg:hidden">
            {NAV.map((item) =>
              item.href === "/xposts" ? (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl bg-gold px-4 py-4 font-display text-4xl leading-none text-wine-deep"
                  onClick={() => setMenu(false)}
                >
                  {item.label}
                </a>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-3 py-3 hover:bg-wine-soft"
                  onClick={() => setMenu(false)}
                >
                  {item.label}
                </a>
              ),
            )}
            <a
              href={X_ACCOUNT}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl px-3 py-3 text-wine"
              onClick={() => setMenu(false)}
            >
              X · bonerinalong
            </a>
          </nav>
        ) : null}
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:py-16">
          <div>
            <p className="text-sm tracking-[0.22em] text-gold">THE PARTNER</p>
            <h1 className="mt-4 max-w-xl font-display text-5xl text-wine sm:text-7xl">
              Every BONER needs a BONERINA.
            </h1>
            <p className="mt-5 max-w-md text-lg text-muted">
              He holds the flex. She holds the turn. Polished marble, tilted
              gold, burgundy silk, ribbons up the calf.
            </p>
            <div
              id="ca"
              className="mt-8 flex max-w-xl flex-col gap-3 rounded-card border border-gold/50 bg-wine-soft p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="min-w-0">
                <p className="text-xs tracking-[0.18em] text-gold">CONTRACT</p>
                <p className="mt-1 font-mono text-sm break-all text-ink">
                  {ready ? CONTRACT : "Not posted yet"}
                </p>
              </div>
              <button
                type="button"
                disabled={!ready}
                onClick={() => {
                  void navigator.clipboard.writeText(CONTRACT);
                  setCopied(true);
                }}
                className="shrink-0 rounded-full bg-wine px-4 py-2 text-sm text-cream disabled:cursor-not-allowed disabled:opacity-40"
              >
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
          </div>
          <figure className="relative">
            <div className="absolute -inset-3 -z-10 rounded-card bg-gold-soft" />
            <img
              src="/bonerina/hero.jpg"
              alt="Polished marble goddess in a burgundy toga, cat-eye sunglasses, gold laurel, looking back over her shoulder"
              className="aspect-[3/4] w-full rounded-card object-cover object-top"
            />
            <figcaption className="mt-3 text-sm text-muted">
              Deadpan diva. Not a dose.
            </figcaption>
          </figure>
        </section>

        <div className="overflow-hidden border-y border-gold/40 bg-wine text-cream">
          <p className="ribbon-track w-max py-3 text-sm tracking-[0.28em]">
            {Array.from({ length: 2 }).map((_, index) => (
              <span key={index} className="px-4">
                EVERY BONER NEEDS A BONERINA · THE TURN · THE RIBBON · SOFT
                LANDING · NOT A SECURITY ·
              </span>
            ))}
          </p>
        </div>

        <section id="pair" className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-16 lg:grid-cols-2">
          <img
            src="/bonerina/duo.jpg"
            alt="Two marble statues. He wears green and square sunglasses. She wears burgundy and cat-eye sunglasses."
            className="w-full rounded-card object-cover"
          />
          <div>
            <p className="text-sm tracking-[0.22em] text-gold">SAME PEDESTAL</p>
            <h2 className="mt-3 font-display text-4xl text-wine sm:text-5xl">
              He flexes. She looks back.
            </h2>
            <p className="mt-4 text-lg text-muted">
              One statue in green, proud of the set. One statue in burgundy,
              already the picture. The joke only works as a pair. This page is
              the second statue, not a clinic and not his ticker.
            </p>
            <ul className="mt-6 grid gap-3 text-sm">
              <li className="rounded-2xl border border-gold/30 bg-card px-4 py-3">
                <span className="text-gold">His</span> white marble, square
                glasses, the loud evening.
              </li>
              <li className="rounded-2xl border border-gold/30 bg-wine-soft px-4 py-3">
                <span className="text-wine">Hers</span> polished marble, cat-eye,
                ribbons, the turn.
              </li>
            </ul>
          </div>
        </section>

        <section id="floor" className="bg-wine-deep text-cream">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <p className="text-sm tracking-[0.22em] text-gold">THE FLOOR</p>
            <h2 className="mt-3 max-w-xl font-display text-4xl sm:text-5xl">
              Six rooms. One shoulder bare. That is the whole wardrobe.
            </h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {FLOOR.map((scene) => (
                <article key={scene.title} className={scene.className}>
                  <img
                    src={scene.src}
                    alt={scene.title}
                    className={`${scene.imageClass} w-full rounded-card object-cover`}
                  />
                  <h3 className="mt-3 font-display text-2xl">{scene.title}</h3>
                  <p className="text-sm text-gold-soft">{scene.line}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="evening" className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm tracking-[0.22em] text-gold">DATE NIGHT</p>
            <h2 className="mt-3 font-display text-4xl text-wine sm:text-5xl">
              Breadsticks. No speech.
            </h2>
            <p className="mt-4 text-muted">
              Both of them dressed, both of them deadpan, the city behind the
              glass. Side effects may include main-character energy and
              unsolicited compliments. Not medical advice. Not a security.
              Probably.
            </p>
          </div>
          <img
            src="/bonerina/dinner.jpg"
            alt="The two marble statues at a candlelit rooftop table, sunglasses still on"
            className="w-full rounded-card object-cover"
          />
        </section>

        <section id="questions" className="border-t border-gold/30">
          <div className="mx-auto max-w-3xl px-5 py-16">
            <h2 className="font-display text-4xl text-wine">Questions</h2>
            <div className="mt-6 divide-y divide-gold/30">
              {QUESTIONS.map((item, index) => {
                const shown = open === index;
                return (
                  <div key={item.q}>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-4 py-4 text-left"
                      aria-expanded={shown}
                      onClick={() => setOpen(shown ? null : index)}
                    >
                      <span className="font-display text-2xl">{item.q}</span>
                      <span className="text-gold">{shown ? "–" : "+"}</span>
                    </button>
                    {shown ? <p className="pb-4 text-muted">{item.a}</p> : null}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gold/30 bg-wine-deep text-cream">
        <div className="mx-auto max-w-6xl px-5 py-10 text-sm">
          <p className="font-display text-3xl">bonerina</p>
          <p className="mt-3 max-w-2xl text-gold-soft">
            A meme page. Not affiliated with Hims, Hers, or Robinhood. Not
            medical advice. Not financial advice. The contract is the line
            under the headline. Not an instruction to buy.
            The statues are statues. The ribbons are the signature, not a
            promise.
          </p>
          <p className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-gold">
            <a href="https://bonerina.xyz" className="hover:text-cream">
              bonerina.xyz
            </a>
            <a href={X_ACCOUNT} target="_blank" rel="noreferrer" className="hover:text-cream">
              x.com/bonerinalong
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

function XGlyph() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4">
      <path
        fill="currentColor"
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z"
      />
    </svg>
  );
}
