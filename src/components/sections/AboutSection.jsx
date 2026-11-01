import RevealOnScroll from '../common/RevealOnScroll';
import SectionLabel from '../common/SectionLabel';
import CropMarks from '../common/CropMarks';
import ImageFrame from '../common/ImageFrame';

const PAIRS = [
  ['Design', 'Identity & layout'],
  ['Print', 'Production & finish'],
  ['Digital', 'Social & web'],
  ['Brand', 'Consistency'],
];

export default function AboutSection() {
  return (
    <section id="about" aria-labelledby="ab-h">
      <div className="wrap grid grid-cols-2 items-center gap-[clamp(30px,6vw,100px)] max-md:grid-cols-1">
        <RevealOnScroll className="relative isolate max-md:max-w-[480px]">
          <CropMarks>
            <ImageFrame
              className="aspect-[4/5]"
              src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1000&q=75"
              alt="Designer working on layouts"
              label="Studio"
            />
          </CropMarks>
          <div className="halftone" aria-hidden="true" />
        </RevealOnScroll>
        <RevealOnScroll>
          <SectionLabel>About Print Master</SectionLabel>
          <h2 id="ab-h" className="mb-[26px]">Creative thinking. <span className="it">Thoughtful execution.</span></h2>
          <blockquote className="mb-[30px] font-serif text-[clamp(2rem,3.6vw,3.2rem)] italic leading-[1.05] tracking-[-.01em]">
            “We turn ideas into things people remember.”
          </blockquote>
          {/* ABOUT COPY REPLACEMENT POINT */}
          <p className="mt-0 mb-4 max-w-[52ch] text-ink2">
            Print Master brings design, branding, printing and digital services together under one roof. We help businesses shape how they are seen — from the first logo sketch to the final printed piece.
          </p>
          <p className="mt-0 mb-4 max-w-[52ch] text-ink2">
            Because concept and production work side by side, every brochure, campaign and brand asset is designed with the finished result in mind.
          </p>
          <div className="mt-[30px] grid grid-cols-4 border-t-[1.5px] border-ink max-md:grid-cols-2 max-md:gap-y-3.5">
            {PAIRS.map(([b, s]) => (
              <div key={b} className="pt-4 pr-3">
                <b className="block text-[1.15rem] tracking-[-.02em]">{b}</b>
                <span className="text-[.85rem] text-muted">{s}</span>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
