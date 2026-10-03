import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import profileAsset from "@/assets/xalixia-profile.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Xalixia — Links & Projects" },
      {
        name: "description",
        content: "Kumpulan proyek, tools, AI, dan karya digital Xalixia.",
      },
      { property: "og:title", content: "Xalixia — Links & Projects" },
      {
        property: "og:description",
        content: "Temukan semua proyek dan tools digital Xalixia di satu tempat.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const links = [
  {
    emoji: "📤",
    title: "Uploader",
    description: "Tempat upload file",
    href: "https://x.xcute.workers.dev",
    tone: "maroon",
  },
  {
    emoji: "✦",
    title: "Xalixia Tools & AI",
    description: "Kumpulan website tools dan chat dengan AI",
    href: "https://www.xalixia.biz.id",
    tone: "maroon",
  },
  {
    emoji: "▦",
    title: "QR & PDF Tools",
    description: "Pembuat QR code plus tools PDF",
    href: "https://qrcode-v1-one.vercel.app/",
    tone: "maroon",
  },
  {
    emoji: "🧾",
    title: "QRIS Xalixia",
    description: "Web support admin Xalixia",
    href: "https://qris-xalixia.xcute.workers.dev",
    tone: "maroon",
  },
  {
    emoji: "💬",
    title: "Kontak WhatsApp",
    description: "Chat aku langsung via WhatsApp",
    href: "https://wa.me/message/WVMCXAZZNVXEP1",
    tone: "maroon",
  },
] as const;

function Index() {
  return (
    <div className="link-hub min-h-screen overflow-hidden px-5 py-10 sm:px-8 sm:py-14">
      <svg
        aria-hidden="true"
        className="pointer-events-none fixed -right-20 -top-16 h-64 w-64 text-near-black opacity-35 sm:h-80 sm:w-80"
        viewBox="0 0 200 200"
      >
        <path fill="currentColor" d="M100 0 120 70 190 48 137 99 200 132 126 126 130 200 96 137 45 190 68 120 0 100 70 80Z" />
      </svg>
      <svg
        aria-hidden="true"
        className="pointer-events-none fixed -bottom-16 -left-16 h-52 w-52 text-deep-maroon opacity-20"
        viewBox="0 0 200 200"
      >
        <path fill="currentColor" d="M100 0 120 70 190 48 137 99 200 132 126 126 130 200 96 137 45 190 68 120 0 100 70 80Z" />
      </svg>

      <main className="relative z-10 mx-auto w-full max-w-[33rem]">
        <header className="mb-10 text-center">
          <div className="avatar-frame mx-auto mb-7 h-32 w-32 sm:h-36 sm:w-36">
            <img
              src={profileAsset.url}
              alt="Foto profil Xalixia"
              className="h-full w-full object-cover"
            />
          </div>
          <p className="mb-1 font-body text-xs font-bold uppercase tracking-[0.18em] text-near-black">
            Digital Playground
          </p>
          <h1 className="font-display text-6xl uppercase leading-none text-near-black sm:text-7xl">
            Xalixia
          </h1>
          <p className="mx-auto mt-4 max-w-sm font-body text-sm font-semibold leading-relaxed text-near-black/80 sm:text-base">
            Tools, eksperimen, dan karya digital—semuanya ada di sini.
          </p>
        </header>

        <nav aria-label="Tautan proyek Xalixia">
          <ul className="space-y-5">
            {links.map((link, index) => (
              <li key={link.href} className="link-reveal" style={{ animationDelay: `${index * 80 + 80}ms` }}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${link.title}: ${link.description} (terbuka di tab baru)`}
                  className={`project-link ${link.tone === "maroon" ? "project-link-maroon" : "project-link-maroon"}`}
                >
                  <span aria-hidden="true" className="link-icon">
                    {link.emoji}
                  </span>
                  <span className="min-w-0 flex-1 text-left">
                    <span className="block font-display text-2xl uppercase leading-none sm:text-[1.75rem]">
                      {link.title}
                    </span>
                    <span className="mt-1 block font-body text-xs font-semibold leading-snug opacity-75 sm:text-sm">
                      {link.description}
                    </span>
                  </span>
                  <ArrowUpRight aria-hidden="true" className="h-7 w-7 shrink-0 stroke-[3]" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <footer className="mt-12 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-body text-xs font-bold uppercase text-near-black/75">
          <span>© 2026 Xalixia</span>
          <span aria-hidden="true">•</span>
          <span>Dibuat dengan <span className="text-accent">♥</span></span>
        </footer>
      </main>
    </div>
  );
}
