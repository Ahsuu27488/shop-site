import Link from "next/link";
import { categories, mapsLink, shop, ui, waLink, type Lang } from "@/content/shop";
import { OrderBuilder } from "@/components/order-builder";
import { WhatsAppIcon } from "@/components/icons";

export function ShopPage({ lang }: { lang: Lang }) {
  const dir = lang === "ur" ? "rtl" : "ltr";
  const other = lang === "ur" ? "/en" : "/";
  const font = lang === "ur" ? "font-urdu leading-loose" : "font-sans";

  return (
    <div lang={lang} dir={dir} className={`${font} min-h-full bg-cream text-ink`}>
      <header className="sticky top-0 z-10 border-b border-line bg-cream/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <a href="#top" className="flex items-center gap-2 font-bold text-brand">
            <span aria-hidden className="grid size-9 place-items-center rounded-xl bg-brand text-lg text-white">
              🛒
            </span>
            <span className="text-base sm:text-lg">{shop.name[lang]}</span>
          </a>
          <div className="flex items-center gap-2">
            <Link
              href={other}
              lang={lang === "ur" ? "en" : "ur"}
              className="rounded-lg border border-line px-3 py-2 text-sm hover:bg-white"
            >
              {ui.switchTo[lang]}
            </Link>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-lg bg-whatsapp px-3 py-2 text-sm font-semibold text-white sm:flex"
            >
              <WhatsAppIcon /> {ui.orderOnWhatsapp[lang]}
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="bg-brand text-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
            <p className="text-sm font-medium text-accent">{shop.address[lang]}</p>
            <h1 className="mt-3 max-w-3xl text-3xl font-bold sm:text-5xl">{shop.tagline[lang]}</h1>
            <p className="mt-5 max-w-2xl text-lg text-white/85">{ui.heroNote[lang]}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-12 items-center gap-2 rounded-xl bg-whatsapp px-5 font-semibold text-white hover:brightness-95"
              >
                <WhatsAppIcon /> {ui.orderOnWhatsapp[lang]}
              </a>
              <a
                href="#order"
                className="flex min-h-12 items-center rounded-xl border border-white/40 px-5 font-semibold hover:bg-white/10"
              >
                {ui.orderTitle[lang]}
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold">{ui.whyTitle[lang]}</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {ui.why.map((w) => (
              <div key={w.title.en} className="rounded-2xl border border-line bg-white p-5">
                <div aria-hidden className="text-3xl">
                  {w.icon}
                </div>
                <h3 className="mt-3 font-semibold">{w.title[lang]}</h3>
                <p className="mt-1 text-muted">{w.body[lang]}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white py-14">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-2xl font-bold">{ui.productsTitle[lang]}</h2>
            <p className="mt-2 text-muted">{ui.productsNote[lang]}</p>
            <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {categories.map((c) => (
                <li key={c.id} className="rounded-2xl border border-line bg-cream p-4">
                  <div aria-hidden className="text-3xl">
                    {c.icon}
                  </div>
                  <h3 className="mt-2 font-semibold">{c.name[lang]}</h3>
                  <p className="mt-1 text-sm text-muted">{c.items.map((i) => i.name[lang]).join(lang === "ur" ? "، " : ", ")}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="order" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-14">
          <h2 className="text-2xl font-bold">{ui.orderTitle[lang]}</h2>
          <p className="mt-2 text-muted">{ui.orderNote[lang]}</p>
          <div className="mt-6">
            <OrderBuilder lang={lang} />
          </div>
        </section>

        <section className="bg-white py-14">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold">{ui.visitTitle[lang]}</h2>
              <dl className="mt-6 space-y-4">
                <Info label={ui.addressLabel[lang]} value={shop.address[lang]} />
                <Info label={ui.hoursLabel[lang]} value={shop.hours[lang]} />
                <Info label={ui.deliveryLabel[lang]} value={shop.delivery[lang]} />
                <Info
                  label={ui.phoneLabel[lang]}
                  value={
                    <a href={waLink()} dir="ltr" className="font-semibold text-brand underline-offset-4 hover:underline">
                      {shop.phoneDisplay}
                    </a>
                  }
                />
              </dl>
              <a
                href={mapsLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex min-h-11 items-center rounded-xl bg-brand px-5 font-semibold text-white hover:brightness-110"
              >
                {ui.directions[lang]}
              </a>
            </div>
            <iframe
              title={ui.visitTitle[lang]}
              src={`https://maps.google.com/maps?q=${encodeURIComponent(shop.mapsQuery)}&z=15&output=embed`}
              loading="lazy"
              className="h-80 w-full rounded-2xl border border-line lg:h-full"
            />
          </div>
        </section>
      </main>

      <footer className="border-t border-line py-8 text-center text-sm text-muted">
        © {shop.name[lang]}
      </footer>

      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ui.orderOnWhatsapp[lang]}
        className="fixed bottom-5 end-5 grid size-14 place-items-center rounded-full bg-whatsapp text-white shadow-lg sm:hidden"
      >
        <WhatsAppIcon className="size-7" />
      </a>
    </div>
  );
}

function Info({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div>
      <dt className="text-sm text-muted">{label}</dt>
      <dd className="mt-0.5 font-medium">{value}</dd>
    </div>
  );
}
