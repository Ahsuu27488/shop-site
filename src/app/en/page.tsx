import type { Metadata } from "next";
import { ShopPage } from "@/components/shop-page";
import { shop } from "@/content/shop";

export const ensureStatic = "navigation";

export const metadata: Metadata = {
  title: `${shop.name.en} — Groceries in Bandhi, Sindh`,
  description: `${shop.tagline.en}. ${shop.delivery.en}. Order on WhatsApp.`,
  alternates: { canonical: "/en", languages: { ur: "/", en: "/en" } },
};

export default function HomeEnglish() {
  return <ShopPage lang="en" />;
}
