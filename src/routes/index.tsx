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
    emoji: "💸",
    title: "Xalixia Wallet",
    description: "Pencatat keuangan",
    href: "https://xalixia-wallet.xcute.workers.dev/",
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
    emoji: "💌",
    title: "Appslovv",
    description: "Web bucin untuk kamu dan pasangan",
    href: "https://appslovv.xcute.workers.dev",
    tone: "maroon",
  },
  {
    emoji: "🎵",
    title: "TikTok Downloader",
    description: "Unduh video TikTok tanpa watermark",
    href: "https://tiktok-downloader.xcute.workers.dev",
    tone: "maroon",
  },
  {
    emoji: "🖥️",
    title: "Jasa Pembuatan Website",
    description: "Paket website mulai Rp70K, cepat & responsive",
    href: "https://x.xcute.workers.dev/f/images/c6f6205144be.jpg",
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
    <div className="link-hub min-h-screen overflow-hidden px-4 py-6 sm:px-8 sm:py-10">

      <main className="relative z-10 mx-auto w-full max-w-[30rem]">
        <header className="mb-6 text-center">
          <div className="avatar-frame mx-auto mb-4 h-20 w-20 sm:h-24 sm:w-24">
            <img
              src={profileAsset.url}
              alt="Foto profil Xalixia"
              className="h-full w-full object-cover"
            />
          </div>
          <p className="mb-1 font-body text-[0.65rem] font-bold uppercase tracking-[0.2em] text-near-black">
            Digital Playground
          </p>
          <h1 className="font-display text-4xl uppercase leading-none text-near-black sm:text-5xl">
            Xalixia
          </h1>
          <p className="mx-auto mt-3 max-w-xs font-body text-xs font-semibold leading-relaxed text-near-black/80 sm:text-sm">
            Tools, eksperimen, dan karya digital—semuanya ada di sini.
          </p>
        </header>

        <nav aria-label="Tautan proyek Xalixia">
          <ul className="space-y-3">
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
                    <span className="block font-display text-base uppercase leading-tight sm:text-lg">
                      {link.title}
                    </span>
                    <span className="mt-0.5 block font-body text-[0.7rem] font-semibold leading-snug opacity-75 sm:text-xs">
                      {link.description}
                    </span>
                  </span>
                  <ArrowUpRight aria-hidden="true" className="h-5 w-5 shrink-0 stroke-[3]" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <footer className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-body text-[0.65rem] font-bold uppercase text-near-black/75">
          <span>© 2026 Xalixia</span>
          <span aria-hidden="true">•</span>
          <span>Dibuat dengan <span className="text-accent">♥</span></span>
        </footer>
      </main>
    </div>
  );
}
