import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dav1lex.titancode.pl"),
  title: {
    default: "Ömer Uğur — Full-Stack Developer & Tinkerer",
    template: "%s | Ömer Uğur",
  },
  description:
    "Personal site of Ömer Uğur. Full-stack developer, AI agent builder, TTS researcher. Based in Poland. Writing about code, voice cloning, scraping, and reverse engineering.",
  openGraph: {
    title: "Ömer Uğur — Full-Stack Developer & Tinkerer",
    description:
      "Full-stack developer. AI agents, TTS research, scraping at scale. Poland.",
    url: "https://dav1lex.titancode.pl",
    siteName: "Ömer Uğur",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Ömer Uğur",
    description: "Full-stack developer & tinkerer. I build things that ship.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
  alternates: {
    canonical: "https://dav1lex.titancode.pl",
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
