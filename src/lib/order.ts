import { categories, ui, type Lang } from "@/content/shop";

export type OrderLine = { itemId: string; qty: string };
export type OrderDetails = { name?: string; address?: string; extra?: string };

const itemNames = new Map(
  categories.flatMap((c) => c.items.map((i) => [i.id, i.name] as const)),
);

// Builds the WhatsApp message text for an order, in the visitor's language.
export function buildOrderMessage(lang: Lang, lines: OrderLine[], details: OrderDetails = {}): string {
  const rows = lines
    .filter((l) => itemNames.has(l.itemId))
    .map((l, i) => {
      const qty = l.qty.trim();
      return `${i + 1}. ${itemNames.get(l.itemId)![lang]}${qty ? ` — ${qty}` : ""}`;
    });

  const extras = [
    details.extra?.trim() && `${ui.messageExtra[lang]}: ${details.extra.trim()}`,
    details.name?.trim() && `${ui.messageName[lang]}: ${details.name.trim()}`,
    details.address?.trim() && `${ui.messageAddress[lang]}: ${details.address.trim()}`,
  ].filter(Boolean);

  return [ui.messageGreeting[lang], ...rows, ...(extras.length ? ["", ...extras] : [])].join("\n");
}
