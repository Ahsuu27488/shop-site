"use client";

import { useState } from "react";
import { categories, ui, waLink, type Lang } from "@/content/shop";
import { buildOrderMessage } from "@/lib/order";
import { WhatsAppIcon } from "@/components/icons";

export function OrderBuilder({ lang }: { lang: Lang }) {
  const [qty, setQty] = useState<Record<string, string>>({});
  const [selected, setSelected] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [extra, setExtra] = useState("");

  const toggle = (id: string) =>
    setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));

  const message = buildOrderMessage(
    lang,
    selected.map((itemId) => ({ itemId, qty: qty[itemId] ?? "" })),
    { name, address, extra },
  );
  const canSend = selected.length > 0 || extra.trim().length > 0;

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_22rem]">
      <div className="grid gap-4 sm:grid-cols-2">
        {categories.map((cat) => (
          <fieldset key={cat.id} className="rounded-2xl border border-line bg-white p-4">
            <legend className="px-1 font-semibold text-ink">
              <span aria-hidden>{cat.icon}</span> {cat.name[lang]}
            </legend>
            <ul className="mt-1 space-y-2">
              {cat.items.map((item) => {
                const checked = selected.includes(item.id);
                return (
                  <li key={item.id} className="flex items-center gap-2">
                    <label className="flex min-h-11 flex-1 cursor-pointer items-center gap-3 rounded-lg px-2 hover:bg-cream">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggle(item.id)}
                        className="size-5 accent-brand"
                      />
                      <span>{item.name[lang]}</span>
                    </label>
                    {checked && (
                      <input
                        type="text"
                        value={qty[item.id] ?? ""}
                        onChange={(e) => setQty((q) => ({ ...q, [item.id]: e.target.value }))}
                        placeholder={ui.qtyPlaceholder[lang]}
                        aria-label={`${item.name[lang]} quantity`}
                        className="w-28 rounded-lg border border-line px-2 py-2 text-sm"
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          </fieldset>
        ))}
      </div>

      <aside className="h-fit rounded-2xl border border-line bg-white p-5 lg:sticky lg:top-24">
        <h3 className="font-semibold text-ink">
          {ui.selected[lang]} ({selected.length})
        </h3>
        <p className="mt-1 text-sm text-muted">{selected.length === 0 && ui.emptyList[lang]}</p>

        <div className="mt-4 space-y-3">
          <Field label={ui.extraNote[lang]} value={extra} onChange={setExtra} />
          <Field label={ui.yourName[lang]} value={name} onChange={setName} />
          <Field label={ui.yourAddress[lang]} value={address} onChange={setAddress} />
        </div>

        <a
          href={canSend ? waLink(message) : undefined}
          aria-disabled={!canSend}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-5 flex min-h-12 items-center justify-center gap-2 rounded-xl px-4 font-semibold text-white transition ${
            canSend ? "bg-whatsapp hover:brightness-95" : "pointer-events-none bg-line text-muted"
          }`}
        >
          <WhatsAppIcon /> {ui.sendList[lang]}
        </a>
      </aside>
    </div>
  );
}

function Field({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <label className="block text-sm">
      <span className="text-muted">{label}</span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-lg border border-line px-3 py-2"
      />
    </label>
  );
}
