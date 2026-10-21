import type { Metadata, Viewport } from "next";
import { Geist, Noto_Nastaliq_Urdu } from "next/font/google";
import { shop } from "@/content/shop";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const nastaliq = Noto_Nastaliq_Urdu({
  variable: "--font-nastaliq",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: `${shop.name.ur} | ${shop.name.en}`,
  description: `${shop.tagline.ur} — ${shop.tagline.en}`,
  alternates: { canonical: "/", languages: { ur: "/", en: "/en" } },
  openGraph: { title: shop.name.en, description: shop.tagline.en, type: "website" },
};

export const viewport: Viewport = { themeColor: "#14532d" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ur" className={`${geist.variable} ${nastaliq.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
