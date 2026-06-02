import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dav1lex.titancode.pl"),
  title: {
    default: "Ömer Uğur - Full-Stack Developer & Tinkerer",
    template: "%s | Ömer Uğur",
  },
  description:
    "Independent TTS benchmarks (voice drift, breathiness, identity collapse) plus AI agents, scraping systems, and what breaks at scale. Personal site of Ömer Uğur, full-stack developer based in Poland.",
  openGraph: {
    siteName: "Ömer Uğur",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="light")document.documentElement.dataset.theme=t;else document.documentElement.removeAttribute("data-theme")}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-h-full bg-bg text-text font-[Georgia,Times_New_Roman,serif]">
        <div className="max-w-2xl mx-auto px-5 py-16">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
