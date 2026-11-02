import SectionTop from '../common/SectionTop';
import ServiceCard from '../services/ServiceCard';
import { SERVICES } from '../../data/services';

export default function ServicesSection({ onSeeWork, onQuote }) {
  return (
    <section id="services" aria-labelledby="sv-h">
      <div className="wrap">
        <SectionTop
          label="Swatch book — Services"
          headingId="sv-h"
          heading={<>Everything your brand needs to <span className="it alt">stand out.</span></>}
          text="Pick your shade. Ten services, one studio — each one links to related work or straight to a quote."
        />
        <div className="swatches">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.k} service={s} index={i} onSeeWork={onSeeWork} onQuote={onQuote} />
          ))}
        </div>
      </div>
    </section>
  );
}
