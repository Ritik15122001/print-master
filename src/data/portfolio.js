// Selected work — presentation composites built from real client logos
// (public/images/clients/) on clean mock canvases. Files live in
// public/images/work/. Swap in actual photography of delivered work as needed.
export const CATEGORIES = {
  logo: 'Logo & Brand Identity',
  brochure: 'Brochures & Catalogues',
  social: 'Social Media Creatives',
  stationery: 'Stationery & Corporate Identity',
  packaging: 'Product Design & Packaging',
  outdoor: 'Hoardings & Outdoor',
  merch: 'Promotional Merchandise',
  digital: 'Digital & Web Design',
};

export const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'logo', label: 'Identity' },
  { key: 'brochure', label: 'Brochures' },
  { key: 'social', label: 'Social' },
  { key: 'stationery', label: 'Stationery' },
  { key: 'packaging', label: 'Packaging' },
  { key: 'outdoor', label: 'Hoardings' },
  { key: 'merch', label: 'Merchandise' },
  { key: 'digital', label: 'Digital & Web' },
];

const W = (name) => `./images/work/${name}.jpg`;

export const PORTFOLIO = [
  { id: 'p01', cat: 'logo', src: W('wb-01-digilatern'), ph: 'Digilatern · brand kit', alt: 'Digilatern logo presented on a paper brand sheet' },
  { id: 'p02', cat: 'logo', src: W('wb-02-j-arts'), ph: 'J Arts Studio · logo mark', alt: 'J Arts Studio logo mark on a navy plate' },
  { id: 'p03', cat: 'brochure', src: W('wb-03-jain'), ph: 'Jain Hospital · 3-fold brochure', alt: 'Jain Hospital brochure cover design' },
  { id: 'p04', cat: 'brochure', src: W('wb-04-arg'), ph: 'ARG Healthcare · A4 flyer', alt: 'ARG Healthcare corporate flyer design' },
  { id: 'p05', cat: 'social', src: W('wb-05-healthlantern'), ph: '@healthlantern · post set', alt: 'Healthlantern social media post mock' },
  { id: 'p06', cat: 'social', src: W('wb-06-bronomics'), ph: '@bronomics.in · campaign', alt: 'Bronomics dark campaign social post mock' },
  { id: 'p07', cat: 'stationery', src: W('wb-07-kiara'), ph: 'Kiara Clinic · letterhead', alt: 'Kiara Lifestyle Clinic letterhead design' },
  { id: 'p08', cat: 'stationery', src: W('wb-08-citrine'), ph: 'Citrine · letterhead', alt: 'Citrine by Dr Niti Gaur letterhead design' },
  { id: 'p09', cat: 'packaging', src: W('wb-09-baithak'), ph: 'Baithak · kraft label', alt: 'Baithak cafe label printed on kraft board' },
  { id: 'p10', cat: 'packaging', src: W('wb-10-jaman'), ph: 'Jaman Homestay · label', alt: 'Jaman Homestay label artwork on kraft board' },
  { id: 'p11', cat: 'outdoor', src: W('wb-11-arambha'), ph: 'Arambha · 3×2 hoarding', alt: 'Arambha hoarding artwork on a city billboard' },
  { id: 'p12', cat: 'outdoor', src: W('wb-12-mmt'), ph: 'Make My Tickets · hoarding', alt: 'MMT Make My Tickets hoarding artwork on a billboard' },
  { id: 'p13', cat: 'merch', src: W('wb-13-neonr'), ph: 'Canvas tote 12×14 in', alt: 'Neon R studio print on a canvas tote mock' },
  { id: 'p14', cat: 'merch', src: W('wb-14-ecuchak'), ph: 'ecuChak · tote print', alt: 'ecuChak Express print on a canvas tote mock' },
  { id: 'p15', cat: 'digital', src: W('wb-15-skart'), ph: 'sKart · landing page', alt: 'sKart Global Express website landing page mock' },
  { id: 'p16', cat: 'digital', src: W('wb-16-digilatern-web'), ph: 'Digilatern · booking site', alt: 'Digilatern booking website mock in a browser frame' },
];

export const largeSrc = (src) => src.replace(/w=\d+/, 'w=1800');
