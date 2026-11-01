/**
 * CLIENT LOGOS — real client wall (17 clients + Print Master bracket = even 6×3 grid).
 * Files live in /public/images/clients/ cut from the originals in /public/client/.
 * The neon "R" studio's verified name is pending — alt text is a neutral monogram label.
 */
const CLIENTS = [
  { name: 'ARG Healthcare', src: './images/clients/arg-healthcare.png' },
  { name: 'Digilatern', src: './images/clients/digilatern.png' },
  { name: 'Jain Hospital', src: './images/clients/jain-hospital.png' },
  { name: 'Kiara Lifestyle Clinic', src: './images/clients/kiara-lifestyle.png' },
  { name: 'Healthlantern', src: './images/clients/healthlantern.png' },
  { name: 'Citrine by Dr Niti Gaur', src: './images/clients/citrine.png' },
  { name: 'Delhi Wellness Clinics', src: './images/clients/delhi-wellness.png' },
  { name: 'Baithak', src: './images/clients/baithak.png' },
  { name: 'Tanay Tulsaney Podcast', src: './images/clients/tanay-podcast.png' },
  { name: 'Jaman Homestay (TravellerHive)', src: './images/clients/jaman-homestay.png' },
  { name: 'ecuChak Express', src: './images/clients/ecuchak-express.png' },
  { name: 'Arambha', src: './images/clients/arambha.png' },
  { name: 'MMT Make My Tickets', src: './images/clients/make-my-tickets.png' },
  { name: 'sKart Global Express', src: './images/clients/skart-global.png' },
  { name: 'Bronomics', src: './images/clients/bronomics.png' },
  { name: 'J Arts Studio', src: './images/clients/j-arts-studio.png' },
  { name: 'Neon R studio', src: './images/clients/neon-r.png' },
];

export const CLIENT_LOGOS = [
  ...CLIENTS.map((c, i) => ({ id: `client-${i + 1}`, ...c })),
  { id: 'client-18', name: 'Print Master', src: './images/clients/print-master.png' },
];
