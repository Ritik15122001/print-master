const U = (id, w) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`;

export const FEATURED = [
  {
    id: 'identity', layout: 'default', job: 'Job 01 · Identity', jobColor: 'var(--m)',
    title: 'An identity built to', titleIt: 'carry.',
    text: 'Selected portfolio work — logo and identity applied consistently across print and digital.',
    images: [{ src: U('photo-1634942537034-2531766767d1', 1400), label: 'Brand identity', alt: 'Brand identity applied across materials' }],
    specs: [
      { dt: 'Category', dd: 'Logo & Brand Identity' },
      { dt: 'Applied to', dd: 'Stationery, print, digital' },
      { dt: 'Inks', dots: true },
    ],
    cta: 'View identity work', goto: 'logo',
  },
  {
    id: 'print', layout: 'reverse', job: 'Job 02 · Print', jobColor: 'var(--c)',
    title: 'Pages worth', titleIt: 'turning.',
    text: 'Selected portfolio work — brochures, catalogues and company profiles, designed and prepared for print.',
    images: [
      { src: U('photo-1532153975070-2e9ab71f1b14', 800), label: 'Brochure', alt: 'Brochure cover design' },
      { src: U('photo-1512820790803-83ca734da794', 800), label: 'Catalogue', alt: 'Catalogue spread' },
    ],
    specs: [
      { dt: 'Category', dd: 'Brochures & Catalogues' },
      { dt: 'Output', dd: 'Print-ready files' },
      { dt: 'Finish', dd: 'Printing & binding' },
    ],
    cta: 'View print work', goto: 'brochure',
  },
  {
    id: 'campaign', layout: 'wide', job: 'Job 03 · Campaign', jobColor: 'var(--m)',
    title: 'Big formats,', titleIt: 'bold ideas.',
    text: 'Selected portfolio work — campaign creatives adapted from social feeds to hoardings.',
    images: [{ src: U('photo-1571867424488-4565932edb41', 2000), label: 'Hoarding', alt: 'Outdoor hoarding campaign' }],
    specs: [
      { dt: 'Category', dd: 'Hoardings & Social Media' },
      { dt: 'Formats', dd: 'Large-format & digital' },
    ],
    cta: 'View campaign work', goto: 'outdoor',
  },
];
