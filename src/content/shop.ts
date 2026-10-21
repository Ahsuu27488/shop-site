// All shop details live here. Values marked TBC are placeholders the owner
// must confirm before the site goes live (see docs/brief.md).

export type Lang = "ur" | "en";
export type Text = Record<Lang, string>;

export type Item = { id: string; name: Text };
export type Category = { id: string; icon: string; name: Text; items: Item[] };

export const shop = {
  // From the shop's Google Maps listing (owner-provided link).
  name: { ur: "حاجی عمردین اینڈ سنز کریانہ اسٹور", en: "Haji Umardin & Sons Karyana Store" } satisfies Text,
  tagline: {
    ur: "روزمرہ کا سودا، ایمانداری کے ساتھ — بیس سال سے زیادہ",
    en: "Everyday groceries, honestly priced — for over 20 years",
  } satisfies Text,
  whatsapp: "923000000000", // TBC: international format, no + or spaces
  phoneDisplay: "0300 0000000", // TBC
  address: {
    ur: "اسٹیشن روڈ، ریلوے اسٹیشن کے قریب، باندھی، ضلع شہید بینظیرآباد، سندھ",
    en: "Station Road, near the Railway Station, Bandhi, Shaheed Benazirabad, Sindh",
  } satisfies Text,
  mapsQuery: "Haji Umardin & Sons Karyana Store, Station Road, Bandhi", // Maps listing (plus code H8P2+H58)
  hours: {
    ur: "روزانہ صبح 8 بجے سے رات 10 بجے تک",
    en: "Open daily, 8 am – 10 pm",
  } satisfies Text, // TBC
  delivery: {
    ur: "باندھی شہر اور قریبی محلوں میں ہوم ڈیلیوری",
    en: "Home delivery in Bandhi town and nearby neighbourhoods",
  } satisfies Text, // TBC: areas and minimum order
};

export const categories: Category[] = [
  {
    id: "flour-rice",
    icon: "🌾",
    name: { ur: "آٹا اور چاول", en: "Flour & Rice" },
    items: [
      { id: "atta", name: { ur: "آٹا", en: "Wheat flour (atta)" } },
      { id: "basmati", name: { ur: "باسمتی چاول", en: "Basmati rice" } },
      { id: "sella", name: { ur: "سیلا چاول", en: "Sella rice" } },
      { id: "maida", name: { ur: "میدہ", en: "Maida" } },
    ],
  },
  {
    id: "daal",
    icon: "🫘",
    name: { ur: "دالیں", en: "Lentils" },
    items: [
      { id: "daal-chana", name: { ur: "دال چنا", en: "Chana daal" } },
      { id: "daal-masoor", name: { ur: "دال مسور", en: "Masoor daal" } },
      { id: "daal-moong", name: { ur: "دال مونگ", en: "Moong daal" } },
      { id: "kala-chana", name: { ur: "کالے چنے", en: "Black chickpeas" } },
    ],
  },
  {
    id: "oil-ghee",
    icon: "🫒",
    name: { ur: "گھی اور تیل", en: "Ghee & Oil" },
    items: [
      { id: "banaspati", name: { ur: "بناسپتی گھی", en: "Banaspati ghee" } },
      { id: "cooking-oil", name: { ur: "کوکنگ آئل", en: "Cooking oil" } },
      { id: "desi-ghee", name: { ur: "دیسی گھی", en: "Desi ghee" } },
    ],
  },
  {
    id: "tea-sugar",
    icon: "🍵",
    name: { ur: "چائے، چینی اور دودھ", en: "Tea, Sugar & Milk" },
    items: [
      { id: "tea", name: { ur: "پتی (چائے)", en: "Tea leaves" } },
      { id: "sugar", name: { ur: "چینی", en: "Sugar" } },
      { id: "milk-pack", name: { ur: "دودھ (پیک)", en: "Packed milk" } },
      { id: "powder-milk", name: { ur: "خشک دودھ", en: "Powdered milk" } },
    ],
  },
  {
    id: "spices",
    icon: "🌶️",
    name: { ur: "مصالحے", en: "Spices" },
    items: [
      { id: "salt", name: { ur: "نمک", en: "Salt" } },
      { id: "red-chilli", name: { ur: "لال مرچ", en: "Red chilli" } },
      { id: "haldi", name: { ur: "ہلدی", en: "Turmeric" } },
      { id: "masala-pack", name: { ur: "تیار مصالحے", en: "Ready spice mixes" } },
    ],
  },
  {
    id: "cleaning",
    icon: "🧼",
    name: { ur: "صابن اور سرف", en: "Soap & Detergent" },
    items: [
      { id: "soap", name: { ur: "نہانے کا صابن", en: "Bath soap" } },
      { id: "surf", name: { ur: "سرف", en: "Washing powder" } },
      { id: "dishwash", name: { ur: "برتن دھونے کا صابن", en: "Dishwash bar" } },
      { id: "shampoo", name: { ur: "شیمپو", en: "Shampoo" } },
    ],
  },
  {
    id: "snacks",
    icon: "🍪",
    name: { ur: "بسکٹ اور اسنیکس", en: "Biscuits & Snacks" },
    items: [
      { id: "biscuits", name: { ur: "بسکٹ", en: "Biscuits" } },
      { id: "chips", name: { ur: "چپس / نمکو", en: "Chips & nimko" } },
      { id: "rusk", name: { ur: "رس", en: "Rusk" } },
    ],
  },
  {
    id: "drinks",
    icon: "🥤",
    name: { ur: "مشروبات", en: "Drinks" },
    items: [
      { id: "soft-drink", name: { ur: "کولڈ ڈرنک", en: "Soft drinks" } },
      { id: "juice", name: { ur: "جوس", en: "Juice" } },
      { id: "water", name: { ur: "منرل واٹر", en: "Mineral water" } },
    ],
  },
];

export const ui = {
  orderOnWhatsapp: { ur: "واٹس ایپ پر آرڈر کریں", en: "Order on WhatsApp" },
  switchTo: { ur: "English", en: "اردو" },
  heroNote: {
    ur: "سامان کی لسٹ بھیجیں، ہم ریٹ بتا کر گھر پہنچا دیں گے۔",
    en: "Send your list, we confirm today's rates and deliver to your door.",
  },
  whyTitle: { ur: "ہمارے پاس کیوں؟", en: "Why shop with us" },
  why: [
    {
      icon: "🏪",
      title: { ur: "بیس سال کا بھروسہ", en: "20+ years of trust" },
      body: { ur: "باندھی کے خاندان برسوں سے ہم سے سودا لیتے ہیں۔", en: "Families in Bandhi have shopped with us for decades." },
    },
    {
      icon: "🛵",
      title: { ur: "ہوم ڈیلیوری", en: "Home delivery" },
      body: { ur: "واٹس ایپ پر لسٹ بھیجیں، سامان گھر پہنچے گا۔", en: "Send a WhatsApp list, we bring it home." },
    },
    {
      icon: "⚖️",
      title: { ur: "مناسب ریٹ", en: "Fair daily rates" },
      body: { ur: "روزانہ کے صحیح ریٹ، پورا تول۔", en: "Honest daily rates and full weight." },
    },
  ],
  productsTitle: { ur: "ہمارے پاس کیا ملتا ہے", en: "What we stock" },
  productsNote: {
    ur: "ریٹ روز بدلتے ہیں — تازہ ریٹ کے لیے واٹس ایپ کریں۔",
    en: "Prices change daily — WhatsApp us for today's rates.",
  },
  orderTitle: { ur: "اپنی لسٹ بنائیں", en: "Build your order" },
  orderNote: {
    ur: "چیزیں منتخب کریں، تعداد لکھیں اور ایک بٹن سے واٹس ایپ پر بھیج دیں۔",
    en: "Pick items, set quantities and send the list to us on WhatsApp in one tap.",
  },
  qtyPlaceholder: { ur: "مثلاً 5 کلو", en: "e.g. 5 kg" },
  yourName: { ur: "آپ کا نام", en: "Your name" },
  yourAddress: { ur: "گھر کا پتہ", en: "Delivery address" },
  extraNote: { ur: "کوئی اور چیز؟", en: "Anything else?" },
  sendList: { ur: "لسٹ واٹس ایپ پر بھیجیں", en: "Send list on WhatsApp" },
  emptyList: { ur: "ابھی کوئی چیز منتخب نہیں کی", en: "No items selected yet" },
  selected: { ur: "منتخب چیزیں", en: "Selected items" },
  visitTitle: { ur: "دکان کا پتہ اور اوقات", en: "Visit us" },
  addressLabel: { ur: "پتہ", en: "Address" },
  hoursLabel: { ur: "اوقات", en: "Hours" },
  phoneLabel: { ur: "فون / واٹس ایپ", en: "Phone / WhatsApp" },
  deliveryLabel: { ur: "ڈیلیوری", en: "Delivery" },
  directions: { ur: "گوگل میپس پر راستہ", en: "Get directions" },
  messageGreeting: {
    ur: "السلام علیکم! مجھے یہ سامان چاہیے:",
    en: "Assalam o Alaikum! I'd like to order:",
  },
  messageName: { ur: "نام", en: "Name" },
  messageAddress: { ur: "پتہ", en: "Address" },
  messageExtra: { ur: "مزید", en: "Also" },
};

export function waLink(text?: string) {
  const base = `https://wa.me/${shop.whatsapp}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export function mapsLink() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(shop.mapsQuery)}`;
}
