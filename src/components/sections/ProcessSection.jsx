import { useEffect, useRef, useState } from 'react';
import RevealOnScroll from '../common/RevealOnScroll';
import SectionLabel from '../common/SectionLabel';
import { RegMark } from '../common/Icons';

const STEPS = [
  { n: '01', t: 'Discover', d: "Understand the client's goals, audience, brand, and requirements.", sw: 'bg-cyan text-white' },
  { n: '02', t: 'Concept', d: 'Develop creative directions and a clear visual approach.', sw: 'bg-magenta text-white' },
  { n: '03', t: 'Create', d: 'Design, refine, and prepare the required creative assets.', sw: 'bg-yellow text-ink' },
  { n: '04', t: 'Deliver', d: 'Prepare final files or print-ready deliverables according to the agreed scope.', sw: 'bg-key text-white' },
];

export default function ProcessSection() {
  const platesRef = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([en]) => setInView(en.isIntersecting), { threshold: 0.45 });
    io.observe(platesRef.current);
    return () => io.disconnect();
  }, []);

  return (
    <section className="process border-y border-rule bg-sheet" aria-labelledby="pr-h">
      <div className="wrap grid grid-cols-[.9fr_1.1fr] items-center gap-[clamp(30px,6vw,100px)] max-md:grid-cols-1">
        <div ref={platesRef} className={`plates ${inView ? 'in' : ''}`} aria-hidden="true">
          <span className="plate c" /><span className="plate m" /><span className="plate y" /><span className="plate k" />
          <RegMark />
        </div>
        <RevealOnScroll>
          <SectionLabel>Process — Four plates, one print</SectionLabel>
          <h2 id="pr-h" className="mb-[30px]">How we <span className="it">work.</span></h2>
          <ol>
            {STEPS.map((s, i) => (
              <li key={s.n} className={`grid grid-cols-[58px_1fr] items-start gap-[18px] border-b border-rule py-6 ${i === 0 ? 'border-t-[1.5px] border-t-ink' : ''}`}>
                <span className={`grid size-[58px] place-items-center font-mono text-[.8rem] font-medium ${s.sw}`}>{s.n}</span>
                <div>
                  <h3 className="text-[1.8rem] tracking-[-.03em]">{s.t}</h3>
                  <p className="mt-1.5 mb-0 text-ink2">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </RevealOnScroll>
      </div>
    </section>
  );
}
