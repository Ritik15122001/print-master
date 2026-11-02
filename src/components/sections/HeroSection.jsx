import ColorBar from '../common/ColorBar';
import CropMarks from '../common/CropMarks';
import ImageFrame from '../common/ImageFrame';
import Button from '../common/Button';
import { ArrowRight } from '../common/Icons';

const U = (id, w, q = 75) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`;

// HERO IMAGE REPLACEMENT POINTS
const HERO_IMAGES = [
  { src: U('photo-1586953208448-b95a79798f07', 900, 80), label: 'Print', alt: 'Printed stationery and brand materials', priority: true },
  { src: U('photo-1626785774573-4b799315345d', 600), label: 'Identity', alt: 'Logo and identity design' },
  { src: U('photo-1561070791-2526d30994b5', 600), label: 'Colour', alt: 'Colour swatches and sketches' },
];

export default function HeroSection() {
  return (
    <section
      className="hero flex flex-col justify-between pt-[130px] pb-[50px] max-md:min-h-0 max-md:pt-[110px]"
      id="home"
      aria-label="Introduction"
    >
      <div className="wrap">
        <div className="mono fade flex flex-wrap justify-between gap-5 border-b border-rule pb-[22px] text-muted">
          <span>Design · Print · Digital</span>
          <ColorBar />
          <span>Sheet 01 — Proof</span>
        </div>
        <h1 className="misreg">
          <span className="row text-cyan">Ideas made</span>
          <span className="row it alt">tangible.</span>
        </h1>
        <div className="grid grid-cols-[1fr_1.25fr] items-end gap-[clamp(24px,4vw,60px)] max-md:grid-cols-1">
          <div className="fade">
            <p className="mt-0 mb-7 max-w-[42ch] text-[clamp(1.05rem,1.4vw,1.22rem)] text-ink2">
              From memorable brand identities to beautifully crafted print and digital experiences, we help businesses bring their ideas to life.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="#portfolio" variant="ink" className="max-sm:flex-1">Explore Our Work <ArrowRight /></Button>
              <Button href="#contact" className="max-sm:flex-1">Start a Project</Button>
            </div>
          </div>
          <CropMarks className="hero-strip">
            {HERO_IMAGES.map((img) => (
              <ImageFrame key={img.label} src={img.src} alt={img.alt} label={img.label} priority={img.priority} lazy={false} />
            ))}
          </CropMarks>
        </div>
      </div>
    </section>
  );
}
