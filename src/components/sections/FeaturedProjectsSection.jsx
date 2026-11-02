import SectionTop from '../common/SectionTop';
import { useReveal } from '../common/RevealOnScroll';
import CropMarks from '../common/CropMarks';
import ImageFrame from '../common/ImageFrame';
import Button from '../common/Button';
import { FEATURED } from '../../data/featuredProjects';

const INKS = ['var(--c)', 'var(--m)', 'var(--y)', 'var(--k)'];

function SpecSheet({ project: p, onSeeWork }) {
  const [ref, rv] = useReveal();
  const cls = { default: '', reverse: 'r', wide: 'wide' }[p.layout];
  const media =
    p.images.length > 1 ? (
      <div className="media duo">
        {p.images.map((im) => <ImageFrame key={im.label} src={im.src} alt={im.alt} label={im.label} />)}
      </div>
    ) : (
      <CropMarks className="media">
        <ImageFrame src={p.images[0].src} alt={p.images[0].alt} label={p.images[0].label} />
      </CropMarks>
    );
  return (
    <article ref={ref} className={`spec ${cls} ${rv}`}>
      {media}
      <div className="sheet">
        <span className="mono" style={{ color: p.jobColor }}>{p.job}</span>
        <h3><span className="text-cyan">{p.title}</span> <span className="it alt">{p.titleIt}</span></h3>
        <p>{p.text}</p>
        <dl>
          {p.specs.map((s) => (
            <div key={s.dt}>
              <dt>{s.dt}</dt>
              <dd>
                {s.dots ? (
                  <span className="dots" aria-label="Blue, orange, light orange and black">
                    {INKS.map((c) => <b key={c} style={{ background: c }} />)}
                  </span>
                ) : s.dd}
              </dd>
            </div>
          ))}
        </dl>
        <Button href="#portfolio" onClick={() => onSeeWork(p.goto)}>{p.cta}</Button>
      </div>
    </article>
  );
}

export default function FeaturedProjectsSection({ onSeeWork }) {
  return (
    <section id="featured" aria-labelledby="ft-h" className="pt-0">
      <div className="wrap">
        <SectionTop
          label="Featured — Spec sheets"
          headingId="ft-h"
          heading={<>Work, <span className="it alt">up close.</span></>}
          text="Three pieces from the portfolio, presented the way we'd brief them to press."
        />
        {/* FEATURED REPLACEMENT POINTS: src/data/featuredProjects.js */}
        {FEATURED.map((p) => <SpecSheet key={p.id} project={p} onSeeWork={onSeeWork} />)}
      </div>
    </section>
  );
}
