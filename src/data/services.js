// Ten swatch cards, in the reference order. col = [chip background, icon stroke, code text colour]
// go = portfolio filter for "See work"; null → "Get a quote" (pre-selects this service).
// img = service photo shown behind the chip badge (Unsplash / Pexels, free licenses; 700×700 square crop).
export const ICON_PATHS = {
  brand: ['M18 32V16h7a5 5 0 010 10h-7'],
  graphic: ['M8 34l11-10 8 7 5-4 8 7'],
  brochure: ['M24 12c-5-4-12-4-16-2v28c4-2 11-2 16 2 5-4 12-4 16-2V10c-4-2-11-2-16 2zM24 12v28'],
  print: ['M14 18V6h20v12', 'M14 28h20v14H14z'],
  stationery: ['M8 18h32M14 26h10M14 30h16'],
  digital: ['M21 37h6M19 16l5 5 6-7'],
  web: ['M6 16h36M18 42h12M24 34v8'],
  pack: ['M10 16l14-8 14 8v16l-14 8-14-8z', 'M10 16l14 8 14-8M24 24v16'],
  outdoor: ['M16 28v14M32 28v14M10 42h28'],
  merch: ['M17 7L7 13l4 8 4-2v22h18V19l4 2 4-8-10-6c-1 4-4 6-7 6s-6-2-7-6z'],
  plus: ['M24 8v32M8 24h32'],
};
// Extra primitive shapes per icon (circles / rects), kept separate from paths.
export const ICON_SHAPES = {
  brand: [{ t: 'circle', cx: 24, cy: 24, r: 16 }],
  graphic: [{ t: 'rect', x: 8, y: 8, width: 32, height: 32 }, { t: 'circle', cx: 19, cy: 19, r: 4 }],
  print: [{ t: 'rect', x: 6, y: 18, width: 36, height: 16 }],
  stationery: [{ t: 'rect', x: 8, y: 12, width: 32, height: 24 }],
  digital: [{ t: 'rect', x: 15, y: 6, width: 18, height: 36, rx: 2 }],
  web: [{ t: 'rect', x: 6, y: 10, width: 36, height: 24 }],
  outdoor: [{ t: 'rect', x: 5, y: 8, width: 38, height: 20 }],
};

export const IMG = {
  brand: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=700&h=700&q=80',
  graphic: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=700&h=700&q=80',
  brochure: 'https://images.pexels.com/photos/7648514/pexels-photo-7648514.jpeg?auto=compress&cs=tinysrgb&w=700&h=700&fit=crop',
  print: 'https://images.pexels.com/photos/9550363/pexels-photo-9550363.jpeg?auto=compress&cs=tinysrgb&w=700&h=700&fit=crop',
  stationery: 'https://images.pexels.com/photos/4466448/pexels-photo-4466448.jpeg?auto=compress&cs=tinysrgb&w=700&h=700&fit=crop',
  digital: 'https://images.pexels.com/photos/15406294/pexels-photo-15406294.jpeg?auto=compress&cs=tinysrgb&w=700&h=700&fit=crop',
  web: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=700&h=700&q=80',
  pack: 'https://images.pexels.com/photos/31438304/pexels-photo-31438304.jpeg?auto=compress&cs=tinysrgb&w=700&h=700&fit=crop',
  outdoor: 'https://images.pexels.com/photos/8655746/pexels-photo-8655746.jpeg?auto=compress&cs=tinysrgb&w=700&h=700&fit=crop',
  merch: 'https://images.pexels.com/photos/35344746/pexels-photo-35344746.jpeg?auto=compress&cs=tinysrgb&w=700&h=700&fit=crop',
};

export const SERVICES = [
  { k: 'brand', name: 'Branding & Identity', d: 'Logo design, brand identity systems, visual consistency, and brand assets.', go: 'logo', img: IMG.brand, col: ['#1168B3', '#fff', '#C9DEF2'] },
  { k: 'graphic', name: 'Graphic Design', d: 'Marketing creatives, campaign graphics, flyers, posters, and promotional layouts.', go: 'all', img: IMG.graphic, col: ['#F4771F', '#fff', '#FDD3B4'] },
  { k: 'brochure', name: 'Brochures & Catalogues', d: 'Corporate brochures, product catalogues, company profiles, and presentation materials.', go: 'brochure', img: IMG.brochure, col: ['#1168B3', '#fff', '#C9DEF2'] },
  { k: 'print', name: 'Printing & Binding', d: 'Business print materials, brochures, stationery, and professionally finished documents.', go: null, img: IMG.print, col: ['#F4771F', '#fff', '#FDD3B4'] },
  { k: 'stationery', name: 'Corporate Stationery', d: 'Business cards, letterheads, envelopes and identity collateral.', go: 'stationery', img: IMG.stationery, col: ['#1168B3', '#fff', '#C9DEF2'] },
  { k: 'digital', name: 'Digital Marketing', d: 'Social media creatives, advertising assets, and digital brand communication.', go: 'social', img: IMG.digital, col: ['#F4771F', '#fff', '#FDD3B4'] },
  { k: 'web', name: 'Web Design', d: 'Modern, responsive business websites and digital experiences.', go: 'digital', img: IMG.web, col: ['#1168B3', '#fff', '#C9DEF2'] },
  { k: 'pack', name: 'Product & Packaging', d: 'Product presentation, labels, packaging layouts, and promotional material design.', go: 'packaging', img: IMG.pack, col: ['#F4771F', '#fff', '#FDD3B4'] },
  { k: 'outdoor', name: 'Outdoor Advertising', d: 'Hoardings, banners, display graphics, and large-format advertising.', go: 'outdoor', img: IMG.outdoor, col: ['#1168B3', '#fff', '#C9DEF2'] },
  {
    k: 'plus', cta: true, code: 'PM 10-K', name: 'Promotional Merchandise & more', service: 'Promotional Merchandise',
    d: 'Corporate gifts, branded merchandise, and promotional products — or tell us your requirement.', go: null, img: IMG.merch,
    col: ['#F4771F', '#fff', '#FDD3B4'],
  },
];

/** Options for the contact form's service dropdown (same order as reference). */
export const SERVICE_OPTIONS = [...SERVICES.filter((s) => !s.cta).map((s) => s.name), 'Promotional Merchandise', 'Other'];

export const BUDGET_OPTIONS = ['Under ₹25,000', '₹25,000 – ₹1,00,000', '₹1,00,000 – ₹5,00,000', 'Above ₹5,00,000'];
