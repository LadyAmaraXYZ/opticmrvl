import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const CONTRACT = "0x2071410f95285d47019bb8619022e350cb2e1e18";

const NAV = [
  { href: "#lineup", label: "Treatments" },
  { href: "#provider", label: "Your provider" },
  { href: "#paired", label: "The other statue" },
  { href: "#reviews", label: "Reviews" },
  { href: "/xposts", label: "Posts" },
  { href: "#faq", label: "Is this tonight?" },
];

const PILLS = [
  { title: "Dim the chart", tint: "bg-lav-soft" },
  { title: "Reschedule", tint: "bg-cream" },
  { title: "Hold the ice", tint: "bg-cream" },
  { title: "Closed this evening", tint: "bg-lav-soft" },
];

const LINEUP = [
  {
    kicker: "Daily original",
    name: "$HEADACHE",
    dose: "Not tonight money",
    line: "For staying in.",
    note: "The chart can wait until morning.",
  },
  {
    kicker: "2-in-1",
    name: "Ice Rx + Brightness",
    dose: "Included with every evening",
    line: "For premature green candles.",
    note: "A cloth pack. The screen, dimmed.",
  },
  {
    kicker: "Daily",
    name: "Adherence",
    dose: "Included with every evening",
    line: "For temporary loss of refusal.",
    note: "Sleep mask. Two thousand years.",
  },
  {
    kicker: "As needed",
    name: "Earnings + Do Not Disturb",
    dose: "Included with every evening",
    line: "For when the group chat asks if you are up.",
    note: "A transcript. The phone, face down.",
  },
  {
    kicker: "The other one",
    name: "Marcus Support",
    dose: "Not included. He is fine.",
    line: "For the statue who is always ready.",
    note: "He is always fine. I am the one with the headache.",
  },
];

const REVIEWS = [
  {
    name: "Paul, 59",
    rx: "Ice Rx + Brightness",
    quote: "I still check the chart. I just turn it down first.",
  },
  {
    name: "Brandon, 42",
    rx: "Adherence",
    quote: "It gave me the evening back. I feel like I am two thousand.",
  },
  {
    name: "Livia A., 2,000",
    rx: "Not tonight",
    quote: "I came for the coin. I left it unread.",
  },
  {
    name: "Jonathan, 46",
    rx: "Marcus Support",
    quote: "Real holders. Fictional ages. Marble results.",
  },
];

const FAQ = [
  {
    q: "What is $HEADACHE?",
    a: "A page with a statue and a headache. Not tonight money. The other statue is always ready. This one is not.",
  },
  {
    q: "Where is the contract?",
    a: "One line, under the headline. Copy it. It is still not an instruction to buy.",
  },
  {
    q: "Is this paired with Hers?",
    a: "In the joke, yes. The company is one stock. This page does not lock a share, does not run a pool, and does not speak for anyone at that company.",
  },
  {
    q: "Is this affiliated with Hims & Hers or Robinhood?",
    a: "No. Holding a joke conveys no ownership of any share or stock token. The other statue has his own page. This is the waiting room.",
  },
  {
    q: "When will I notice a difference?",
    a: "You may start saying not tonight during someone else's green candle.",
  },
  {
    q: "Is this medical advice?",
    a: "No. It is not financial advice either. It is a website with a statue who would like the lights lower.",
  },
];

const QUESTIONS = [
  "Marcus says he is ready.",
  "The candle is green.",
  "The group chat asks if you are still up.",
  "Someone calls it hard money.",
];

export function Site() {
  const [menu, setMenu] = useState(false);
  const [plan, setPlan] = useState(false);
  const [step, setStep] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    if (!plan && !menu) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setPlan(false);
        setMenu(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [plan, menu]);

  return (
    <div className="min-h-screen bg-cream text-ink">
      <header className="sticky top-0 z-30 border-b border-silver/70 bg-cream/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <a href="#top" className="font-display text-2xl tracking-tight">
            headache
          </a>
          <nav className="hidden items-center gap-6 text-sm text-muted lg:flex">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-ink">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#closed"
              className="hidden rounded-full border border-silver px-4 py-2 text-sm text-ink sm:inline"
            >
              Chart closed
            </a>
            <button
              type="button"
              onClick={() => setPlan(true)}
              className="rounded-full bg-ink px-4 py-2 text-sm text-cream"
            >
              Not tonight
            </button>
            <button
              type="button"
              className="grid size-11 place-items-center rounded-full border border-silver lg:hidden"
              aria-label={menu ? "Close menu" : "Open menu"}
              onClick={() => setMenu((value) => !value)}
            >
              {menu ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
        {menu ? (
          <nav className="flex flex-col gap-1 border-t border-silver px-5 py-3 lg:hidden">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-2xl px-3 py-3 text-base hover:bg-lav-soft"
                onClick={() => setMenu(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        ) : null}
      </header>

      <main id="top">
        <section className="mx-auto max-w-6xl px-5 pt-12 pb-8">
          <p className="text-sm tracking-wide text-lav">Not tonight money</p>
          <h1 className="mt-3 max-w-3xl font-display text-5xl leading-none tracking-tight sm:text-7xl">
            The night off you have always deserved
          </h1>
          <ContractBox />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <a href="#lineup" className="group relative overflow-hidden rounded-card">
              <img
                src="/art/temple.jpg"
                alt="Marble statue with a hand at her temple and an ice pack on her shoulder"
                className="aspect-square w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-night/80 via-night/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-cream">
                <p className="font-display text-3xl leading-tight">
                  Start your night off today
                </p>
                <p className="mt-2 text-sm text-silver">Find your excuse</p>
              </div>
            </a>
            <a href="#provider" className="group relative overflow-hidden rounded-card">
              <img
                src="/art/provider.jpg"
                alt="The same statue in a clinic coat, unimpressed, holding a pill organizer"
                className="aspect-square w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-night/80 via-night/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-cream">
                <p className="font-display text-3xl leading-tight">
                  Come for the coin. Leave for the headache.
                </p>
                <p className="mt-2 text-sm text-silver">
                  One statue. Always the wrong evening.
                </p>
              </div>
            </a>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {PILLS.map((pill) => (
              <a
                key={pill.title}
                href="#lineup"
                className={`flex items-center justify-between rounded-card border border-silver px-4 py-4 ${pill.tint}`}
              >
                <span className="font-medium">{pill.title}</span>
                <span className="text-lav" aria-hidden>
                  →
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="bg-night text-cream">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <h2 className="max-w-xl font-display text-4xl leading-tight sm:text-5xl">
              Your evening off is here
            </h2>
            <p className="mt-4 max-w-lg text-silver">
              Hold up to bedtime with $HEADACHE. Fewer options than the other
              statue. That is the treatment.
            </p>
          </div>
        </section>

        <section id="lineup" className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-sm text-lav">The lineup</p>
          <h2 className="mt-2 font-display text-4xl">Five ways to say not tonight</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {LINEUP.map((item) => (
              <article
                key={item.name}
                className="rounded-card border border-silver bg-card p-6"
              >
                <p className="text-xs tracking-wide text-muted uppercase">{item.kicker}</p>
                <h3 className="mt-2 font-display text-3xl">{item.name}</h3>
                <p className="mt-1 text-sm text-lav">{item.dose}</p>
                <p className="mt-4 text-lg">{item.line}</p>
                <p className="mt-2 text-muted">{item.note}</p>
              </article>
            ))}
            <article className="overflow-hidden rounded-card border border-silver bg-card md:col-span-2">
              <img
                src="/art/fridge.jpg"
                alt="The statue opening a fridge stocked with ice packs"
                className="aspect-square w-full object-cover sm:aspect-video"
              />
            </article>
          </div>
        </section>

        <section id="provider" className="bg-lav-soft">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2">
            <img
              src="/art/provider.jpg"
              alt="Livia, marble, clinic coat, sunglasses"
              className="aspect-square w-full rounded-card object-cover"
            />
            <div>
              <p className="text-sm text-lav">Meet your provider</p>
              <h2 className="mt-2 font-display text-4xl">Livia A., 2,000</h2>
              <p className="mt-2 text-muted">Special interest: premature enthusiasm.</p>
              <p className="mt-4 text-lg">
                A calm presence through green candles. And several empires. She
                refers to the other statue as her patient.
              </p>
              <ul className="mt-6 space-y-3 text-ink">
                <li className="rounded-2xl bg-card px-4 py-3">“He says he is ready.”</li>
                <li className="rounded-2xl bg-card px-4 py-3">“The chart is up and I am tired.”</li>
                <li className="rounded-2xl bg-card px-4 py-3">“I bought nothing. I also sold nothing.”</li>
                <li className="rounded-2xl bg-card px-4 py-3">“Can we do this tomorrow.”</li>
              </ul>
              <button
                type="button"
                onClick={() => {
                  setStep(QUESTIONS.length);
                  document.getElementById("quiz")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="mt-6 rounded-full bg-ink px-5 py-3 text-cream"
              >
                Book a consultation
              </button>
            </div>
          </div>
        </section>

        <section id="paired" className="mx-auto max-w-6xl px-5 py-16">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm text-lav">Paired. Barely.</p>
              <h2 className="mt-2 font-display text-4xl">He is always ready. She is not.</h2>
              <p className="mt-4 text-lg text-muted">
                The other statue has the loud page, the green candle, and the
                hard-money line. This one has the ice pack. Same company joke.
                Opposite evening.
              </p>
              <p className="mt-4">
                headacheonlong.xyz. Read it out loud. Then go to bed.
              </p>
            </div>
            <img
              src="/art/bed.jpg"
              alt="The statue in bed on a beach, sunglasses on, ice pack in place"
              className="w-full rounded-card object-cover"
            />
          </div>
        </section>

        <section id="closed" className="bg-night text-cream">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-2 md:items-center">
            <img
              src="/art/track.jpg"
              alt="The statue asleep in the starting blocks, eye mask on her forehead"
              className="w-full rounded-card object-cover"
            />
            <div>
              <p className="text-sm text-silver">The chart</p>
              <h2 className="mt-2 font-display text-4xl">Closed for the evening</h2>
              <p className="mt-4 text-silver">
                No price. No candle. The contract is the line under the
                headline. The diagnosis does not change.
              </p>
              <div className="mt-6 rounded-card border border-white/15 p-4">
                <svg viewBox="0 0 320 80" className="h-20 w-full" aria-hidden>
                  <line
                    x1="8"
                    y1="40"
                    x2="312"
                    y2="40"
                    stroke="#c5c8ce"
                    strokeWidth="2"
                  />
                </svg>
                <p className="text-sm text-silver">Slow and closed.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-sm text-lav">Around</p>
          <h2 className="mt-2 font-display text-4xl">She declined to comment</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <figure className="md:col-span-2 overflow-hidden rounded-card">
              <img
                src="/art/desk.jpg"
                alt="The statue on a generic news desk, holding tea, looking tired"
                className="aspect-video w-full object-cover"
              />
              <figcaption className="bg-night px-4 py-3 text-sm text-cream">
                Parody desk. Not a network. Lower third would have said not tonight.
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-card">
              <img
                src="/art/rocket.jpg"
                alt="The statue walking away from a firework on the beach"
                className="aspect-video w-full object-cover"
              />
            </figure>
          </div>
          <p className="mt-4 max-w-2xl text-sm text-muted">
            Side effects may include rescheduling, soft blankets, and maybe
            tomorrow. Not medical advice. Not a security. Probably.
          </p>
        </section>

        <section id="reviews" className="bg-lav-soft">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <h2 className="font-display text-4xl">Patient reviews</h2>
            <p className="mt-2 text-muted">Declined, never excited.</p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {REVIEWS.map((review) => (
                <blockquote key={review.name} className="rounded-card bg-card p-6">
                  <p className="text-lg">{review.quote}</p>
                  <footer className="mt-4 text-sm text-muted">
                    <span className="text-ink">{review.name}</span>
                    {" · "}
                    {review.rx}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section id="quiz" className="mx-auto max-w-6xl px-5 py-16">
          <div className="rounded-card border border-silver bg-card p-6 sm:p-10">
            <p className="text-sm text-lav">Is $HEADACHE right for me?</p>
            <h2 className="mt-2 font-display text-4xl">The quiz</h2>
            {step < QUESTIONS.length ? (
              <div className="mt-6">
                <p className="text-xl">{QUESTIONS[step]}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    type="button"
                    className="rounded-full bg-ink px-5 py-3 text-cream"
                    onClick={() => setStep((value) => value + 1)}
                  >
                    Not tonight
                  </button>
                  <button
                    type="button"
                    className="rounded-full border border-silver px-5 py-3"
                    onClick={() => setStep((value) => value + 1)}
                  >
                    Ask again tomorrow
                  </button>
                </div>
                <p className="mt-4 text-sm text-muted">
                  Question {step + 1} of {QUESTIONS.length}. Both answers are the same answer.
                </p>
              </div>
            ) : (
              <div className="mt-6">
                <p className="font-display text-5xl">Not tonight.</p>
                <p className="mt-3 max-w-lg text-muted">
                  Diagnosis: headache. Plan: reschedule. Marcus can stay ready.
                  You can close the chart.
                </p>
                <button
                  type="button"
                  className="mt-6 text-sm text-lav"
                  onClick={() => setStep(0)}
                >
                  Take it again. Same result.
                </button>
              </div>
            )}
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-6xl px-5 pb-16">
          <h2 className="font-display text-4xl">Questions</h2>
          <div className="mt-6 divide-y divide-silver border-y border-silver">
            {FAQ.map((item, index) => {
              const open = openFaq === index;
              return (
                <div key={item.q}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 py-4 text-left text-lg"
                    aria-expanded={open}
                    onClick={() => setOpenFaq(open ? null : index)}
                  >
                    {item.q}
                    <span className="text-lav">{open ? "–" : "+"}</span>
                  </button>
                  {open ? <p className="pb-4 text-muted">{item.a}</p> : null}
                </div>
              );
            })}
          </div>
        </section>

        <section className="bg-night text-cream">
          <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-16 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-4xl sm:text-5xl">Ready when you are not.</h2>
              <p className="mt-3 text-silver">A little darkness for your long position.</p>
            </div>
            <button
              type="button"
              onClick={() => setPlan(true)}
              className="rounded-full bg-cream px-5 py-3 text-ink"
            >
              Not tonight
            </button>
          </div>
        </section>
      </main>

      <footer className="border-t border-silver">
        <div className="mx-auto max-w-6xl px-5 py-10 text-sm text-muted">
          <p className="font-display text-2xl text-ink">headache</p>
          <p className="mt-3 max-w-2xl">
            A meme page, not affiliated with Hims & Hers or Robinhood. Not
            medical advice. Not financial advice. The contract is the line
            under the headline. It conveys no ownership of any share or stock
            token. The reviews are jokes. The quiz always says not tonight.
          </p>
          <p className="mt-4">headacheonlong.xyz · Livia A. · marble</p>
        </div>
      </footer>

      {plan ? (
        <div className="fixed inset-0 z-40 grid place-items-end bg-night/50 p-4 sm:place-items-center">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="plan-title"
            className="w-full max-w-md rounded-card bg-cream p-6 text-ink shadow-xl"
          >
            <p className="text-sm text-lav">headache × the evening</p>
            <h2 id="plan-title" className="mt-2 font-display text-4xl">
              Your night is cancelled.
            </h2>
            <p className="mt-3 text-muted">
              $HEADACHE. The contract is already on the page. The plan is still
              to wait, dim the chart, and let the other statue have the
              headline.
            </p>
            <div className="mt-6 flex gap-3">
              <button
                type="button"
                className="rounded-full bg-ink px-5 py-3 text-cream"
                onClick={() => setPlan(false)}
              >
                Not tonight
              </button>
              <button
                type="button"
                className="rounded-full px-5 py-3 text-muted"
                onClick={() => setPlan(false)}
              >
                Not now
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function ContractBox() {
  const [copied, setCopied] = useState(false);
  const ready = CONTRACT.length > 0;

  return (
    <div
      id="ca"
      className="mt-8 flex max-w-2xl flex-col gap-3 rounded-card border border-silver bg-lav-soft p-4 sm:flex-row sm:items-center sm:justify-between"
    >
      <div className="min-w-0">
        <p className="text-xs tracking-wide text-lav">Contract</p>
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
        className="shrink-0 rounded-full bg-lav px-4 py-2 text-sm text-cream disabled:cursor-not-allowed disabled:opacity-40"
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
