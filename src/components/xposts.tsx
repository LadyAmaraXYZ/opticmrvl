import { useState } from "react";
import { listing, posts, profile } from "@/lib/xposts";

async function writeClipboard(text: string) {
  await navigator.clipboard.writeText(text);
}

export function XPosts() {
  const [copied, setCopied] = useState<string | null>(null);

  async function copy(id: string, text: string) {
    await writeClipboard(text);
    setCopied(id);
  }

  return (
    <div className="min-h-screen bg-cream text-ink">
      <header className="sticky top-0 z-30 border-b border-gold/40 bg-cream/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <a href="/" className="font-display text-2xl tracking-tight">
            bonerina
          </a>
          <nav className="flex items-center gap-5 text-sm text-muted">
            <a href="/" className="hover:text-ink">
              Home
            </a>
            <a href="/xposts" className="font-display text-2xl leading-none text-gold">
              X News
            </a>
            <a
              href={profile.x}
              target="_blank"
              rel="noreferrer"
              className="hidden text-wine hover:text-ink sm:inline"
            >
              @{profile.handle}
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 py-12">
        <p className="text-sm tracking-wide text-gold">X, ready to post</p>
        <h1 className="mt-3 max-w-3xl font-display text-5xl text-wine sm:text-6xl">
          Twenty-one ways to turn
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          Copy the line. Download the picture. No tag. No price.
        </p>

        <section className="mt-10 overflow-hidden rounded-card border border-gold/40 bg-card">
          <img
            src="/x/banner.jpg"
            alt="Banner. The pair at dinner, faces and shoulders, city behind."
            className="aspect-[3/1] w-full object-cover"
          />
          <div className="flex flex-col gap-6 p-5 sm:flex-row sm:items-start sm:p-8">
            <img
              src="/x/avatar.jpg"
              alt="Square avatar. Cat-eye sunglasses, gold laurel, burgundy shoulder."
              className="size-28 shrink-0 rounded-full object-cover ring-4 ring-cream"
            />
            <div className="min-w-0 flex-1">
              <p className="font-display text-3xl">{profile.name}</p>
              <a
                href={profile.x}
                target="_blank"
                rel="noreferrer"
                className="text-wine hover:underline"
              >
                @{profile.handle}
              </a>
              <dl className="mt-4 grid gap-3 text-sm">
                <Field label="Bio" value={profile.bio} copied={copied === "bio"} onCopy={() => copy("bio", profile.bio)} />
                <Field
                  label="Location"
                  value={profile.location}
                  copied={copied === "location"}
                  onCopy={() => copy("location", profile.location)}
                />
                <Field label="Link" value={profile.link} copied={copied === "link"} onCopy={() => copy("link", profile.link)} />
              </dl>
              <div className="mt-5 flex flex-wrap gap-2">
                <a href="/x/avatar.jpg" download="bonerina-avatar.jpg" className="rounded-full bg-wine px-4 py-2 text-sm text-cream">
                  Download avatar
                </a>
                <a
                  href={profile.x}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-gold/40 px-4 py-2 text-sm"
                >
                  Open on X
                </a>
                <a
                  href="/x/banner.jpg"
                  download="bonerina-banner.jpg"
                  className="rounded-full border border-gold/40 px-4 py-2 text-sm"
                >
                  Download banner
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-card border border-gold/40 bg-card p-5 sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <img
              src="/x/avatar.jpg"
              alt="Square profile. Cat-eye sunglasses and a gold laurel."
              className="size-28 shrink-0 rounded-3xl object-cover"
            />
            <div className="min-w-0 flex-1">
              <p className="text-sm tracking-wide text-gold">Dexscreener and long.xyz</p>
              <p className="mt-2 font-display text-3xl">{listing.slogan}</p>
              <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-muted">{listing.description}</p>
              <p className="mt-3 text-sm text-muted">
                Description box takes plain text. No link in it. Put the site in the website field. Icon is 500×500.
                Banner for the header is 1500×500.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => copy("listing", listing.description)}
                  className="rounded-full bg-wine px-4 py-2 text-sm text-cream"
                >
                  {copied === "listing" ? "Copied" : "Copy description"}
                </button>
                <a href="/x/avatar.jpg" download="bonerina-square.jpg" className="rounded-full border border-gold/40 px-4 py-2 text-sm">
                  Download square
                </a>
                <a
                  href="/x/banner-1500.jpg"
                  download="bonerina-banner-1500.jpg"
                  className="rounded-full border border-gold/40 px-4 py-2 text-sm"
                >
                  Download header
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-8 sm:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.id}
              className={`overflow-hidden rounded-card border border-gold/40 bg-card ${"wide" in post && post.wide ? "sm:col-span-2" : ""}`}
            >
              <img
                src={post.file}
                alt={post.alt}
                className={"wide" in post && post.wide ? "aspect-video w-full object-cover" : "aspect-square w-full object-cover"}
              />
              <div className="p-5">
                <p className="whitespace-pre-line text-base leading-relaxed">{post.caption}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => copy(post.id, post.caption)}
                    className="rounded-full bg-wine px-4 py-2 text-sm text-cream"
                  >
                    {copied === post.id ? "Copied" : "Copy post"}
                  </button>
                  <a href={post.file} download={post.download} className="rounded-full border border-gold/40 px-4 py-2 text-sm">
                    Download image
                  </a>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}

function Field({
  label,
  value,
  copied,
  onCopy,
}: {
  label: string;
  value: string;
  copied: boolean;
  onCopy: () => void;
}) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-2xl bg-cream px-4 py-3">
      <div>
        <dt className="text-xs tracking-wide text-gold">{label}</dt>
        <dd className="mt-1 text-ink">{value}</dd>
      </div>
      <button type="button" onClick={onCopy} className="shrink-0 text-sm text-muted hover:text-ink">
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
