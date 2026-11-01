import RevealOnScroll from './RevealOnScroll';
import SectionLabel from './SectionLabel';

/** Two-column section intro: label + heading on the left, copy on the right. */
export default function SectionTop({ label, headingId, heading, text, dark = false }) {
  return (
    <RevealOnScroll className="mb-[clamp(44px,6vw,80px)] grid grid-cols-[1.3fr_1fr] items-end gap-10 max-md:grid-cols-1">
      <div>
        {/* Reference quirk preserved: `.sec-top p` also styles the label (1.05rem, no margin). */}
        <SectionLabel className={`m-0 max-w-[44ch] text-[1.05rem] ${dark ? '!text-[#BDB9B0]' : 'text-ink2'}`}>{label}</SectionLabel>
        <h2 id={headingId} className={dark ? 'text-white' : undefined}>{heading}</h2>
      </div>
      <p className={`m-0 max-w-[44ch] text-[1.05rem] ${dark ? 'text-[#BDB9B0]' : 'text-ink2'}`}>{text}</p>
    </RevealOnScroll>
  );
}
